import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";

const faqs = [
  {
    question: "What is GROVALLY ?",
    answer:
      "GROVALLY is an all-in-one business growth platform designed to help startups, MSMEs, enterprises, entrepreneurs, professionals, and organizations build, manage, and scale their businesses from a single ecosystem. Instead of relying on multiple vendors for technology, consulting, funding, marketing, legal support, business software, and learning, GROVALLY brings everything together under one trusted platform.Our mission is to solve every major business challenge through innovative products, expert services, strategic solutions, funding opportunities, industry knowledge, and professional support..",
  },
  {
    question: " Who can use GROVALLY ?",

    answer:
    "GROVALLY is built for businesses of every size and industry.Our platform serves:Entrepreneurs StartupsMSMEs Large EnterprisesManufacturersService ProvidersRetail Businesses Exporters & ImportersEducational InstitutionsHealthcare OrganizationsGovernment ContractorsConsultantsAgenciesNGOsProfessionalsWhether you're launching a new venture or managing a large organization, GROVALLY provides solutions tailored to your business goals.",
  },
  
    
  
  {
    question: " What products does GROVALLY offer?",
    answer:
      "GROVALLY develops business-focused digital products that improve operational efficiency, customer experience, and business growth.Our product portfolio includes :Entrepreneurs,Startups, MSME,Large Enterprises,Manufacturers,Service Providers,Retail Businesses,Exporters & Importers,Educational Institutions,Healthcare Organizations,Government Contractors,Consultants,Agencies,NGOs,Professionals,Whether you're launching a new venture or managing a large organization, GROVALLY provides solutions tailored to your business goals.",
  },
  {
    question: "What products does GROVALLY offer?",
    answer:
      "GROVALLY develops business-focused digital products that improve operational efficiency, customer experience, and business growth.Our product portfolio includes: ,Business ERP Software,CRM Solutions,HR Management Systems,Accounting Solutions,Inventory Management Software,Real Estate Software,Hospital Management Systems,School & College ERP,AI-Powered Business Tools,Helpdesk Software,Project Management Systems,Business Automation Tools,Mobile Applications,Custom Enterprise Software,Cloud-Based Business Platforms,Every product is designed to be scalable, secure, and easy to use.",
  },
  {
    question: " What business services does GROVALLY provide?",
    answer:
      "GROVALLY offers a wide range of professional services that help businesses establish, grow, and transform. Our services include:Website DevelopmentMobile App DevelopmentCustom Software DevelopmentERP DevelopmentAI IntegrationUI/UX DesignDigital MarketingBrandingSearch Engine Optimization (SEO)Performance MarketingBusiness ConsultingTechnology ConsultingCloud SolutionsBusiness AutomationIT Support & Maintenance Our experts work closely with clients to deliver measurable business outcomes.",
  },
  {
  question: "Why choose GROVALLY instead of multiple vendors?",
  answer: `Managing multiple service providers often leads to communication gaps, project delays, higher costs, and inconsistent quality.

GROVALLY eliminates these challenges by offering a complete business ecosystem under one roof. Our integrated services combine technology, consulting, funding, education, tender support, and business resources, giving you a single point of contact, faster execution, seamless coordination, and long-term strategic partnership.`
},
{
  question: "Can GROVALLY build customized business software?",
  answer: `Yes. Every business has unique workflows and operational requirements. GROVALLY specializes in designing and developing fully customized software solutions tailored to your organization's goals.

Our custom software solutions include:

• ERP Systems
• CRM Platforms
• Industry-Specific Software
• HRMS
• Accounting Platforms
• Inventory Management Systems
• Healthcare Software
• Real Estate Platforms
• Manufacturing Systems
• AI-Based Business Applications`
},
{
  question: "Does GROVALLY provide AI-powered business solutions?",
  answer: `Absolutely.

Artificial Intelligence is transforming modern businesses, and GROVALLY helps organizations leverage AI to improve automation, productivity, customer engagement, operational efficiency, and data-driven decision-making.

Our AI solutions include:

• AI Chatbots
• Business Automation
• Predictive Analytics
• AI Customer Support
• AI Content Solutions
• Workflow Automation
• Intelligent Reporting
• AI Knowledge Bases`
},
{
  question: "How does GROVALLY help startups?",
  answer: `Startups require technology, branding, funding, mentorship, legal guidance, marketing, and operational support to succeed.

GROVALLY provides an integrated startup ecosystem that helps entrepreneurs transform ideas into successful businesses through custom technology solutions, expert consulting, funding assistance, business education, branding, digital marketing, and long-term growth strategies.`
},
{
  question: "Can GROVALLY support enterprise-level organizations?",
  answer: `Yes.

Our enterprise solutions are designed for scalability, security, high performance, and digital transformation. We help organizations modernize operations and improve efficiency through advanced technology solutions.

Our enterprise capabilities include:

• Enterprise Software
• Multi-Location ERP
• Cloud Infrastructure
• AI Solutions
• Large Team Collaboration
• Data Security
• Digital Transformation
• Business Intelligence`
},
{
  question: "Is GROVALLY suitable for every industry?",
  answer: `Yes.

GROVALLY delivers customized business and technology solutions for organizations across diverse industries. Our solutions are tailored to meet industry-specific requirements while ensuring scalability, efficiency, and long-term growth.

We serve industries including:

• Healthcare
• Education
• Manufacturing
• Retail & E-Commerce
• Construction
• Finance
• Logistics
• Hospitality
• Agriculture
• Information Technology (IT)
• Pharmaceuticals
• Real Estate
• Government
• Professional Services
• NGOs & Non-Profit Organizations`
},
{
  question: "What business solutions does GROVALLY provide?",
  answer: `GROVALLY offers end-to-end business solutions designed to support digital transformation, operational excellence, and sustainable growth. Our services include digital transformation, business automation, custom software development, AI implementation, cloud solutions, business consulting, compliance support, growth strategy, digital marketing, funding assistance, and industry-specific technology solutions that help businesses solve real-world challenges efficiently.`
},
{
  question: "How can GROVALLY help my business grow?",
  answer: `GROVALLY helps businesses achieve sustainable growth through strategic planning, technology adoption, AI integration, digital marketing, automation, funding support, and expert business consulting. Our solutions improve operational efficiency, reduce costs, increase productivity, strengthen customer engagement, and accelerate long-term business growth.`
},
{
  question: "Does GROVALLY help businesses raise funding?",
  answer: `Yes.

GROVALLY supports startups and businesses by connecting them with suitable funding opportunities while helping them prepare investment-ready documentation, financial plans, business strategies, and investor presentations to improve their chances of securing funding.`
},
{
  question: "What funding options are available?",
  answer: `Depending on your business stage and requirements, GROVALLY can assist with various funding options, including:

• Angel Investment
• Venture Capital
• Seed Funding
• Growth Capital
• Debt Financing
• Government Grants
• Startup Schemes
• Strategic Partnerships`
},
{
  question: "How does the funding process work?",
  answer: `Our funding support process typically includes:

• Business Evaluation
• Documentation Review
• Financial Planning
• Investor Readiness Assessment
• Pitch Deck Preparation
• Investor Introductions
• Due Diligence Support
• Funding Assistance`
},
{
  question: "Do I need an established company to apply for funding?",
  answer: `Not necessarily.

Many investors also consider innovative early-stage startups with strong business models, experienced founders, scalable ideas, and significant market potential. GROVALLY helps determine the most suitable funding opportunities based on your business stage and objectives.`
},
{
  question: "What documents are generally required for funding?",
  answer: `The required documents may vary depending on the investor or funding program, but commonly include:

• Business Plan
• Investor Pitch Deck
• Financial Projections
• Company Registration Documents
• Founders' Profiles
• Capitalization (Cap) Table
• Market Analysis
• Revenue Model
• Legal & Compliance Documents`
},
{
  question: "Does GROVALLY help prepare investor pitch decks?",
  answer: `Yes.

Our experts help businesses create professional investor pitch decks that clearly present the business model, market opportunity, competitive advantage, financial projections, growth strategy, and investment potential to increase investor confidence.`
},
{
  question: "Can established businesses also receive funding support?",
  answer: `Yes.

GROVALLY provides funding assistance for startups, MSMEs, growing businesses, and established enterprises seeking capital for expansion, technology upgrades, product development, market expansion, or business transformation.`
},
{
  question: "Does GROVALLY provide strategic business consulting?",
  answer: `Yes.

Our strategic business consulting services help organizations improve business operations, technology adoption, market positioning, process optimization, scalability, digital transformation, risk management, and long-term growth planning to achieve sustainable business success.`
},
{
  question: "What are GROVALLY Tender Services?",
  answer: `GROVALLY Tender Services help businesses discover, manage, prepare, and participate in government, PSU, private, and international tenders through a comprehensive tender management ecosystem. Our solutions simplify the entire bidding process, from finding opportunities to successful bid submission.`
},
{
  question: "What types of tenders are available?",
  answer: `Businesses can explore a wide range of tender opportunities, including:

• Government Tenders
• PSU Tenders
• Private Tenders
• International Tenders
• Live Tenders
• GeM Opportunities
• E-Tenders
• Corrigendum
• Tender Results
• Award Notifications`
},
{
  question: "How can I search tenders?",
  answer: `You can easily search tenders using multiple filters, including:

• Product Name
• Service Category
• Organization
• Department
• Tender ID
• State
• City
• Keywords
• Ministry
• Closing Date`
},
{
  question: "Does GROVALLY provide tender alerts?",
  answer: `Yes.

GROVALLY provides timely tender alerts and notifications based on your business profile and industry, helping you stay informed about new opportunities, corrigendums, deadlines, and important tender updates so you never miss a bidding opportunity.`
},
{
  question: "Does GROVALLY provide tender consultancy?",
  answer: `Yes.

Our tender experts provide end-to-end consultancy, including eligibility assessment, bid preparation, documentation review, compliance verification, submission support, and strategic guidance to improve your chances of winning contracts.`
},
{
  question: "Can GROVALLY prepare technical and financial bids?",
  answer: `Yes.

We provide professional assistance in preparing:

• Technical Bids
• Financial Bids
• BOQs (Bill of Quantities)
• Compliance Documentation
• Declarations
• Affidavits
• Supporting Documents`
},
{
  question: "Who can benefit from GROVALLY Tender Services?",
  answer: `Our tender solutions are designed for organizations of all sizes, including:

• Manufacturers
• Contractors
• Suppliers
• Startups
• MSMEs
• IT Companies
• EPC Firms
• Consultants
• Healthcare Providers
• Educational Institutions
• Exporters
• Importers
• Service Providers`
},
{
  question: "Does GROVALLY support GeM?",
  answer: `Yes.

We provide complete GeM (Government e-Marketplace) support, including:

• GeM Registration
• Product Listing
• Catalog Management
• Bid Participation
• Order Management
• Compliance Support`
},
{
  question: "Can I track awarded contracts?",
  answer: `Yes.

GROVALLY helps businesses analyze awarded contracts, winning bidders, procurement trends, competitor insights, and market opportunities, enabling better decision-making and stronger bidding strategies for future tenders.`
},
{
  question: "Why should businesses use GROVALLY for tenders?",
  answer: `GROVALLY offers a complete tender ecosystem that combines tender discovery, expert consultancy, documentation support, bid preparation, submission assistance, automated alerts, compliance guidance, and business intelligence on a single platform. This helps businesses save time, improve bid quality, and increase their chances of winning valuable contracts.`
},
{
  question: "What are GROVALLY Tender Services?",
  answer: `GROVALLY Tender Services help businesses discover, manage, prepare, and participate in government, PSU, private, and international tenders through a comprehensive tender management ecosystem. Our solutions simplify the entire bidding process, from finding opportunities to successful bid submission.`
},
{
  question: "What types of tenders are available?",
  answer: `Businesses can explore a wide range of tender opportunities, including:

• Government Tenders
• PSU Tenders
• Private Tenders
• International Tenders
• Live Tenders
• GeM Opportunities
• E-Tenders
• Corrigendum
• Tender Results
• Award Notifications`
},
{
  question: "How can I search tenders?",
  answer: `You can easily search tenders using multiple filters, including:

• Product Name
• Service Category
• Organization
• Department
• Tender ID
• State
• City
• Keywords
• Ministry
• Closing Date`
},
{
  question: "Does GROVALLY provide tender alerts?",
  answer: `Yes.

GROVALLY provides timely tender alerts and notifications based on your business profile and industry, helping you stay informed about new opportunities, corrigendums, deadlines, and important tender updates so you never miss a bidding opportunity.`
},
{
  question: "Does GROVALLY provide tender consultancy?",
  answer: `Yes.

Our tender experts provide end-to-end consultancy, including eligibility assessment, bid preparation, documentation review, compliance verification, submission support, and strategic guidance to improve your chances of winning contracts.`
},
{
  question: "Can GROVALLY prepare technical and financial bids?",
  answer: `Yes.

We provide professional assistance in preparing:

• Technical Bids
• Financial Bids
• BOQs (Bill of Quantities)
• Compliance Documentation
• Declarations
• Affidavits
• Supporting Documents`
},
{
  question: "Who can benefit from GROVALLY Tender Services?",
  answer: `Our tender solutions are designed for organizations of all sizes, including:

• Manufacturers
• Contractors
• Suppliers
• Startups
• MSMEs
• IT Companies
• EPC Firms
• Consultants
• Healthcare Providers
• Educational Institutions
• Exporters
• Importers
• Service Providers`
},
{
  question: "Does GROVALLY support GeM?",
  answer: `Yes.

We provide complete GeM (Government e-Marketplace) support, including:

• GeM Registration
• Product Listing
• Catalog Management
• Bid Participation
• Order Management
• Compliance Support`
},
{
  question: "Can I track awarded contracts?",
  answer: `Yes.

GROVALLY helps businesses analyze awarded contracts, winning bidders, procurement trends, competitor insights, and market opportunities, enabling better decision-making and stronger bidding strategies for future tenders.`
},
{
  question: "Why should businesses use GROVALLY for tenders?",
  answer: `GROVALLY offers a complete tender ecosystem that combines tender discovery, expert consultancy, documentation support, bid preparation, submission assistance, automated alerts, compliance guidance, and business intelligence on a single platform. This helps businesses save time, improve bid quality, and increase their chances of winning valuable contracts.`
},
{
  question: "What is GROVALLY's vision?",
  answer: `Our vision is to become India's largest integrated business ecosystem that empowers startups, MSMEs, enterprises, and organizations through technology, innovation, funding, education, digital transformation, and strategic business support. We aim to create sustainable growth opportunities and drive long-term business success.`
},
{
  question: "What is GROVALLY's mission?",
  answer: `Our mission is to solve real-world business challenges by delivering innovative products, expert services, digital transformation solutions, business education, funding support, and strategic consulting that help organizations improve efficiency, accelerate growth, and achieve sustainable success.`
},
{
  question: "How can I contact GROVALLY?",
  answer: `You can connect with GROVALLY through our official website, contact forms, email, phone, or customer support channels. Whether you need sales assistance, technical support, partnership opportunities, or general business consultation, our team is ready to help.`
},
{
  question: "Does GROVALLY provide customer support?",
  answer: `Yes.

GROVALLY is committed to providing responsive and reliable customer support throughout your business journey. Our team assists with product inquiries, technical issues, implementation guidance, and ongoing support to ensure a seamless experience.`
},
{
  question: "Is my business data secure?",
  answer: `Yes.

We follow industry best practices for data protection, secure infrastructure, controlled access, encryption, privacy management, and cybersecurity to ensure that your business information remains safe, confidential, and protected.`
},
{
  question: "Does GROVALLY work with clients across India?",
  answer: `Yes.

GROVALLY serves startups, MSMEs, enterprises, and organizations across India through our digital-first business ecosystem. We also aim to support businesses globally by delivering innovative technology solutions and strategic business services.`
},
{
  question: "Can businesses request customized solutions?",
  answer: `Absolutely.

Every organization has unique goals and operational requirements. GROVALLY develops customized software, business services, AI solutions, consulting strategies, and digital transformation plans tailored to your specific business needs.`
},
{
  question: "How does GROVALLY maintain quality?",
  answer: `Quality is at the core of everything we do. Our approach combines experienced professionals, well-defined processes, continuous improvement, rigorous quality assurance, industry best practices, and customer-focused delivery to ensure reliable and high-quality business solutions.`
},
{
  question: "How can I get started with GROVALLY?",
  answer: `Getting started is simple. Explore our products and services, share your business requirements with our team, connect with our experts for a consultation, and receive a customized solution designed to achieve your business objectives and long-term growth.`
},
{
  question: "Why should I choose GROVALLY?",
  answer: `GROVALLY is more than a technology company—it's a complete business growth ecosystem. By bringing together technology solutions, AI, consulting, funding support, tender services, business education, digital marketing, and expert guidance under one platform, we help businesses innovate, streamline operations, accelerate growth, and achieve long-term success with a trusted strategic partner.`
},

];


