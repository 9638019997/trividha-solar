import React from 'react';

export const StructuredData = () => {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://trividhasolar.com';

  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Trividha Solar',
    image: `${siteUrl}/assets/trividha_logo.png`,
    '@id': `${siteUrl}/#organization`,
    url: siteUrl,
    telephone: process.env.NEXT_PUBLIC_CONTACT_PHONE || '+91-XXXXXXXXXX',
    priceRange: '₹₹₹',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Tapi / Surat',
      addressRegion: 'Gujarat',
      addressCountry: 'IN',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 21.1702,
      longitude: 72.8311,
    },
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '18:00',
    },
    sameAs: [
      process.env.NEXT_PUBLIC_GOOGLE_BUSINESS_URL || 'https://maps.google.com',
    ],
  };

  const breadcrumbSchema = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: [
      {
        '@type': 'ListItem',
        position: 1,
        name: 'Home',
        item: siteUrl,
      },
      {
        '@type': 'ListItem',
        position: 2,
        name: 'Solar Services & Subsidies',
        item: `${siteUrl}/#schemes`,
      },
    ],
  };

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'What is the government subsidy available under PM Surya Ghar Yojana?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Under PM Surya Ghar Muft Bijli Yojana, residential rooftop solar installations can receive up to ₹78,000 direct benefit subsidy from the central government.',
        },
      },
      {
        '@type': 'Question',
        name: 'Which areas does Trividha Solar provide EPC installations in Gujarat?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Trividha Solar specializes in turnkey rooftop and commercial solar installations across South Gujarat including Tapi, Surat, Navsari, and surrounding districts.',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </>
  );
};
