// src/pages/ContactPage.tsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Contacts: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [ok, setOk] = useState<null | boolean>(null);

  const APPS_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbx_l_WH84KWwyvlqNPCs88BGIaSwpFT-GUXDE6pGkS6UJBQrfhXPv-gc6v8LMK55e6Xvw/exec";

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget as HTMLFormElement;

    const payload = {
      name: (form.querySelector('#name') as HTMLInputElement).value.trim(),
      email: (form.querySelector('#email') as HTMLInputElement).value.trim(),
      type: (form.querySelector('#type') as HTMLSelectElement).value,
      message: (form.querySelector('#message') as HTMLTextAreaElement).value.trim(),
      website: (form.querySelector('#website') as HTMLInputElement)?.value || ''
    };
    if (payload.website) return;

    try {
      setLoading(true);
      setOk(null);
      await fetch(APPS_SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });
      setOk(true);
      form.reset();
    } catch {
      setOk(false);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="font-sans bg-white text-gray-900 min-h-screen flex flex-col">
      {/* En-tête */}
      <header className="bg-[#0A1A2F] text-white py-16 px-6 md:px-12 text-center">
        <motion.h1
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          className="text-4xl md:text-5xl font-bold mb-6"
        >
          Contactez <span className="text-[#00E0A1]">BALACO</span>
        </motion.h1>
        <p className="text-xl md:text-2xl max-w-3xl mx-auto">
          Investisseurs, banques et institutions publiques — parlons de votre collaboration.
        </p>
      </header>

      {/* Formulaire centré */}
      <section className="flex-grow flex items-center justify-center py-24 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white w-full max-w-3xl p-10 rounded-2xl shadow-lg"
        >
          <h2 className="text-3xl font-bold mb-8 text-center">Envoyez-nous un message</h2>

          <form className="space-y-6" onSubmit={onSubmit}>
            {/* Honeypot caché */}
            <input type="text" id="website" name="website" className="hidden" tabIndex={-1} autoComplete="off" />

            <div>
              <label htmlFor="name" className="block text-lg mb-2">Votre nom</label>
              <input
                type="text"
                id="name"
                className="w-full text-lg p-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00E0A1] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-lg mb-2">Email</label>
              <input
                type="email"
                id="email"
                className="w-full text-lg p-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00E0A1] focus:border-transparent"
                required
              />
            </div>

            <div>
              <label htmlFor="type" className="block text-lg mb-2">Vous êtes</label>
              <select
                id="type"
                className="w-full text-lg p-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00E0A1] focus:border-transparent"
              >
                <option value="">Sélectionnez...</option>
                <option value="investor">Investisseur</option>
                <option value="bank">Banque / Institution</option>
                <option value="tech">Partenaire technique</option>
                <option value="press">Presse</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block text-lg mb-2">Message</label>
              <textarea
                id="message"
                rows={8}
                className="w-full text-lg p-5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#00E0A1] focus:border-transparent"
                required
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#00E0A1] hover:bg-[#00c991] text-[#0A1A2F] px-8 py-5 rounded-lg font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg hover:shadow-xl disabled:opacity-60"
            >
              {loading ? 'Envoi…' : 'Envoyer le message'}
            </button>

            {ok === true && (
              <p className="text-green-600 mt-4 text-center">
                ✅ Message envoyé avec succès.
              </p>
            )}
            {ok === false && (
              <p className="text-red-600 mt-4 text-center">
                ❌ Échec de l’envoi. Essayez à nouveau ou écrivez directement à <strong>contact@balaco-rca.com</strong>.
              </p>
            )}
          </form>
        </motion.div>
      </section>
    </div>
  );
};

export default Contacts;