// AEO FAQ Schema
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map((faq) => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer,
    },
  })),
};


export default function FAQ() {

  const [open, setOpen] = useState(null);
  const [showAll, setShowAll] = useState(false);

  const visibleFaqs = showAll ? faqs : faqs.slice(0, 4);


  return (
    <>

      {/* AEO Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(faqSchema),
        }}
      />


      <section className="py-16 bg-white">

        <div className="max-w-5xl mx-auto px-4">

          <h2 className="text-4xl font-bold text-center text-red-600 mb-4">
            Frequently Asked Questions
          </h2>


          <p className="text-center text-black mb-10">
            Find answers to common questions about Grovally services.
          </p>


          <div className="space-y-4">

            {visibleFaqs.map((faq, index) => (

              <div
                key={index}
                className="border border-red-100 rounded-2xl overflow-hidden shadow-sm"
              >

                <button
                  onClick={() =>
                    setOpen(open === index ? null : index)
                  }
                  className="w-full flex justify-between items-center p-5 text-left hover:bg-red-50"
                >

                  <span className="font-semibold text-black">
                    {faq.question}
                  </span>


                  {open === index ? (
                    <FaMinus className="text-red-600" />
                  ) : (
                    <FaPlus className="text-red-600" />
                  )}

                </button>


                {open === index && (

                  <div className="px-5 pb-5 text-black">
                    {faq.answer}
                  </div>

                )}

              </div>

            ))}

          </div>



          {!showAll && (

            <div className="flex justify-center mt-8">

              <button
                onClick={() => setShowAll(true)}
                className="bg-red-600 text-white px-6 py-3 rounded-full hover:bg-red-700 transition"
              >
                Learn More →
              </button>

            </div>

          )}


        </div>

      </section>

    </>
  );
}