import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css'

import Navbar from "./components/Navbar";

const WOf = lazy(() => import("./components/WOf.jsx"));
const Home = lazy(() => import("./components/Home"));
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

const Grovall = lazy(() => import("./components/Grovall"));
const Shivam = lazy(() => import("./components/Shivam"));
const Testimonial = lazy(() => import("./components/Testimonial.jsx"));

const Wow = lazy(() => import("./components/Wow"));
const Business = lazy(() => import("./components/Business"));
const Tender = lazy(() => import("./components/Tender.jsx"));
const Footer = lazy(() => import("./components/Footer"));


export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="min-h-screen flex items-center justify-center bg-white text-black">Loading...</div>}>
        <div className="min-h-screen w-full overflow-x-hidden bg-white text-black">

          <Navbar />

          <main className="w-full">

            <Routes>
            <Route path="/" element={ <><WOf /> <Home /> </> }/>

            <Route path="/services" element={<Services />} />

            <Route path="/it" element={<IT />} />

            <Route path="/bpo" element={<BPO />} />

            <Route path="/kpo" element={<KPO />} />

            <Route path="/finance" element={<Finance />} />

            <Route path="/about" element={<About />} />

            <Route path="/contact" element={<Contact />} />

            <Route path="/login" element={<Login />} />

            <Route path="/signup" element={<SignUp />} />

            <Route path="/profile" element={<Profile />} />

            <Route path="/grovallyAI" element={<Grovall />} />
            <Route path ='/business' element={<Business/>}/>
            <Route path="tender" element={<Tender/>}/>

          </Routes>

          </main>
          <Wow />
          <Testimonial />
          <Shivam />

          <Footer />
          {/* Floating chatbot removed per request; use /grovallyAI page for chat */}
        </div>
      </Suspense>
    </BrowserRouter>
  );
}