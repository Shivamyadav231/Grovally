import { Link } from "react-router-dom";
import ss from "../assets/ss.png";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-slate-950/95 text-white border-b border-slate-800 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex items-center gap-3">
          <img
            src={ss}
            alt="Grovally logo"
            className="h-12 w-12 rounded-2xl bg-white/10 p-2 ring-1 ring-white/10"
          />
          <div>
            <h1 className="text-lg font-semibold text-white">Grovally Group</h1>
            <p className="text-xs text-slate-400">Digital services & consulting</p>
          </div>
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium lg:flex">
          <li>
            <Link className="transition hover:text-cyan-300" to="/">
              Home
            </Link>
          </li>
         

          <li className="relative group">
            <button className="flex items-center gap-1 transition hover:text-cyan-300" type="button">
              Services ▾
            </button>
            
      
         
            
            <div className="invisible absolute left-0 top-10 z-20 hidden min-w-[680px] rounded-3xl bg-slate-900/95 p-6 shadow-2xl transition duration-200 group-hover:visible group-hover:block">
              <div className="grid grid-cols-4 gap-6 text-sm text-slate-300">
                <div>
                  <h3 className="mb-3 font-semibold text-white">IT</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/it" className="block transition hover:text-cyan-300">
                        AI-powered IT solutions
                      </Link>
                    </li>
                    <li>
                      <Link to="/it" className="block transition hover:text-cyan-300">
                        Cloud & DevOps
                      </Link>
                    </li>
                    <li>
                      <Link to="/it" className="block transition hover:text-cyan-300">
                        Cybersecurity
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-semibold text-white">BPO</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/bpo" className="block transition hover:text-fuchsia-300">
                        Customer support
                      </Link>
                    </li>
                    <li>
                      <Link to="/bpo" className="block transition hover:text-fuchsia-300">
                        Data processing
                      </Link>
                    </li>
                    <li>
                      <Link to="/bpo" className="block transition hover:text-fuchsia-300">
                        Multilingual helpdesk
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-semibold text-white">KPO</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/kpo" className="block transition hover:text-violet-300">
                        Market research
                      </Link>
                    </li>
                    <li>
                      <Link to="/kpo" className="block transition hover:text-violet-300">
                        Data analytics
                      </Link>
                    </li>
                    <li>
                      <Link to="/kpo" className="block transition hover:text-violet-300">
                        Business intelligence
                      </Link>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="mb-3 font-semibold text-white">Finance</h3>
                  <ul className="space-y-2">
                    <li>
                      <Link to="/finance" className="block transition hover:text-green-300">
                        EMI Calculator
                      </Link>
                    </li>
                    
                    <li>
                      <Link to="/finance" className="block transition hover:text-green-300">
                        Loan advisory
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
           <li>
            <Link className="transition hover:text-cyan-300" to="/about">
              About
            </Link>
          </li>
          <li>
            <Link className="transition hover:text-cyan-300" to="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link className="transition hover:text-cyan-300" to="/grovallyAI">
              Grovally AI
            </Link>
          </li>
         
        </ul>

        <div className="flex items-center gap-3">
          <Link
            to="/login"
            className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-950 transition hover:bg-slate-200"
          >
            Login
          </Link>
          <Link
            to="/signup"
            className="rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyan-300 hover:text-cyan-300"
          >
            Signup
          </Link>
        </div>
      </div>
    </nav>
  );
}
