import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Layout.jsx";
import Ok from "./Ok.jsx";
import OrganizationSchema from "./components/OrganizationSchema.jsx";

import "./App.css";



const Home = lazy(() => import("./components/shivam/Home.jsx"));
const Our = lazy(() => import("./components/shivam/Our.jsx"));
const OurMission = lazy(() => import("./components/Abouts/OurMission.jsx"));

const IT = lazy(() => import("./components/pages/IT.jsx"));
const BPO = lazy(() => import("./components/pages/BPO.jsx"));
const KPO = lazy(() => import("./components/pages/KPO.jsx"));
const Finance = lazy(() => import("./components/pages/Finance.jsx"));

const Services = lazy(() => import("./components/shivam/Services.jsx"));
const About = lazy(() => import("./components/pages/About.jsx"));
const Contact = lazy(() => import("./components/pages/Contact.jsx"));
const Media = lazy(() => import("./components/Abouts/Media.jsx"));
const Intern = lazy(() => import("./components/Academy/Intern.jsx"));
const Careers = lazy(() => import("./components/Abouts/Cereers.jsx"));

const Login = lazy(() => import("./components/shivam/Login.jsx"));
const SignUp = lazy(() => import("./components/shivam/SignUp.jsx"));
const Profile = lazy(() => import("./components/shivam/Profile.jsx"));

const Blog = lazy(() => import("./components/pages/Blog.jsx"));
const Grovall = lazy(() => import("./components/shivam/Grovall.jsx"));
const Business = lazy(() => import("./components/pages/Business.jsx"));
const Tender = lazy(() => import("./components/shivam/Tender.jsx"));
const Bt = lazy(() => import("./components/shivam/Bt.jsx"));
const School = lazy(() => import("./components/chat/School.jsx"));

const WOf = lazy(() => import("./components/shivam/WOf.jsx"));



const AI = lazy(() => import("./components/services/AI.jsx"));
const Ap = lazy(() => import("./components/services/Ap.jsx"));
const Graphis = lazy(() => import("./components/services/Graphis.jsx"));
const Marketing = lazy(() => import("./components/services/Marketing.jsx"));
const News = lazy(() => import("./components/services/News.jsx"));
const Networking = lazy(() => import("./components/services/Networking.jsx"));
const Ourteam = lazy(() => import("./components/services/Ourteam.jsx"));

const Ourjourney = lazy(() =>
  import("./components/Abouts/Ourjourney.jsx")
);

const Ourvision = lazy(() =>
  import("./components/Abouts/Ourvision.jsx")
);



const Ainews = lazy(() => import("./components/Resources/Ainews.jsx"));
const Bnews = lazy(() => import("./components/Resources/Bnews.jsx"));

const Btemplete = lazy(() =>
  import("./components/Resources/Btemplete.jsx")
);

const Case = lazy(() => import("./components/Resources/Case.jsx"));

const Products = lazy(() =>
  import("./components/Resources/Products.jsx")
);

const Repots = lazy(() => import("./components/Resources/Repots.jsx"));

const Startup = lazy(() =>
  import("./components/Resources/Startup.jsx")
);

const Webinrs = lazy(() =>
  import("./components/Resources/Webinrs.jsx")
);

// =========================
// PRODUCTS
// =========================

const Cyber = lazy(() => import("./components/products/Cyber.jsx"));
const Cloude = lazy(() => import("./components/products/Cloude.jsx"));
const Softwere = lazy(() => import("./components/products/Softwere.jsx"));
const Website = lazy(() => import("./components/products/Website.jsx"));
const OOO = lazy(() => import("./components/products/OOO.jsx"));
const Komal = lazy(() => import("./components/products/Komal.jsx"));

// =========================
// TERMS
// =========================

const NOpage = lazy(() =>
  import("./components/Term/Nopage.jsx")
);

const Cookie = lazy(() =>
  import("./components/Term/Cookie.jsx")
);

const OKKK = lazy(() =>
  import("./components/Term/OKKK.jsx")
);

const Term = lazy(() =>
  import("./components/Term/Term.jsx")
);

const Policy = lazy(() =>
  import("./components/Term/Policy.jsx")
);

// =========================
// ADMIN
// =========================

