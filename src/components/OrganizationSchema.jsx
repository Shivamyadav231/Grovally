export default function OrganizationSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    "@id": "https://grovally.com/#organization",

    "name": "Grovally Group Private Limited",

    "url": "https://grovally.com",

    "logo": {
      "@type": "ImageObject",
      "url": "https://grovally.com/logo.png"
    },

    "description":
      "Grovally Group Private Limited is India's business growth ecosystem providing AI solutions, software development, IT services, cloud computing, digital transformation, business consulting, BPO, KPO, LPO, banking solutions, government tender consulting and enterprise technology services.",

    "foundingDate": "2025",

    "email": "info@grovally.com",

    "telephone": "+91-6200072000",

    "address": {
      "@type": "PostalAddress",
      "addressCountry": "IN"
    },

    "sameAs": [
      "https://www.linkedin.com/company/grovally-group-pvt-ltd/",
      "https://www.facebook.com/profile.php?id=61580907737242",
      "https://www.instagram.com/grovallygroup"
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}