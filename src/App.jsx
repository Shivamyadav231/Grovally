import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";

import Home from "./components/pages/Home";
import IT from "./components/pages/IT";
import BPO from "./components/pages/BPO";
import KPO from "./components/pages/KPO";
import Finance from "./components/pages/Finance";
import Services from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Login from "./components/Login";
import SignUp from "./components/SignUp";

import Profile from "./components/Profile"

import Grovall from "./components/Grovall";






export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white text-slate-100">
        <Navbar />
        <main className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/it" element={<IT />} />
            <Route path="/bpo" element={<BPO />} />
            <Route path="/kpo" element={<KPO />} />
            <Route path="/finance" element={<Finance />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp/>}/>
            <Route path="/profile" element={<Profile/>} />
           
            <Route path ="/grovallyAI" element ={<Grovall/>}/>
            
           
          </Routes>
        </main>
        <Footer />
        
        
      </div>
    </BrowserRouter>
  );
}