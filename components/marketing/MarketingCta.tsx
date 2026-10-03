import React from 'react';

export const MarketingCta = () => {
  const phone = process.env.NEXT_PUBLIC_CONTACT_PHONE || '+919638019997';
  const whatsappUrl = `https://wa.me/${phone.replace(/[^0-9]/g, '')}?text=Hello%20Trividha%20Solar,%20I%20am%20interested%20in%20a%20solar%20consultation.`;

  return (
    <aside aria-label="Quick contact" className="fixed bottom-6 right-6 z-50 flex items-center gap-3">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="px-4 py-2.5 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs shadow-lg flex items-center gap-2 transition"
      >
        <span>💬 WhatsApp Us</span>
      </a>
      <a
        href={`tel:${phone}`}
        className="px-4 py-2.5 rounded-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold text-xs shadow-lg flex items-center gap-1.5 transition"
      >
        <span>📞 Call Now</span>
      </a>
    </aside>
  );
};
