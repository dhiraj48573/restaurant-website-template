import React, { useEffect } from 'react';
import { useConfig } from '../context/ConfigContext';

export default function SEOHead({ title, description, path = '/' }) {
  const { config } = useConfig();

  const siteTitle = title
    ? `${title} | ${config.business.name}`
    : `${config.business.name} | ${config.business.tagline}`;

  const metaDesc =
    description ||
    `Experience authentic North Indian cuisine, special thalis, tandoori delicacies, and highway dhaba flavours at ${config.business.name}, ${config.contact.address.city}, ${config.contact.address.state}. Pure ingredients, family dining & express takeaway.`;

  useEffect(() => {
    // 1. Update Title
    document.title = siteTitle;

    // 2. Update Meta Description
    let metaDescriptionTag = document.querySelector('meta[name="description"]');
    if (!metaDescriptionTag) {
      metaDescriptionTag = document.createElement('meta');
      metaDescriptionTag.setAttribute('name', 'description');
      document.head.appendChild(metaDescriptionTag);
    }
    metaDescriptionTag.setAttribute('content', metaDesc);

    // 3. Inject Schema.org JSON-LD structured data for Restaurant & Local SEO
    const schemaId = 'restaurant-structured-data';
    let scriptTag = document.getElementById(schemaId);
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = schemaId;
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }

    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Restaurant',
      name: config.business.name,
      description: metaDesc,
      image: config.gallery[0]?.image || 'https://thetastehouse.in/og-image.jpg',
      servesCuisine: ['North Indian', 'Punjabi', 'Tandoori', 'Dhaba', 'Vegetarian'],
      priceRange: '₹₹ (₹150 - ₹500)',
      telephone: config.contact.phoneCall,
      address: {
        '@type': 'PostalAddress',
        streetAddress: `${config.contact.address.line1}, ${config.contact.address.line2}`,
        addressLocality: config.contact.address.city,
        addressRegion: config.contact.address.state,
        postalCode: config.contact.address.pincode,
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '29.9457',
        longitude: '78.1642',
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
          opens: '07:00',
          closes: '23:30',
        },
      ],
      hasMenu: `${window.location.origin}/menu`,
      ...(config.business.fssai.hasLicense
        ? {
            identifier: {
              '@type': 'PropertyValue',
              name: 'FSSAI License Number',
              value: config.business.fssai.licenseNumber,
            },
          }
        : {}),
    };

    scriptTag.textContent = JSON.stringify(structuredData);
  }, [siteTitle, metaDesc, config, path]);

  return null;
}
