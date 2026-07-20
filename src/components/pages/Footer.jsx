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

  const quickLinks = [
  {
    name: "Products",
    children: [
      { name: "Business Software", path: "/products/software" },
      { name: "AI Products", path: "/products/ai" },
      { name: "Mobile Apps", path: "/products/apps" },
      { name: "Websites", path: "/products/websites" },
      { name: "IT Services", path: "/services/it" },
      { name: "Marketing", path: "/services/marketing" },
      { name: "Finance", path: "/services/finance" },
      { name: "Consulting", path: "/services/consulting" },
    ],
  },
 

];

const businessSolutions = [
  {
    name: "Business Registration",
    children: [
      { name: "Company Registration", path: "/company-registration" },
      { name: "Trademark & IP", path: "/trademark-ip" },
      { name: "GST & Taxation", path: "/gst-taxation" },
       { name: "Startup Consulting", path: "/startup-consulting" },
      { name: "AI Solutions", path: "/ai-solutions" },
      { name: "Digital Marketing", path: "/digital-marketing" },
      { name: "Business Automation", path: "/business-automation" },
      { name: "Government Projects", path: "/government-projects" },
    ],
  },
 
 
];

const industries = [
  {
    name: "Business",
    children: [
      { name: "Startups", path: "/industries/startups" },
      { name: "MSMEs", path: "/industries/msmes" },
      { name: "Enterprises", path: "/industries/enterprises" },
       { name: "Manufacturing", path: "/industries/manufacturing" },
      { name: "Retail & E-commerce", path: "/industries/retail-ecommerce" },
      { name: "Logistics", path: "/industries/logistics-supply-chain" },
      { name: "Healthcare", path: "/industries/healthcare" },
       { name: "Government", path: "/industries/government-public-sector" },
   
      
    ],
  },
 

];

const resources = [
  {
    name: "Knowledge",
    children: [
      { name: "Business Guides", path: "/resources/guides" },
      { name: "Startup Knowledge", path: "/resources/knowledge" },
      { name: "Learning Center", path: "/resources/learning" },
      { name: "Funding Resources", path: "/resources/funding" },
      { name: "Tender Assistance", path: "/resources/tenders" },
      { name: "Industry Insights", path: "/resources/insights" },
      { name: "Case Studies", path: "/resources/case-studies" },
      { name: "Help Center", path: "/resources/help-center" },
    ],
  },
 
];

