/// <reference types="vite/client" />

// Environment variables yang digunakan di sisi server (Vercel Serverless):
// - RESEND_API_KEY   → digunakan di api/contact.ts
// - CONTACT_EMAIL    → digunakan di api/contact.ts
// Variabel di atas TIDAK perlu di-declare di sini karena hanya diakses
// oleh serverless function (process.env), bukan oleh Vite frontend.
