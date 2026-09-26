import type { Metadata } from 'next';
import ServiceDetailPage from '../components/service-detail-page';

export const metadata: Metadata = {
  title: 'Solar Water Pump Solutions',
  description: 'High-efficiency solar water pump systems for irrigation, water lifting and rural water supply applications.',
  openGraph: {
    title: 'Solar Water Pump Solutions | Trividha Solar',
    description: 'Efficient solar water pumps designed for irrigation and rural water systems across India.',
    url: 'https://trividhasolar.in/services/solar-water-pump',
    type: 'website',
  },
};

export default function SolarWaterPumpPage() {
  return (
    <ServiceDetailPage
      eyebrow="Water Pump"
      title="Solar water pump systems for dependable irrigation"
      description="Our solar water pump systems are engineered for sustainable water delivery in agriculture, community water access and remote facilities where uninterrupted pumping is critical."
      image="https://images.unsplash.com/photo-1471193945509-9ad0617afabf?auto=format&fit=crop&w=1200&q=80"
      benefits={[
        'Zero fuel cost for daily pumping',
        'Reliable performance in remote areas',
        'Reduced maintenance and operational hassle',
        'Improved crop productivity and water access',
        'Low lifetime ownership cost',
        'Engineered for Indian agricultural conditions',
      ]}
      suitableFor={[
        'Farm irrigation and field water supply',
        'Rural water supply systems',
        'Water lifting for livestock and horticulture',
        'Community and institutional water systems',
      ]}
      capacity="2 HP to 25 HP+"
      process={[
        'Map water demand, pump head and source depth against site layout.',
        'Select the right pump capacity and PV array configuration for performance reliability.',
        'Install controller, panels and pump assembly with field safety checks.',
        'Commission the system and verify output under real operating conditions.',
        'Provide follow-up support and seasonal performance review.',
      ]}
      faqs={[
        {
          question: 'Will the pump operate in cloudy weather?',
          answer: 'The system is designed to support daily water requirements with storage or hybrid support depending on demand and site conditions.',
        },
        {
          question: 'Is this suitable for deep borewell pumping?',
          answer: 'Yes. We design against source depth, pressure requirement and daily usage patterns for efficient deployment.',
        },
      ]}
    />
  );
}
