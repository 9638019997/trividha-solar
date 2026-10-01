import CommunicationNav from '@/components/communication/CommunicationNav';
export default function CommunicationDashboard() {
  return (
    <div className="p-6 max-w-7xl mx-auto space-y-6">
      <h1 className="text-2xl font-bold text-gray-900">Omnichannel Communication Center</h1>
      <CommunicationNav />
      <div className="bg-white p-6 rounded-xl border border-gray-200 shadow-sm">
        <p className="text-gray-600">WhatsApp, SMS, and Email communication modules.</p>
      </div>
    </div>
  );
}
