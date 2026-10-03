import React from "react";

export const DownloadCenter = () => {
  const assets = [
    { title: "Trividha Corporate Profile", type: "PDF Overview", size: "2.4 MB" },
    { title: "Residential Solar Brochure", type: "Rooftop Guide", size: "1.8 MB" },
    { title: "Commercial & Industrial Portfolio", type: "Technical Specs", size: "3.1 MB" },
  ];

  return (
    <section className="py-12 bg-slate-950 border-t border-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
          <div>
            <h3 className="text-xl font-bold text-slate-100">Document & Asset Center</h3>
            <p className="text-xs text-slate-400 mt-1">Download official Trividha technical documents, guides, and corporate profiles.</p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {assets.map((item, idx) => (
            <div key={idx} className="p-4 rounded-lg border border-slate-800 bg-slate-900 flex justify-between items-center">
              <div>
                <p className="text-sm font-semibold text-slate-200">{item.title}</p>
                <p className="text-xs text-slate-500">{item.type} • {item.size}</p>
              </div>
              <button className="px-3 py-1.5 text-xs font-medium rounded bg-amber-500 hover:bg-amber-400 text-slate-950 transition">
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
