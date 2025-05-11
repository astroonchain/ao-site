import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function LandingPage() {
  return (
    <div className="bg-gradient-to-b from-black via-gray-900 to-black min-h-screen text-white">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center py-32 px-4">
        <motion.h1
          className="text-5xl font-bold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Jelajahi Dunia DeFi dengan Astro Onchain
        </motion.h1>
        <motion.p
          className="text-xl text-gray-300 max-w-xl mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
        >
          Token komunitas di jaringan Sei EVM yang mendukung inovasi dan partisipasi.
        </motion.p>
        <div className="space-x-4">
          <a
            href="https://www.geckoterminal.com/id/sei-evm/pools/0x5a0f8a653f6d04f0014675b788590f4587c70c11"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-full text-white"
          >
            Beli AO Sekarang
          </a>
          <a
            href="#about"
            className="border border-gray-400 px-6 py-2 rounded-full text-gray-300 hover:text-white hover:border-white"
          >
            Pelajari Lebih Lanjut
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="bg-gray-800 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Tentang Astro Onchain</h2>
        <p className="text-gray-300 max-w-3xl mx-auto">
          Astro Onchain adalah proyek token komunitas yang berjalan di jaringan Sei EVM.
          Kami berfokus pada pengembangan ekosistem keuangan terdesentralisasi (DeFi)
          yang inklusif, transparan, dan digerakkan oleh komunitas.
        </p>
      </section>

      {/* Roadmap Section */}
      <section id="roadmap" className="bg-gray-900 py-20 px-6">
        <h2 className="text-3xl font-bold text-center mb-10">Roadmap</h2>
        <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-8 text-center">
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">Q2 2025</h3>
            <p className="text-gray-300">Listing token AO dan peluncuran website resmi.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">Q3 2025</h3>
            <p className="text-gray-300">Staking platform dan integrasi komunitas DAO.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">Q4 2025</h3>
            <p className="text-gray-300">Kemitraan strategis dan audit keamanan.</p>
          </div>
          <div className="bg-gray-800 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-indigo-400 mb-2">2026</h3>
            <p className="text-gray-300">Ekspansi ke ekosistem blockchain lainnya.</p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="bg-gray-800 py-20 px-6 text-center">
        <h2 className="text-3xl font-bold mb-6">Hubungi Kami</h2>
        <p className="text-gray-400 mb-6">
          Jika Anda memiliki pertanyaan atau ingin berkolaborasi, jangan ragu untuk menghubungi kami.
        </p>
        <form className="max-w-lg mx-auto space-y-4">
          <input
            type="text"
            placeholder="Nama Anda"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          />
          <input
            type="email"
            placeholder="Email Anda"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          />
          <textarea
            rows="4"
            placeholder="Pesan Anda"
            className="w-full px-4 py-2 rounded bg-gray-700 text-white"
          ></textarea>
          <button
            type="submit"
            className="bg-indigo-600 hover:bg-indigo-700 px-6 py-2 rounded-full text-white"
          >
            Kirim
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 text-gray-500 text-sm">
        © 2025 Astro Onchain. Semua Hak Dilindungi.
      </footer>
    </div>
  );
}
