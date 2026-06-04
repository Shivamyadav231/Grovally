import React from "react";
import {Link} from "react-router-dom";
const shivam=[
{
  icon: "🏢",
  title: "Business Loan Solutions",
  description:
    "New Business Loans, MSME Business Loans, Working Capital Loans, Startup Funding, Machinery & Equipment Loans, Corporate Business Loans, Expansion Loans, Growth Capital",
},
{
  icon: "📈",
  title: "MSME Business Loans",
  description:
    "MSME Term Loans, MSME Working Capital, CGTMSE Loans, Mudra Loans, Stand-Up India Funding",
},
{
  icon: "💰",
  title: "Working Capital Finance",
  description:
    "Cash Credit, Overdraft, Invoice Discounting, Supply Chain Finance, Receivables Financing",
},
{
  icon: "🏭",
  title: "Suitable For",
  description:
    "Manufacturing, Traders, Exporters, Wholesalers, Retailers, Service Providers",
},
{
  icon: "✅",
  title: "Eligibility Criteria",
  description:
    "Minimum 2 Years Business Vintage, GST Registration, PAN Card, Bank Statements",
},
{
  icon: "📄",
  title: "Documents Required",
  description:
    "PAN Card, Aadhaar Card, GST Certificate, ITR Returns, Bank Statements",
},
{
  icon: "💳",
  title: "Cash Credit",
  description:
    "New CC Limits, Enhancement of Existing CC Limits, Transfer of CC Limits, Consortium Banking Arrangements, Working Capital Assessment",
},
{
  icon: "🏦",
  title: "Overdraft (OD) Facility",
  description:
    "Business Overdraft, Current Account OD, Property OD, OD Against Fixed Deposit, OD Enhancement, OD Restructuring",
},
{
  icon: "🏠",
  title: "Loan Against Property (LAP)",
  description:
    "Residential Property, Commercial Property, Industrial Property, Self-Occupied Property, Rental Income Based LAP, Balance Transfer LAP, Top-Up LAP",
},
{
  icon: "📊",
  title: "Machinery & Equipment Loans",
  description:
    "New Machinery Purchase, Used Machinery Purchase, Plant & Equipment Financing, Factory Setup Funding, CNC Machine Funding, Printing Machine Funding, Textile Machinery Finance, Construction Equipment Finance, Medical Equipment Loans",
},
{
  icon: "🚚",
  title: "Commercial Vehicle Loans",
  description:
    "Truck Loans, Bus Loans, Fleet Financing, Logistics Vehicle Finance, Construction Vehicle Loans, Earthmover Finance, Transport Business Finance",
},
{
  icon: "🚀",
  title: "Startup Funding Solutions",
  description:
    "Seed Funding, Angel Investment, Venture Capital, Private Loans, Startup Growth Capital, Series A, B & C Funding Support",
},
{
  icon: "💼",
  title: "Investor Funding & Private Funding",
  description:
    "Angel Investors Funding, HNI Funding, Family Office Funding, Strategic Investors Funding, Corporate Investors Joint Ventures Funding, Equity Investments",
},
{
  icon: "⚡",
  title: "Venture Capital (VC) Funding",
  description:
    "Early Stage VC Funding, Growth Stage Funding, Scale-up Capital, Venture Debt, International VC Connections",
},
{
  icon: "💡",
  title: "Private Equity Funding",
  description:
    "Growth Equity, Buyout Funding, Expansion Capital, Strategic Acquisition, Business Scaling Capital",
},
{
  icon: "📑",
  title: "Debt Syndication Services",
  description:
    "Consortium Funding, Multi Bank Funding, Structured Debt Solutions, Corporate Debt Arrangements, Large Ticket Funding",
},
{
  icon: "📌",
  title: "Trade Finance Solutions",
  description:
    "Letter of Credit (LC), Import Bill Financing, Buyer's Credit, Supplier Credit",
},
{
  icon: "🔍",
  title: "Supply Chain Finance",
  description:
    "Vendor Finance, Dealer Finance, Distributor Finance, Receivables Financing, Invoice Discounting",
},
{
  icon: "🏗️",
  title: "Construction & Real Estate Finance",
  description:
    "Builder Finance, Project Construction Finance, Real Estate Development Funding",
},
{
  icon: "🏥",
  title: "Structured Finance Solutions",
  description:
    "Structured Debt, Mezzanine Funding, Bridge Funding, Acquisition Finance, Leveraged Finance, Special Situation Funding",
},
{
  icon: "📈",
  title: "Corporate Finance Advisory",
  description:
    "Financial Planning, Fundraising Strategy, Debt Restructuring, Balance Sheet Optimization, Capital Structuring, Mergers & Acquisitions Advisory",
},
{
  icon: "🏛️",
  title: "Government Subsidy & Scheme Funding",
  description:
    "CGTMSE, Mudra Loans, Stand-Up India, PMEGP, MSME Subsidies, Manufacturing Incentives, State Government Subsidies",
},
{
  icon: "📋",
  title: "Credit Rating & Financial Documentation",
  description:
    "CMA Report Preparation, Project Report Preparation, DPR Preparation, Financial Projections, Business Plans, Bankable Reports, Credit Rating Assistance",
},
{
  icon: "🔄",
  title: "Loans Takeover & Balance Transfer",
  description:
    "Existing Loan Transfer, Interest Rate Reduction, Additional Funding Through Top-Up, Debt Consolidation",
},
{
  icon: "🛡️",
  title: "NPA & Stressed Asset Resolution",
  description:
    "Loan Restructuring, Debt Settlement Advisory, Revival Funding, Business Turnaround Solutions, SARFAESI Advisory Support",
},
{
  icon: "💹",
  title: "Financial Consultancy Services",
  description:
    "Financial Health Analysis, Business Valuation, Funding Eligibility Assessment, Cash Flow Planning, Profitability Analysis, Investment Planning",
},
]






  


