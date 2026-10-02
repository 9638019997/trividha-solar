'use client';

import React, { useState } from 'react';
import { createServiceTicketAction } from '@/app/actions/customer';

export default function CustomerSupportPage() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const formData = new FormData(e.currentTarget);
    await createServiceTicketAction(formData);
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Support & Service Requests</h1>
        <p className="text-sm text-gray-500">Submit warranty claims, panel maintenance, or inverter support tickets</p>
      </div>

      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
        {submitted ? (
          <div className="p-6 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
            <h3 className="text-base font-bold text-emerald-800">Ticket Submitted Successfully</h3>
            <p className="text-xs text-emerald-600">Our engineering dispatch team will contact you within 24 hours.</p>
            <button
              onClick={() => setSubmitted(false)}
              className="mt-2 text-xs font-semibold text-emerald-700 underline"
            >
              Raise another ticket
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-xs font-semibold text-gray-700">Subject *</label>
              <input
                required
                name="subject"
                placeholder="e.g. Inverter Error Code 04 / Generation Drop"
                className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="text-xs font-semibold text-gray-700">Issue Category</label>
                <select name="priority" className="w-full mt-1 px-3 py-2 border rounded-lg text-sm">
                  <option value="medium">Inverter Breakdown</option>
                  <option value="low">Panel Cleaning / Maintenance</option>
                  <option value="high">Net Metering / DISCOM Issue</option>
                  <option value="medium">Warranty / Replacement</option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-gray-700">Priority</label>
                <select name="priority" className="w-full mt-1 px-3 py-2 border rounded-lg text-sm">
                  <option value="medium">Normal</option>
                  <option value="high">Urgent (Zero Generation)</option>
                  <option value="low">Routine Query</option>
                </select>
              </div>
            </div>
            <div>
              <label className="text-xs font-semibold text-gray-700">Description *</label>
              <textarea
                required
                rows={4}
                name="description"
                placeholder="Describe your issue with exact inverter display reading or symptoms..."
                className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-amber-600 hover:bg-amber-700 text-white font-medium px-5 py-2.5 rounded-lg text-sm shadow-sm transition"
            >
              {loading ? 'Submitting...' : 'Submit Service Ticket'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