const AdminD = lazy(() =>
  import("./components/admin/AdminD.jsx")
);

const Adminlogin = lazy(() =>
  import("./components/admin/Adminlogin.jsx")
);

const Fromblog = lazy(() =>
  import("./components/admin/Fromblog.jsx")
);

const BlogMengar = lazy(() =>
  import("./components/admin/BlogMengar.jsx")
);

// =========================
// LOADING COMPONENT
// =========================

function Loading() {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-white">
      <div className="w-20 h-20 border-4 border-red-200 border-t-red-600 rounded-full animate-spin" />
    </div>
  );
}

// =========================
// APP
// =========================

export default function App() {
  return (
    <BrowserRouter>

      <OrganizationSchema />
      <Ok />

      <Suspense fallback={<Loading />}>

        <Routes>

          {/* =================================
              ADMIN ROUTES
          ================================= */}

          <Route
            path="/admin/login"
            element={<Adminlogin />}
          />

          <Route
            path="/admin/dashboard"
            element={<AdminD />}
          />

          <Route
            path="/admin/blogs"
            element={<BlogMengar />}
          />

          <Route
            path="/admin/blogs/create"
            element={<Fromblog />}
          />


          {/* =================================
              MAIN WEBSITE
          ================================= */}

          <Route path="/" element={<Layout />}>

            {/* HOME */}
            <Route
              index
              element={
                <>
                  <WOf />
                  <Home />
                </>
              }
            />

            {/* PRODUCTS */}
            <Route path="cyber" element={<Cyber />} />
            <Route path="cloude" element={<Cloude />} />
            <Route path="software" element={<Softwere />} />
            <Route path="website" element={<Website />} />
            <Route path="portal" element={<OOO />} />
            <Route path="tenders" element={<Komal />} />

            {/* TERMS */}
            <Route path="cookies" element={<Cookie />} />
            <Route path="businesssolution" element={<OKKK />} />
            <Route path="policy" element={<Policy />} />
            <Route path="terms" element={<Term />} />

            {/* MAIN PAGES */}
            <Route path="services" element={<Services />} />
            <Route path="it" element={<IT />} />
            <Route path="bpo" element={<BPO />} />
            <Route path="kpo" element={<KPO />} />
            <Route path="finance" element={<Finance />} />

            <Route path="about" element={<About />} />
            <Route path="media" element={<Media />} />
            <Route path="internship" element={<Intern />} />
            <Route path="careers" element={<Careers />} />
            <Route path="contact" element={<Contact />} />

            {/* AUTH */}
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="profile" element={<Profile />} />

            {/* OTHER */}
            <Route path="blog" element={<Blog />} />
            <Route path="grovallyAI" element={<Grovall />} />
            <Route path="business" element={<Business />} />
            <Route path="tender" element={<Tender />} />
            <Route path="ourservices" element={<Our />} />
            <Route path="acadamy" element={<School />} />

            {/* SERVICES */}
            <Route path="ai-services" element={<AI />} />
            <Route path="app-services" element={<Ap />} />
            <Route path="graphics" element={<Graphis />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="networking" element={<Networking />} />
            <Route path="news" element={<News />} />
            <Route path="our-team" element={<Ourteam />} />

            {/* ABOUT */}
            <Route
              path="mission"
              element={<OurMission />}
            />

            <Route
              path="our-journey"
              element={<Ourjourney />}
            />

            <Route
              path="vision"
              element={<Ourvision />}
            />

            {/* RESOURCES */}
            <Route
              path="ai-news"
              element={<Ainews />}
            />

            <Route
              path="business-news"
              element={<Bnews />}
            />

            <Route
              path="business-templates"
              element={<Btemplete />}
            />

            <Route
              path="case-studies"
              element={<Case />}
            />

            <Route
              path="podcasts"
              element={<Products />}
            />

            <Route
              path="industry-reports"
              element={<Repots />}
            />

            <Route
              path="startup-stories"
              element={<Startup />}
            />

            <Route
              path="webinars"
              element={<Webinrs />}
            />

            <Route
              path="bankslogo"
              element={<Bt />}
            />

            {/* 404 */}
            <Route
              path="*"
              element={<NOpage />}
            />

          </Route>

        </Routes>

      </Suspense>

    </BrowserRouter>
  );
}