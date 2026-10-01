'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function BecomePartnerPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-lg w-full bg-white p-8 rounded-xl shadow-lg border border-gray-100">
        <h2 className="text-2xl font-bold text-gray-900 text-center">Become a Solar Partner</h2>
        <p className="text-sm text-gray-500 text-center mt-1">Join our network as a Channel Partner or Solar EPC Partner</p>
        
        <form onSubmit={(e) => { e.preventDefault(); alert('Partner application submitted!'); }} className="mt-6 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" required className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500" placeholder="Rajesh Kumar" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Company / Entity Name</label>
            <input type="text" required className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500" placeholder="Surat Green Energy LLP" />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
              <input type="tel" required className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500" placeholder="9876543210" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">City / District</label>
              <input type="text" required className="mt-1 w-full px-3 py-2 border rounded-lg focus:ring-amber-500 focus:border-amber-500" placeholder="Surat" />
            </div>
          </div>
          <button type="submit" className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg shadow-sm transition">
            Submit Partner Application
          </button>
        </form>

        <div className="mt-6 text-center text-sm text-gray-500">
          Already a partner?{' '}
          <Link href="/login" className="text-amber-600 font-semibold hover:underline">
            Customer / Partner Login
          </Link>
        </div>
      </div>
    </div>
  );
}