const legal = [
  { name: "Privacy Policy", path: "/privacy-policy" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Cookie Policy", path: "/cookie-policy" },
  { name: "Refund Policy", path: "/refund" },
  { name: "Disclaimer", path: "/disclaimer" },
  { name: "Security", path: "/security" },
  { name: "Accessibility", path: "/accessibility" },
];

const group = [
  { name: "Grovally Business Solutions", path: "/business" },
  { name: "Grovally Finance Solutions", path: "/finance" },
  { name: "Grovally Tender Solutions", path: "/tender" },
  { name: "Grovally Pro Tools", path: "/tools" },
  { name: "Grovally Academy", path: "/academy" },
];
const Quicks = [
    { name: "Funding", path: "/funding" },
  { name: "Government Tenders", path: "/government-tenders" },
  { name: "Academy", path: "/academy" },
  { name: "Resources", path: "/resources" },
  { name: "Blog", path: "/blog" },
  { name: "Careers", path: "/careers" },
  { name: "Contact Us", path: "/contact" },
 
];
  // 🔥 SECTION COMPONENT (ACCORDION)
  const Section = ({ title, items, id }) => (
  <div className="border-b border-white/10 lg:border-none">
    {/* Header */}
    <button
      onClick={() => toggle(id)}
      className="w-full flex justify-between items-center py-4 lg:cursor-default"
    >
      <h3 className="text-white font-bold text-base">{title}</h3>

      <span className="lg:hidden text-red-500 text-xl">
        {open === id ? "−" : "+"}
      </span>
    </button>

    {/* Content */}
    <div
      className={`overflow-hidden transition-all duration-300 ${
        open === id ? "max-h-[900px] pb-4" : "max-h-0 lg:max-h-full"
      }`}
    >
      {items.map((item, index) => (
        <div key={index} className="mb-5">
          {item.children ? (
            <>
              {/* Parent */}
              <div className="text-white font-semibold text-sm mb-2 flex items-center gap-2">
                <span className="text-red-500">●</span>
                {item.name}
              </div>

              {/* Branch */}
              <div className="ml-3 border-l border-white/20 pl-4">
                {item.children.map((child) => (
                  <Link
                    key={child.name}
                    to={child.path}
                    className="flex items-center gap-2 py-1.5 text-gray-400 hover:text-red-400 transition"
                  >
                    <span className="text-red-500">├─</span>
                    {child.name}
                  </Link>
                ))}
              </div>
            </>
          ) : (
            <Link
              to={item.path}
              className="flex items-center gap-2 py-1.5 text-gray-300 hover:text-red-400 transition"
            >
              <FaArrowRight className="text-red-500 text-[10px]" />
              {item.name}
            </Link>
          )}
        </div>
      ))}
    </div>
  </div>
);

  return (
    <footer className="bg-black text-white relative overflow-hidden">

      {/* HEADER TEXT */}
      <div className="relative overflow-hidden border-b border-white/10">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-gradient-to-b from-red-900/10 via-transparent to-transparent"></div>

  <div className="relative max-w-6xl mx-auto px-6 py-20 text-center">

    <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
      GROVALLY BUSINESS ECOSYSTEM
    </span>

    <h2 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
      <span className="text-white">Empowering India's</span>
      <br />
      <span className="text-red-500">Next Generation of Businesses</span>
    </h2>

    <div className="mx-auto mt-6 h-1 w-28 rounded-full bg-red-600"></div>

    <p className="mx-auto mt-8 max-w-4xl text-gray-300 text-base md:text-lg leading-8">
      GROVALLY is building one of India's most comprehensive business growth
      ecosystems, bringing together technology, business solutions, funding,
      government opportunities, education, and strategic resources on a single
      platform.
    </p>

    <p className="mx-auto mt-6 max-w-4xl text-gray-400 text-base leading-8">
      Our mission is to simplify entrepreneurship and empower startups,
      MSMEs, enterprises, and innovators with everything they need to build,
      grow, and scale successfully—from digital transformation and business
      consulting to tender assistance, investment support, AI-powered
      solutions, and industry-specific services.
    </p>

    <p className="mx-auto mt-6 max-w-3xl text-gray-300 text-base leading-8">
      <span className="font-bold text-white">GROVALLY</span> is committed to
      becoming the trusted growth partner for millions of businesses across
      India and beyond.
    </p>

    <div className="mt-10 flex justify-center">
      <div className="rounded-full border border-red-500/30 bg-red-500/10 px-8 py-4">
        <p className="text-sm md:text-base font-bold uppercase tracking-[0.2em] text-red-400">
          Building Businesses • Creating Opportunities • Transforming India's Future
        </p>
      </div>
    </div>

  </div>
</div>

      {/* GRID */}
     <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-10">
  
  <Section title="Quick Links" items={quickLinks} id="q" />
  <Section title="Business Solutions" items={businessSolutions} id="b" />
  <Section title="Industries" items={industries} id="i" />
  <Section title="Resources" items={resources} id="r" />
  <Section title="Legal" items={legal} id="l" />
  <Section title="Grovally Group" items={group} id="g" />
  <Section title="Quick" items={Quicks} id="s"/>

  {/* CONTACT */}
  <div className="py-4">
    <h3 className="text-sm font-bold mb-4 text-white">Contact</h3>

    <div className="space-y-4 text-sm text-gray-300 leading-6">

      <div className="flex gap-2 items-start">
        <FaEnvelope className="text-red-500 mt-1" />
        <span>support@grovally.com</span>
      </div>

      <div className="flex gap-2 items-start">
        <FaPhone className="text-red-500 rotate-180 mt-1" />
        <span>+91 8920817608</span>
      </div>

     <div className="flex items-start gap-3">
  <FaMapMarkerAlt className=" text-3xl text-red-500" />

  <a
    href="https://maps.google.com/?q=TF-03+Suntwinlight+Delta-1+Greater+Noida+UP+201310"
    target="_blank"
    rel="noopener noreferrer"
    className="text-gray-300 transition hover:text-red-500"
  >
    TF-03, Suntwinlight, Delta-1, Greater Noida,
    Uttar Pradesh - 201310
  </a>
</div>

      <div className="text-gray-400 text-3xl font-bold pt-2 border-t border-white/10">
        Business Growth Ecosystem for Modern India
      </div>

     

    </div>
  </div>

</div>

      {/* SECOND ROW */}
     
<div className="relative border-y border-white/10 bg-gradient-to-b from-white/[0.02] to-transparent">

  <div className="max-w-6xl mx-auto px-6 py-20 text-center">

    {/* <span className="inline-flex items-center rounded-full border border-red-500/30 bg-red-500/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.25em] text-red-400">
      Our Vision
    </span> */}

    <h3 className="mt-6 text-3xl md:text-5xl font-bold text-white leading-tight">
      Building the Future of
      <span className="block text-red-500">
        Indian Entrepreneurship
      </span>
    </h3>

    <div className="mx-auto mt-6 h-1 w-24 rounded-full bg-red-600"></div>

    <p className="mt-8 max-w-5xl mx-auto text-gray-300 text-base md:text-lg leading-9">
      Every year, thousands of entrepreneurs begin their journey with
      extraordinary dreams. Many never reach their true potential—not because
      they lack ambition, but because they lack timely guidance, the right
      resources, trusted support, and access to life-changing opportunities.
    </p>

    <p className="mt-8 max-w-5xl mx-auto text-gray-400 text-base md:text-lg leading-9">
      At <span className="font-bold text-red-600">GROVALLY</span>, we believe no
      great dream should end because help was too difficult to find. Our vision
      is to build India's most trusted and comprehensive business growth
      ecosystem, where every entrepreneur, startup, MSME, and enterprise can
      access world-class technology, expert knowledge, funding, government
      opportunities, and business solutions through one unified platform.
    </p>

    <p className="mt-8 max-w-4xl mx-auto text-lg font-medium text-white leading-9">
      Together, we are empowering millions of businesses to
      <span className="text-red-500"> build, grow, scale, </span>
      and create a stronger future for India.
    </p>

    <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-8">

      <div>
        <h4 className="text-3xl font-bold text-red-500">1k+</h4>
        <p className="mt-2 text-sm text-gray-400">Businesses to Empower</p>
      </div>

      <div>
        <h4 className="text-3xl font-bold text-red-500">360°</h4>
        <p className="mt-2 text-sm text-gray-400">Business Solutions</p>
      </div>

      <div>
        <h4 className="text-3xl font-bold text-red-500">AI</h4>
        <p className="mt-2 text-sm text-gray-400">Powered Innovation</p>
      </div>

      <div>
        <h4 className="text-3xl font-bold text-red-500">24×7</h4>
        <p className="mt-2 text-sm text-gray-400">Business Support</p>
      </div>

    </div>

  </div>

</div>
        
        

        
      

      {/* SOCIAL ICONS */}
      <div className="mt-8 flex justify-center gap-4">
  <a
    href="https://wa.me/919876543210"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Social icon={<FaWhatsapp />} />
  </a>

  <a
    href="https://www.instagram.com/yourusername"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Social icon={<FaInstagram />} />
  </a>

  <a
    href="https://www.facebook.com/yourpage"
    target="_blank"
    rel="noopener noreferrer"
  >
    <Social icon={<FaFacebook />} />
  </a>

  <a href="tel:+919876543210">
    <Social icon={<FaPhone />} />
  </a>
</div>

      {/* COPYRIGHT */}
     <div className="border-t border-white/10 mt-10">

  <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col lg:flex-row items-center justify-between gap-6">

    {/* Left */}
    <div className="text-center lg:text-left">
      <p className="text-sm text-gray-400 leading-7">
        <span className="font-bold text-red-500">
          © 2026 GROVALLY.
        </span>{" "}
        All Rights Reserved.
      </p>

      <p className="mt-2 text-xs md:text-sm text-gray-500 leading-6 max-w-2xl">
        Proudly built in India through innovation, integrity, collaboration,
        and an unwavering commitment to empowering entrepreneurs, startups,
        MSMEs, and enterprises.
      </p>
    </div>

    {/* Center */}
    <div className="hidden lg:block h-12 w-px bg-white/10"></div>

    {/* Right */}
    <div className="text-center lg:text-right">
      <h3 className="text-red-500 font-bold tracking-wider uppercase">
        Building India's Largest
      </h3>

      <p className="text-white text-sm mt-1">
        Business Growth Ecosystem
      </p>
    </div>

  </div>

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