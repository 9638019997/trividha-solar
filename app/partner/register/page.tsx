'use client';
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
            <input type="text" required className="mt-1 w-full px-3 py-2 border rounded-lg" placeholder="Rajesh Kumar" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Company Name</label>
            <input type="text" required className="mt-1 w-full px-3 py-2 border rounded-lg" placeholder="Surat Green Energy LLP" />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mobile Number</label>
            <input type="tel" required className="mt-1 w-full px-3 py-2 border rounded-lg" placeholder="9876543210" />
          </div>
          <button type="submit" className="w-full py-2.5 px-4 bg-amber-600 hover:bg-amber-700 text-white font-medium rounded-lg">Submit Partner Application</button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/login" className="text-xs text-amber-600 hover:underline">Already a partner? Login</Link>
        </div>
      </div>
    </div>
  );
}
