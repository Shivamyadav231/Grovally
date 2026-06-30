export default function OrganizationSchema() {

  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",

    "name": "Grovally Group ",

    "url": "https://grovally.com",

    "logo": "https://grovally.com/logo.png",

    "description":
      "Grovally Group Private Limited provides IT solutions, AI automation, web development, mobile app development, digital marketing, BPO, KPO and business consulting services.",

    "sameAs": [
      "https://www.linkedin.com/company/grovally-group-pvt-ltd/",
      "https://www.facebook.com/profile.php?id=61580907737242",
      "https://www.instagram.com/grovallygroup?igsh=ZDVqa2ZxNG9wdHJh"
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