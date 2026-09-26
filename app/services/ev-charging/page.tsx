import type { Metadata } from 'next';
import ServiceDetailPage from '../components/service-detail-page';

export const metadata: Metadata = {
  title: 'EV Charging Station Solutions',
  description: 'Solar-powered EV charging infrastructure for homes, businesses, commercial properties and fleet operations.',
  openGraph: {
    title: 'EV Charging Station Solutions | Trividha Solar',
    description: 'Commercial and residential EV charging powered by clean solar energy.',
    url: 'https://trividhasolar.in/services/ev-charging',
    type: 'website',
  },
};

export default function EVChargingServicePage() {
  return (
    <ServiceDetailPage
      eyebrow="EV Charging"
      title="Smart EV charging powered by clean solar energy"
      description="Trividha Solar designs EV charging systems that integrate with your facility’s power profile, reduce grid stress and support future-ready mobility infrastructure."
      image="https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&w=1200&q=80"
      benefits={[
        'Lower electricity cost through solar integration',
        'Brand-ready charging infrastructure for commercial sites',
        'Flexible charging options for homes and fleets',
        'Supports sustainable mobility goals',
        'Designed for future-ready expansion',
        'Safe, certified power distribution and controls',
      ]}
      suitableFor={[
        'Residential apartments and gated communities',
        'Office parks and commercial hubs',
        'Fleet depots and transport operators',
        'Retail outlets and hospitality properties',
      ]}
      capacity="3 kW to 250 kW+"
      process={[
        'Assess charging demand, site load and parking layout.',
        'Design the right charger mix and solar backup strategy.',
        'Plan electrical distribution, surge protection and monitoring.',
        'Install chargers, meters and controls with safety compliance.',
        'Commission with user onboarding and performance monitoring support.',
      ]}
      faqs={[
        {
          question: 'Can EV charging work with rooftop solar?',
          answer: 'Yes. Solar arrays can offset part or most of the charging energy load depending on site configuration and daytime usage.',
        },
        {
          question: 'Do you supply both AC and DC chargers?',
          answer: 'Yes. We recommend the right charger type based on expected usage, power availability and user requirements.',
        },
      ]}
    />
  );
}
