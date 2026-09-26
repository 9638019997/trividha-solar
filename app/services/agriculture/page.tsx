import type { Metadata } from 'next';
import ServiceDetailPage from '../components/service-detail-page';

export const metadata: Metadata = {
  title: 'Agriculture Solar Solutions',
  description: 'Solar-powered irrigation, pump support and energy systems for farms, agri-processing units and rural operations across India.',
  openGraph: {
    title: 'Agriculture Solar Solutions | Trividha Solar',
    description: 'Agriculture solar solutions for efficient irrigation, lower power cost and improved farm productivity.',
    url: 'https://trividhasolar.in/services/agriculture',
    type: 'website',
  },
};

export default function AgricultureServicePage() {
  return (
    <ServiceDetailPage
      eyebrow="Agriculture"
      title="Solar power for farms, irrigation and rural growth"
      description="Trividha Solar engineers dependable solar systems that help agriculture businesses reduce diesel dependence, improve irrigation reliability and lower operational cost across seasonal demand cycles."
      image="https://images.unsplash.com/photo-1501004318641-b39e6451bec6?auto=format&fit=crop&w=1200&q=80"
      benefits={[
        'Lower diesel and grid power dependence',
        'Reliable daytime irrigation support',
        'Improved ROI for farm operations',
        'Scalable systems for expanding agriculture use',
        'Low maintenance power backing',
        'Government scheme guidance and subsidy support',
      ]}
      suitableFor={[
        'Farms and agricultural lands',
        'Irrigation-intensive crops and greenhouses',
        'Cold storage and agri-processing units',
        'Rural institutions and clusters',
      ]}
      capacity="3 kW to 100 kW+"
      process={[
        'Assess water requirement, land layout and transformer availability.',
        'Customise solar pump or inverter-backed system design for irrigation demand.',
        'Coordinate approvals, components and installation scheduling.',
        'Test controls, energy output and pump performance before handover.',
        'Provide remote monitoring support and seasonal maintenance guidance.',
      ]}
      faqs={[
        {
          question: 'Can solar help with irrigation during peak summer?',
          answer: 'Yes. Solar systems are designed around crop load, pump ratings and sunlight availability to provide dependable daytime irrigation performance.',
        },
        {
          question: 'Do you help with subsidy guidance?',
          answer: 'Yes. We guide customers through scheme eligibility, documentation and practical implementation support for agriculture-focused energy projects.',
        },
      ]}
    />
  );
}
