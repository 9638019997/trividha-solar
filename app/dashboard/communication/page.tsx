'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  getCommunicationData,
  sendBroadcastMessage,
  CommunicationStats,
} from '@/app/actions/communication';

export default function CommunicationDashboardPage() {
  const [data, setData] = useState<CommunicationStats | null>(null);
  const [loading, setLoading] = useState(true);
  const [submitting, setSubmitting] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);

  useEffect(() => {
    async function load() {
      setLoading(true);
      try {
        const res = await getCommunicationData();
        setData(res);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  const handleBroadcast = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitting(true);
    const form = new FormData(e.currentTarget);
    const res = await sendBroadcastMessage(form);
    setSubmitting(false);
    setFeedback(res.message);
    const updated = await getCommunicationData();
    setData(updated);
    setTimeout(() => setFeedback(null), 4000);
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 border-b border-gray-200 pb-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Communication & Notification Center</h1>
          <p className="text-sm text-gray-500">
            Omnichannel notification engine: WhatsApp, SMS, Email, and System Alerts
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/dashboard/communication/whatsapp"
            className="px-3 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold rounded-lg transition shadow-sm"
          >
            WhatsApp API
          </Link>
          <Link
            href="/dashboard/communication/templates"
            className="px-3 py-2 bg-gray-100 hover:bg-gray-200 text-gray-800 text-xs font-semibold rounded-lg transition"
          >
            Message Templates
          </Link>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase font-semibold text-gray-500">Total Dispatched</p>
          <p className="text-2xl font-bold text-gray-900 mt-2">
            {loading ? '...' : (data?.totalSent || 0).toLocaleString()}
          </p>
          <span className="text-xs text-emerald-600 font-medium">● 98.4% Delivery Rate</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase font-semibold text-gray-500">WhatsApp Messages</p>
          <p className="text-2xl font-bold text-emerald-600 mt-2">
            {loading ? '...' : (data?.whatsappCount || 0).toLocaleString()}
          </p>
          <span className="text-xs text-gray-500">Official Gupshup/Meta API</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase font-semibold text-gray-500">SMS Alerts</p>
          <p className="text-2xl font-bold text-blue-600 mt-2">
            {loading ? '...' : (data?.smsCount || 0).toLocaleString()}
          </p>
          <span className="text-xs text-gray-500">DLT Approved Templates</span>
        </div>
        <div className="bg-white p-5 rounded-xl border border-gray-200 shadow-sm">
          <p className="text-xs uppercase font-semibold text-gray-500">Email Invoices & Updates</p>
          <p className="text-2xl font-bold text-purple-600 mt-2">
            {loading ? '...' : (data?.emailCount || 0).toLocaleString()}
          </p>
          <span className="text-xs text-gray-500">Automated Mailgun/Resend</span>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Broadcast Engine */}
        <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
          <h3 className="font-bold text-base text-gray-900">Instant Broadcast Engine</h3>
          <p className="text-xs text-gray-500">
            Send immediate announcements, subsidy notices, or payment alerts to customers and channel partners.
          </p>

          {feedback && (
            <div className="p-3 bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs rounded-lg font-medium">
              {feedback}
            </div>
          )}

          <form onSubmit={handleBroadcast} className="space-y-4 text-xs">
            <div>
              <label className="font-semibold text-gray-700 block mb-1">Target Channel</label>
              <select name="channel" className="w-full p-2 border border-gray-300 rounded-lg text-xs">
                <option value="whatsapp">WhatsApp Business API</option>
                <option value="sms">Transactional SMS (DLT)</option>
                <option value="email">Email Notification</option>
                <option value="system">In-App Banner</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-gray-700 block mb-1">Recipient Group</label>
              <select name="recipientGroup" className="w-full p-2 border border-gray-300 rounded-lg text-xs">
                <option value="All Active Solar Customers">All Active Solar Customers</option>
                <option value="Channel Partners & EPCs">Channel Partners & EPCs</option>
                <option value="Pending Site Surveys">Pending Site Surveys (Reminder)</option>
                <option value="Surat District Customers">Surat District Customers</option>
                <option value="Tapi District Customers">Tapi District Customers</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-gray-700 block mb-1">Priority</label>
              <select name="priority" className="w-full p-2 border border-gray-300 rounded-lg text-xs">
                <option value="normal">Normal</option>
                <option value="high">Urgent (Immediate Push)</option>
                <option value="low">Low (Digest)</option>
              </select>
            </div>

            <div>
              <label className="font-semibold text-gray-700 block mb-1">Message Body</label>
              <textarea
                name="message"
                required
                rows={4}
                placeholder="Type notification text or select template..."
                className="w-full p-2 border border-gray-300 rounded-lg text-xs"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-semibold py-2.5 rounded-lg text-xs transition shadow-sm"
            >
              {submitting ? 'Broadcasting...' : 'Dispatch Message'}
            </button>
          </form>
        </div>

        {/* Live Notification Feed */}
        <div className="lg:col-span-2 bg-white p-6 rounded-xl border border-gray-200 shadow-sm space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-bold text-base text-gray-900">Live Activity & History</h3>
            <span className="text-xs px-2.5 py-1 bg-amber-100 text-amber-800 rounded-full font-semibold">
              Live Stream
            </span>
          </div>

          {loading ? (
            <p className="text-xs text-gray-400 py-10 text-center">Loading notification feed...</p>
          ) : !data?.recentLogs || data.recentLogs.length === 0 ? (
            <p className="text-xs text-gray-400 py-10 text-center">No recent communication logs.</p>
          ) : (
            <div className="space-y-3">
              {data.recentLogs.map((log) => (
                <div
                  key={log.id}
                  className="p-3.5 border border-gray-100 rounded-xl hover:bg-gray-50 transition flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span
                        className={`text-[10px] font-bold uppercase px-2 py-0.5 rounded-md ${
                          log.type === 'whatsapp'
                            ? 'bg-emerald-100 text-emerald-800'
                            : log.type === 'sms'
                            ? 'bg-blue-100 text-blue-800'
                            : 'bg-purple-100 text-purple-800'
                        }`}
                      >
                        {log.type}
                      </span>
                      <h4 className="font-semibold text-xs text-gray-900">{log.title}</h4>
                    </div>
                    <p className="text-xs text-gray-600">{log.message}</p>
                    {log.recipient && (
                      <p className="text-[11px] text-gray-400">To: {log.recipient}</p>
                    )}
                  </div>
                  <div className="text-right flex sm:flex-col items-center sm:items-end justify-between w-full sm:w-auto">
                    <span className="text-[10px] capitalize px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 font-semibold">
                      {log.status}
                    </span>
                    <span className="text-[10px] text-gray-400 mt-1">
                      {new Date(log.created_at).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
