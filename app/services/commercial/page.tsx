import type { Metadata } from 'next';
import ServiceDetailPage from '../components/service-detail-page';

export const metadata: Metadata = {
  title: 'Commercial Solar Solutions',
  description: 'Commercial solar systems for offices, retail centres, warehouses and business spaces aiming for lower energy bills and sustainable operations.',
  openGraph: {
    title: 'Commercial Solar Solutions | Trividha Solar',
    description: 'Business-focused solar power systems for reduced utility cost and higher sustainability.',
    url: 'https://trividhasolar.in/services/commercial',
    type: 'website',
  },
};

export default function CommercialServicePage() {
  return (
    <ServiceDetailPage
      eyebrow="Commercial"
      title="Solar systems built for business performance"
      description="Trividha Solar delivers commercial solar solutions that help offices, retail properties and operational spaces cut energy costs, improve resilience and support long-term sustainability goals."
      image="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?auto=format&fit=crop&w=1200&q=80"
      benefits={[
        'Reduce operational electricity cost',
        'Improve ESG and sustainability reporting',
        'Create predictable long-term energy planning',
        'Support faster business growth with stable power',
        'Reduce reliance on utility price volatility',
        'Reliable output for varied load conditions',
      ]}
      suitableFor={[
        'Office and business campuses',
        'Warehouses and logistics facilities',
        'Retail stores and shopping centres',
        'Healthcare, education and hospitality facilities',
      ]}
      capacity="20 kW to 1 MW+"
      process={[
        'Audit current load profile, rooftop availability and operational hours.',
        'Design the system to maximise demand offset and financial ROI.',
        'Plan approvals, inverter strategy and electrical connectivity.',
        'Execute installation and performance testing under commercial conditions.',
        'Provide commissioning support and ongoing asset guidance.',
      ]}
      faqs={[
        {
          question: 'How quickly can a commercial system pay back?',
          answer: 'Payback depends on load profile, tariff structure and site condition, but well-designed systems often achieve strong savings within a practical commercial timeframe.',
        },
        {
          question: 'Can the system support business operations during working hours?',
          answer: 'Yes. Our designs are built to align with actual usage patterns so solar generation supports daytime operations effectively.',
        },
      ]}
    />
  );
}
