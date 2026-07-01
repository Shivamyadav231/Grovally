import { useState } from "react";
import { Link } from "react-router-dom";
import {
  FaInstagram,
  FaFacebook,
  FaWhatsapp,
  FaPhone,
  FaArrowRight,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const [open, setOpen] = useState(null);

  const toggle = (key) => {
    setOpen(open === key ? null : key);
  };

  // ✅ ALL DATA NOW WITH LINKS
  const quickLinks = [
    { name: "Products", path: "/products" },
    { name: "Services", path: "/services" },
    { name: "Business Solutions", path: "/business-solutions" },
    { name: "Funding", path: "/funding" },
    { name: "Government Tenders", path: "/government-tenders" },
    { name: "Academy", path: "/academy" },
    { name: "Resources", path: "/resources" },
    { name: "Blog", path: "/blog" },
    { name: "Careers", path: "/careers" },
    { name: "Contact Us", path: "/contact" },
  ];

  const businessSolutions = [
    { name: "Company Registration", path: "/company-registration" },
    { name: "Trademark & IP", path: "/trademark-ip" },
    { name: "GST & Taxation", path: "/gst-taxation" },
    { name: "Startup Consulting", path: "/startup-consulting" },
    { name: "AI Solutions", path: "/ai-solutions" },
    { name: "Digital Marketing", path: "/digital-marketing" },
    {name:"Business Automation", path:"/business-automation"},
    {name:"Government Projects", path:"/government-projects"},
  ];

  const industries = [
    { name: "Startups", path: "/industries/startups" },
    { name: "MSMEs", path: "/industries/msmes" },
    { name: "Enterprises", path: "/industries/enterprises" },
    {name:"Manufacturing", path:"/industries/manufacturing"},
    { name: "Healthcare", path: "/industries/healthcare" },
    { name: "Education", path: "/industries/education" },
    { name: "Real Estate", path: "/industries/real-estate" },
    {name:"retail ", path:"/industries/retail-ecommerce"},
    {name:"logistics ", path:"/industries/logistics-supply-chain"},
    {name:"agriculture & food processing", path:"/industries/agriculture-food-processing"},
    {name:"finance ", path:"/industries/finance-banking"},
    {name:"government", path:"/industries/government-public-sector"},
  ];

  const resources = [
    { name: "Business Guides", path: "/resources/guides" },
    { name: "Startup Knowledge", path: "/resources/knowledge" },
    { name: "Funding Resources", path: "/resources/funding" },
    { name: "Tender Assistance", path: "/resources/tenders" },
    { name: "Case Studies", path: "/resources/case-studies" },
    { name: "Learning Center", path: "/resources/learning" },
    {name:"industry Insights", path:"/resources/insights"},
    {name: "Help Center", path:"/resources/help-center"},
  ];

  const legal = [
    { name: "Privacy Policy", path: "/privacy-policy" },
    { name: "Terms & Conditions", path: "/terms" },
    {name: "Cookie Policy", path: "/cookie-policy" },
    { name: "Refund Policy", path: "/refund" },
    { name: "Disclaimer", path: "/disclaimer"},
     { name:"Security",path:"/"},
     { name:"Accessibility",path:"/"},
    


     
  ];

  const group = [
    { name: "Grovally Business Solutions", path: "#" },
    { name: "Grovally Finance Solutions", path: "#" },
    { name: "Grovally Tender Solutions", path: "#" },
    { name: "Grovally Pro Tools", path: "#" },
    {}
  ];

  // 🔥 SECTION COMPONENT (ACCORDION)
  const Section = ({ title, items, id }) => (
    <div className="border-b border-white/10 lg:border-none">

      {/* HEADER */}
      <button
        onClick={() => toggle(id)}
        className="w-full flex justify-between items-center py-4"
      >
        <h3 className="text-sm font-bold">{title}</h3>
        <span className="lg:hidden text-red-500 text-xl">
          {open === id ? "−" : "+"}
        </span>
      </button>

      {/* CONTENT */}
      <ul
        className={`overflow-hidden transition-all duration-300 ${
          open === id ? "max-h-96 pb-4" : "max-h-0 lg:max-h-full"
        }`}
      >
        {items.map((item) => (
          <li key={item.name} className="py-1">
            <Link
              to={item.path}
              className="flex items-center gap-2 text-sm text-gray-300 hover:text-white"
            >
              <FaArrowRight className="text-red-500 mt-1" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );

  return (
    <footer className="bg-black text-white relative overflow-hidden">

      {/* HEADER TEXT */}
      <div className="text-center px-4 py-12 max-w-5xl mx-auto">

  <h2 className="text-2xl sm:text-4xl font-black text-red-600 leading-tight">
    Empowering India's Next Generation of Businesses
  </h2>

  <p className="mt-6 text-gray-300 text-sm md:text-base leading-7">
    GROVALLY is building one of India's most comprehensive business growth ecosystems, bringing together technology, business solutions, funding, government opportunities, education, and strategic resources on a single platform.
  </p>

  <p className="mt-4 text-gray-300 text-sm md:text-base leading-7">
    Our mission is to simplify entrepreneurship and empower startups, MSMEs, enterprises, and innovators with everything they need to build, grow, and scale successfully—from digital transformation and business consulting to tender assistance, investment support, AI-powered solutions, and industry-specific services.
  </p>

  <p className="mt-4 text-gray-300 text-sm md:text-base leading-7">
    <span className="font-semibold text-white">GROVALLY</span> is committed to becoming the trusted growth partner for millions of businesses across India and beyond.
  </p>

  <p className="mt-6 text-red-500 font-bold text-sm tracking-wide uppercase">
    Building Businesses • Creating Opportunities • Transforming India's Future
  </p>

</div>

      {/* GRID */}
     <div className="max-w-7xl mx-auto px-4 sm:px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 xl:grid-cols-7 gap-8">
  
  <Section title="Quick Links" items={quickLinks} id="q" />
  <Section title="Business Solutions" items={businessSolutions} id="b" />
  <Section title="Industries" items={industries} id="i" />
  <Section title="Resources" items={resources} id="r" />
  <Section title="Legal" items={legal} id="l" />
  <Section title="Grovally Group" items={group} id="g" />

  {/* CONTACT */}
  <div className="py-4">
    <h3 className="text-sm font-bold mb-4 text-white">Contact</h3>

    <div className="space-y-4 text-sm text-gray-300 leading-6">

      <div className="flex gap-2 items-start">
        <FaEnvelope className="text-red-500 mt-1" />
        <span>support@grovally.com</span>
      </div>

      <div className="flex gap-2 items-start">
        <FaPhone className="text-red-500 mt-1" />
        <span>+91 8920817608</span>
      </div>

      <div className="flex gap-2 items-start">
        <FaMapMarkerAlt className="text-red-500 mt-1" />
        <span>Greater Noida, India</span>
      </div>

      <div className="text-gray-400 text-xs pt-2 border-t border-white/10">
        Business Growth Ecosystem for Modern India
      </div>

      <div className="text-red-600 text-xs">
        www.grovally.com
      </div>

    </div>
  </div>

</div>

      {/* SECOND ROW */}
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-12 text-center">
  <p className="text-gray-300 text-sm md:text-base leading-8">
    Every year, thousands of entrepreneurs begin their journey with extraordinary dreams. Many never reach their true potential—not because they lack ambition, but because they lack timely guidance, the right resources, trusted support, and access to life-changing opportunities.

    <br /><br />

    At <span className="font-bold text-red-500">GROVALLY</span>, we believe no great dream should end because help was too difficult to find. Our vision is to build India's most trusted and comprehensive business growth ecosystem, where every entrepreneur, startup, MSME, and enterprise can access world-class technology, expert knowledge, funding, government opportunities, and business solutions through one unified platform.

    <br /><br />

    Together, we are empowering millions of businesses to build, grow, scale, and create a stronger future for India.
  </p>
</div>

        
        

        
      

      {/* SOCIAL ICONS */}
      <div className="flex justify-center gap-4 mt-8">
        <Social icon={<FaWhatsapp />} />
        <Social icon={<FaInstagram />} />
        <Social icon={<FaFacebook />} />
        <Social icon={<FaPhone />} />
      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-white/10 mt-6 py-6 text-center text-gray-400 text-xs px-4">
        <p className="text-white font-medium text-sm md:text-base leading-7">
  <span className="text-red-600 font-bold">
    © 2026 GROVALLY
  </span>{" "}
  All Rights Reserved. Proudly built in India through innovation, integrity,
  perseverance, collaboration, and an unwavering commitment to empowering
  entrepreneurs, startups, MSMEs, and enterprises.
</p>
         <h1 className="text-red-600 text-sm font-bold">
           Building India's Largest Business Growth Ecosystem
         </h1>
      </div>

    </footer>
  );
}

/* SOCIAL */
function Social({ icon }) {
  return (
    <div className="h-11 w-11 flex items-center justify-center rounded-full bg-white/10 border border-white/20 hover:scale-110 transition">
      {icon}
    </div>
  );
}