import type { Metadata } from 'next';
import ServiceDetailPage from '../components/service-detail-page';

export const metadata: Metadata = {
  title: 'Industrial Solar EPC Solutions',
  description: 'Custom industrial solar systems for factories, plants and manufacturing units seeking reliable energy savings and long-term performance.',
  openGraph: {
    title: 'Industrial Solar EPC Solutions | Trividha Solar',
    description: 'High-capacity solar systems for industrial facilities and plant operations.',
    url: 'https://trividhasolar.in/services/industrial',
    type: 'website',
  },
};

export default function IndustrialServicePage() {
  return (
    <ServiceDetailPage
      eyebrow="Industrial"
      title="Large-scale solar for continuous industrial operations"
      description="Trividha Solar supports industrial projects with engineering-led design, premium execution and dependable power systems that align with operational continuity and energy efficiency goals."
      image="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1200&q=80"
      benefits={[
        'Reduce plant energy cost significantly',
        'Improve operational resilience and efficiency',
        'Support large energy loads with scalable systems',
        'Strong long-term ROI and asset performance',
        'Improve sustainability metrics and compliance',
        'High reliability for critical manufacturing processes',
      ]}
      suitableFor={[
        'Factories and manufacturing units',
        'Warehouses and logistics parks',
        'Plants with consistent daytime loads',
        'Industrial campuses and process facilities',
      ]}
      capacity="100 kW to 5 MW+"
      process={[
        'Map facility load profile, plant operating pattern and energy goals.',
        'Conduct engineering review, design validation and plant integration planning.',
        'Finalize premium components and installation sequencing for minimal disruption.',
        'Execute project delivery with robust commissioning and testing.',
        'Support life-cycle monitoring, fault response and maintenance planning.',
      ]}
      faqs={[
        {
          question: 'Can industrial solar be integrated without disrupting operations?',
          answer: 'Yes. We sequence installation around your operational requirements and design around production schedules to limit disruption.',
        },
        {
          question: 'Is the system suitable for high-load facilities?',
          answer: 'Yes. Large-scale industrial systems are designed around demand patterns, contour constraints and operational continuity needs.',
        },
      ]}
    />
  );
}
