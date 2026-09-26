import type { Metadata } from 'next';
import ServiceDetailPage from '../components/service-detail-page';

export const metadata: Metadata = {
  title: 'Residential Solar Solutions',
  description: 'Home solar systems for rooftops, villas and apartment communities with efficient savings, cleaner power and expert installation.',
  openGraph: {
    title: 'Residential Solar Solutions | Trividha Solar',
    description: 'Smart rooftop solar systems for homes and villas across India.',
    url: 'https://trividhasolar.in/services/residential',
    type: 'website',
  },
};

export default function ResidentialServicePage() {
  return (
    <ServiceDetailPage
      eyebrow="Residential"
      title="Clean rooftop solar for smarter homes"
      description="Our residential solar systems are engineered to help households lower daytime electricity bills, improve energy security and invest in a cleaner and more efficient power future."
      image="https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1200&q=80"
      benefits={[
        'Lower monthly electricity bills',
        'Reduced dependence on grid power',
        'Ideal for rooftops and villas',
        'Scheme guidance and subsidy support',
        'Long-term, low-maintenance performance',
        'Designed for sustained residential use',
      ]}
      suitableFor={[
        'Independent homes and villas',
        'Apartment rooftops and communities',
        'Small businesses operating from home',
        'Families seeking energy cost stability',
      ]}
      capacity="3 kW to 15 kW"
      process={[
        'Review rooftop space, shade profile and household consumption data.',
        'Design a right-sized system aligned with bill savings and future expansion needs.',
        'Select premium modules, inverters and accessories for long-term reliability.',
        'Install and commission the system after electrical and safety verification.',
        'Provide maintenance guidance and support for ongoing performance monitoring.',
      ]}
      faqs={[
        {
          question: 'Will solar work for my home even with partial roof shade?',
          answer: 'Yes, we assess your site carefully and design around roof layout, shade and load pattern to maximise generation where possible.',
        },
        {
          question: 'Do you help with subsidy and documentation?',
          answer: 'Yes. We help customers understand system sizing and support available government scheme information to simplify the process.',
        },
      ]}
    />
  );
}
