import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";

const Home = lazy(() => import("./components/Home"));
const WOf = lazy(() => import("./components/WOf.jsx"));
const IT = lazy(() => import("./components/pages/IT"));
const BPO = lazy(() => import("./components/pages/BPO"));
const KPO = lazy(() => import("./components/pages/KPO"));
const Finance = lazy(() => import("./components/pages/Finance"));
const Services = lazy(() => import("./components/Services"));
const About = lazy(() => import("./components/About"));
const Contact = lazy(() => import("./components/Contact"));
const Login = lazy(() => import("./components/Login"));
const SignUp = lazy(() => import("./components/SignUp"));
const Profile = lazy(() => import("./components/Profile"));
const Blog = lazy(() => import("./components/Blog"));
const Grovall = lazy(() => import("./components/Grovall"));
const Business = lazy(() => import("./components/Business"));
const Tender = lazy(() => import("./components/Tender.jsx"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="h-screen flex items-center justify-center">Loading...</div>}>

        <Routes>

          {/* Layout wrapper ONCE */}
          <Route path="/" element={<Layout />}>
            
            <Route index element={<><WOf /><Home /></>} />
            <Route path="services" element={<Services />} />
            <Route path="it" element={<IT />} />
            <Route path="bpo" element={<BPO />} />
            <Route path="kpo" element={<KPO />} />
            <Route path="finance" element={<Finance />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="profile" element={<Profile />} />
            <Route path="blog" element={<Blog />} />
            <Route path="grovallyAI" element={<Grovall />} />
            <Route path="business" element={<Business />} />
            <Route path="tender" element={<Tender />} />

          </Route>

        </Routes>

      </Suspense>
    </BrowserRouter>
  );
}