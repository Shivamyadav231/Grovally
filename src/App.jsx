import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Ok from "./Ok.jsx";
import OrganizationSchema from "./components/OrganizationSchema";

import "./App.css";

const Home = lazy(() => import("./components/shivam/Home.jsx"));
const Our = lazy(() => import("./components/shivam/Our.jsx"));

const IT = lazy(() => import("./components/pages/IT"));
const BPO = lazy(() => import("./components/pages/BPO"));
const KPO = lazy(() => import("./components/pages/KPO"));
const Finance = lazy(() => import("./components/pages/Finance"));

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
const School = lazy(() => import("./components/chat/School.jsx"));

const WOf = lazy(() => import("./components/shivam/WOf.jsx"));
const Tender = lazy(() => import("./components/shivam/Tender.jsx"));

// Services pages
const AI = lazy(() => import("./components/services/AI.jsx"));
const Ap = lazy(() => import("./components/services/Ap.jsx"));
const Graphis = lazy(() => import("./components/services/Graphis.jsx"));
const Marketing = lazy(() => import("./components/services/Marketing.jsx"));
const News = lazy(() => import("./components/services/News.jsx"));
const Networking = lazy(() => import("./components/services/Networking.jsx"));
const Ourteam = lazy(() => import("./components/services/Ourteam.jsx"));

export default function App() {
  return (
    <BrowserRouter>
      <OrganizationSchema />
      <Ok />

      <Suspense
        fallback={
          <div className="fixed inset-0 flex items-center justify-center bg-white">
            <div className="w-20 h-20 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<><WOf /><Home /></>} />

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
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="profile" element={<Profile />} />
            <Route path="blog" element={<Blog />} />
            <Route path="grovallyAI" element={<Grovall />} />
            <Route path="business" element={<Business />} />
            <Route path="tender" element={<Tender />} />
            <Route path="ourservices" element={<Our />} />
            <Route path="bank" element={<School />} />

            {/* Services Routes */}
            <Route path="ai-services" element={<AI />} />
            <Route path="app-services" element={<Ap />} />
            <Route path="graphics" element={<Graphis />} />
            <Route path="marketing" element={<Marketing />} />
            <Route path="networking" element={<Networking />} />
            <Route path="news" element={<News />} />
            <Route path="our-team" element={<Ourteam />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}