'use client';

import React, { useEffect, useState, useTransition } from 'react';
import CRMNav from '@/components/crm/CRMNav';
import { getLeads, updateLeadStatus, deleteLead, createLeadAction } from '@/app/actions/leads';
import { Lead } from '@/lib/types/leads';

export default function LeadsPipelinePage() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState<string>('all');
  const [isPending, startTransition] = useTransition();
  const [formError, setFormError] = useState<string | null>(null);

  const [showAddModal, setShowAddModal] = useState(false);
  const [newLead, setNewLead] = useState({
    full_name: '',
    email: '',
    phone: '',
    city: '',
    service_type: 'Residential Rooftop',
    monthly_bill: '',
    notes: '',
  });

  async function loadLeads() {
    setLoading(true);
    try {
      const data = await getLeads();
      setLeads(data || []);
    } catch (err: unknown) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    loadLeads();
  }, []);

  const filteredLeads = leads.filter((lead) => {
    const matchesSearch =
      (lead.full_name || '').toLowerCase().includes(search.toLowerCase()) ||
      (lead.email || '').toLowerCase().includes(search.toLowerCase()) ||
      (lead.phone || '').toLowerCase().includes(search.toLowerCase()) ||
      (lead.city || '').toLowerCase().includes(search.toLowerCase());

    const matchesStatus = statusFilter === 'all' || lead.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const handleStatusChange = (id: string, newStatus: Lead['status']) => {
    startTransition(async () => {
      const res = await updateLeadStatus(id, newStatus);
      if (res.success) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status: newStatus } : l))
        );
      } else {
        alert(res.message || 'Failed to update status');
      }
    });
  };

  const handleDelete = (id: string) => {
    if (!confirm('Are you sure you want to delete this lead?')) return;
    startTransition(async () => {
      const res = await deleteLead(id);
      if (res.success) {
        setLeads((prev) => prev.filter((l) => l.id !== id));
      } else {
        alert(res.message || 'Failed to delete lead');
      }
    });
  };

  const handleCreateLead = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormError(null);
    const formData = new FormData();
    formData.append('full_name', newLead.full_name);
    formData.append('email', newLead.email);
    formData.append('phone', newLead.phone);
    formData.append('city', newLead.city);
    formData.append('service_type', newLead.service_type);
    if (newLead.monthly_bill) formData.append('monthly_bill', newLead.monthly_bill);
    if (newLead.notes) formData.append('notes', newLead.notes);

    const res = await createLeadAction({}, formData);
    if (res.success) {
      setShowAddModal(false);
      setNewLead({
        full_name: '',
        email: '',
        phone: '',
        city: '',
        service_type: 'Residential Rooftop',
        monthly_bill: '',
        notes: '',
      });
      loadLeads();
    } else {
      setFormError(res.message || 'Failed to create lead');
    }
  };

  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Lead Pipeline (Live Supabase)</h1>
          <p className="text-sm text-gray-500">Manage real-time customer and partner inquiries</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="bg-amber-500 hover:bg-amber-600 text-white font-medium px-4 py-2 rounded-lg shadow-sm transition"
        >
          + Add New Lead
        </button>
      </div>

      <CRMNav />

      <div className="bg-white p-4 rounded-xl border border-gray-200 shadow-sm flex flex-col md:flex-row gap-4 items-center justify-between">
        <input
          type="text"
          placeholder="Search by name, email, phone, or city..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-96 px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
        />
        <div className="flex items-center gap-2 w-full md:w-auto">
          <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Status:</label>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="w-full md:w-auto px-3 py-2 border border-gray-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-amber-500"
          >
            <option value="all">All Statuses</option>
            <option value="new">New</option>
            <option value="contacted">Contacted</option>
            <option value="qualified">Qualified</option>
            <option value="converted">Converted</option>
            <option value="closed">Closed</option>
          </select>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden">
        {loading ? (
          <div className="p-12 text-center text-gray-500">Loading leads from Supabase...</div>
        ) : filteredLeads.length === 0 ? (
          <div className="p-12 text-center text-gray-500">
            <p className="text-base font-medium">No leads found</p>
            <p className="text-xs text-gray-400 mt-1">Try adjusting your filters or add a new lead.</p>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm text-gray-700">
              <thead className="bg-gray-50 border-b border-gray-200 text-xs uppercase text-gray-500 font-semibold">
                <tr>
                  <th className="p-4">Name / Contact</th>
                  <th className="p-4">City</th>
                  <th className="p-4">Service</th>
                  <th className="p-4">Monthly Bill</th>
                  <th className="p-4">Status</th>
                  <th className="p-4 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {filteredLeads.map((lead) => (
                  <tr key={lead.id} className="hover:bg-gray-50 transition">
                    <td className="p-4">
                      <div className="font-semibold text-gray-900">{lead.full_name}</div>
                      <div className="text-xs text-gray-500">{lead.phone} • {lead.email}</div>
                    </td>
                    <td className="p-4">{lead.city || '—'}</td>
                    <td className="p-4 text-xs font-medium text-gray-600">{lead.service_type}</td>
                    <td className="p-4">{lead.monthly_bill ? `₹${lead.monthly_bill}` : '—'}</td>
                    <td className="p-4">
                      <select
                        disabled={isPending}
                        value={lead.status}
                        onChange={(e) => handleStatusChange(lead.id, e.target.value as Lead['status'])}
                        className="text-xs font-semibold px-2.5 py-1 rounded-full border border-gray-200 cursor-pointer focus:outline-none"
                      >
                        <option value="new">New</option>
                        <option value="contacted">Contacted</option>
                        <option value="qualified">Qualified</option>
                        <option value="converted">Converted</option>
                        <option value="closed">Closed</option>
                      </select>
                    </td>
                    <td className="p-4 text-right">
                      <button
                        onClick={() => handleDelete(lead.id)}
                        disabled={isPending}
                        className="text-red-500 hover:text-red-700 text-xs font-semibold hover:underline"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {showAddModal && (
        <div className="fixed inset-0 bg-black/40 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-xl max-w-md w-full p-6 space-y-4 shadow-xl">
            <div className="flex justify-between items-center">
              <h3 className="text-lg font-bold text-gray-900">Add Lead to Supabase</h3>
              <button onClick={() => setShowAddModal(false)} className="text-gray-400 hover:text-gray-600">✕</button>
            </div>
            {formError && <p className="text-xs text-red-500">{formError}</p>}
            <form onSubmit={handleCreateLead} className="space-y-3">
              <div>
                <label className="text-xs font-medium text-gray-700">Full Name *</label>
                <input
                  required
                  type="text"
                  value={newLead.full_name}
                  onChange={(e) => setNewLead({ ...newLead, full_name: e.target.value })}
                  className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
                />
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-medium text-gray-700">Email *</label>
                  <input
                    required
                    type="email"
                    value={newLead.email}
                    onChange={(e) => setNewLead({ ...newLead, email: e.target.value })}
                    className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700">Phone *</label>
                  <input
                    required
                    type="tel"
                    value={newLead.phone}
                    onChange={(e) => setNewLead({ ...newLead, phone: e.target.value })}
                    className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
                  />
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="text-xs font-medium text-gray-700">City</label>
                  <input
                    type="text"
                    value={newLead.city}
                    onChange={(e) => setNewLead({ ...newLead, city: e.target.value })}
                    className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-gray-700">Monthly Bill (₹)</label>
                  <input
                    type="number"
                    value={newLead.monthly_bill}
                    onChange={(e) => setNewLead({ ...newLead, monthly_bill: e.target.value })}
                    className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-medium text-gray-700">Service Type</label>
                <select
                  value={newLead.service_type}
                  onChange={(e) => setNewLead({ ...newLead, service_type: e.target.value })}
                  className="w-full mt-1 px-3 py-2 border rounded-lg text-sm"
                >
                  <option value="Residential Rooftop">Residential Rooftop</option>
                  <option value="Commercial Solar">Commercial Solar</option>
                  <option value="Industrial EPC">Industrial EPC</option>
                  <option value="Agricultural Solar Pump">Agricultural Solar Pump</option>
                </select>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button
                  type="button"
                  onClick={() => setShowAddModal(false)}
                  className="px-4 py-2 border rounded-lg text-sm text-gray-600 hover:bg-gray-50"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-amber-500 hover:bg-amber-600 text-white rounded-lg text-sm font-medium"
                >
                  Save Lead
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