function Business() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-pink-50">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 text-white py-24 px-6">
        <div className="absolute inset-0 bg-black/10"></div>

        <div className="relative max-w-6xl mx-auto text-center">
          <div className="inline-block px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full mb-6 text-sm font-semibold">
            Trusted Business Finance Partner
          </div>

          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 leading-tight">
            Business Loan Solutions
          </h1>

          <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-white/90">
            Empower your business with flexible financing solutions for
            expansion, machinery purchase, working capital requirements and
            long-term growth.
          </p>
        </div>
      </section>

     
      <section className="max-w-7xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {shivam.map((card, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white p-8 border border-gray-100 shadow-lg hover:shadow-[0_20px_60px_rgba(236,72,153,0.20)] hover:-translate-y-3 transition-all duration-500"
            >
              
              <div className="absolute top-0 left-0 h-1.5 w-full bg-gradient-to-r from-pink-500 via-red-500 to-orange-500"></div>

             
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-gradient-to-br from-pink-50 via-white to-red-50 transition duration-500"></div>

              <div className="relative z-10">
               
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-r from-pink-500 to-red-500 flex items-center justify-center text-3xl text-white mb-6 shadow-lg">
                  {card.icon}
                </div>

              
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  {card.title}
                </h3>

                
                <ul className="space-y-3">
                  {card.description.split(",").map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-gray-600"
                    >
                      <span className="text-green-500 font-bold text-lg">
                        ✓
                      </span>
                      <span>{item.trim()}</span>
                    </li>
                  ))}
                </ul>

                
               
               <Link to="/login" className="mt-8 block w-full text-center bg-gradient-to-r from-pink-500 to-red-500 text-white py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300">Apply Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="px-6 pb-20">
        <div className="max-w-6xl mx-auto rounded-3xl bg-gradient-to-r from-pink-600 via-red-500 to-orange-500 p-12 text-center text-white shadow-2xl">
          <h2 className="text-4xl font-bold mb-4">
            Need Funding For Your Business?
          </h2>

          <p className="text-lg text-white/90 mb-8 max-w-3xl mx-auto">
            Get customized business loan solutions with competitive interest
            rates and fast approvals.
          </p>

          <Link to="/contact" className="bg-white text-red-600 px-8 py-4 rounded-xl font-bold hover:scale-105 transition-transform">
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
}

export default Business;