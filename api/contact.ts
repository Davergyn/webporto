/**
 * Vercel Serverless Function — POST /api/contact
 *
 * Menerima data form kontak, memvalidasi input, lalu mengirim email
 * ke pemilik website menggunakan Resend.
 *
 * Environment variables yang dibutuhkan (set di Vercel dashboard):
 *   RESEND_API_KEY  — API key dari Resend
 *   CONTACT_EMAIL   — Alamat email tujuan (pemilik website)
 */

import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

// ─── Types ───────────────────────────────────────────────────────────
interface ContactBody {
    name: string;
    email: string;
    message: string;
    _gotcha?: string; // honeypot field — harus kosong
}

// ─── Helper: validasi format email sederhana ─────────────────────────
function isValidEmail(email: string): boolean {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

// ─── Handler ─────────────────────────────────────────────────────────
export default async function handler(
    req: VercelRequest,
    res: VercelResponse
) {
    // 1. Hanya terima method POST
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    // 2. Ambil data dari body request
    const { name, email, message, _gotcha } = req.body as ContactBody;

    // 3. Honeypot check — jika diisi, kemungkinan besar bot
    //    Return 200 agar bot mengira berhasil, tapi tidak kirim email
    if (_gotcha) {
        return res.status(200).json({ success: true });
    }

    // 4. Validasi input
    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Semua field wajib diisi.' });
    }

    if (!isValidEmail(email)) {
        return res.status(400).json({ error: 'Format email tidak valid.' });
    }

    // 5. Pastikan environment variables tersedia
    const apiKey = process.env.RESEND_API_KEY;
    const contactEmail = process.env.CONTACT_EMAIL;

    if (!apiKey || !contactEmail) {
        console.error('Missing environment variables: RESEND_API_KEY or CONTACT_EMAIL');
        return res.status(500).json({ error: 'Konfigurasi server bermasalah.' });
    }

    // 6. Kirim email via Resend
    const resend = new Resend(apiKey);

    try {
        const { error } = await resend.emails.send({
            from: 'Portfolio Contact <onboarding@resend.dev>', // ganti dengan domain terverifikasi nanti
            to: contactEmail,
            replyTo: email, // reply-to menggunakan email pengirim
            subject: `Portfolio Contact: ${name}`,
            html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #6366f1;">Pesan Baru dari Portfolio</h2>
          <hr style="border: none; border-top: 1px solid #e5e7eb;" />
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Pesan:</strong></p>
          <div style="background: #f9fafb; padding: 16px; border-radius: 8px; white-space: pre-wrap;">
            ${message}
          </div>
          <hr style="border: none; border-top: 1px solid #e5e7eb; margin-top: 24px;" />
          <p style="color: #9ca3af; font-size: 12px;">
            Dikirim melalui contact form portfolio website.
          </p>
        </div>
      `,
        });

        if (error) {
            console.error('Resend error:', error);
            return res.status(500).json({ error: 'Gagal mengirim email.' });
        }

        return res.status(200).json({ success: true });
    } catch (err) {
        console.error('Unexpected error:', err);
        return res.status(500).json({ error: 'Terjadi kesalahan server.' });
    }
}
