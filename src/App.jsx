import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import Ok from "./Ok.jsx";
import Bt from "./components/shivam/Bt.jsx"
import OrganizationSchema from "./components/OrganizationSchema";

import "./App.css";


const Home = lazy(() => import("./components/shivam/Home.jsx"));
const Our =lazy(()=>import("./components/shivam/Our.jsx"));

const IT = lazy(() => import("./components/pages/IT"));
const BPO = lazy(() => import("./components/pages/BPO"));
const KPO = lazy(() => import("./components/pages/KPO"));
const Finance = lazy(() => import("./components/pages/Finance"));
const Services = lazy(() => import("./components/shivam/Services.jsx"));
const About = lazy(() => import("./components/pages/About.jsx"));
const Contact = lazy(() => import("./components/pages/Contact.jsx"));
const Login = lazy(() => import("./components/shivam/Login.jsx"));
const SignUp = lazy(() => import("./components/shivam/SignUp.jsx"));
const Profile = lazy(() => import("./components/shivam/Profile.jsx"));
const Blog = lazy(() => import("./components/pages/Blog.jsx"));
const Grovall = lazy(() => import("./components/shivam/Grovall.jsx"));
const Business = lazy(() => import("./components/pages/Business.jsx"));
const  School =lazy(()=>import("./components/chat/School.jsx"));

const WOf = lazy(() => import("./components/shivam/WOf.jsx"));
const Tender = lazy(() => import("./components/shivam/Tender.jsx"));





export default function App() {
  return (
    <BrowserRouter>
      <OrganizationSchema />
      <Ok/>

      <Suspense
        fallback={
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-white">
    <div className="relative">
      <div className="w-28 h-28 border-4 border-red-200 border-t-red-600 rounded-full animate-spin"></div>

     
    </div>
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
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="signup" element={<SignUp />} />
            <Route path="profile" element={<Profile />} />
            <Route path="blog" element={<Blog />} />
            <Route path="grovallyAI" element={<Grovall />} />
            <Route path="business" element={<Business />} />
            <Route path="tender" element={<Tender />} />
            <Route path="ourservices" element={<Our />} />
            <Route path="bank" element={<Bt/>}/>
            <Route path ="education" element={<School/>}/>
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}