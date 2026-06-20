import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./components/shivam/Navbar";
import Footer from "./components/pages/Footer";
import Wow from "./components/shivam/Wow";
import Testimonial from "./components/shivam/Testimonial";
import Shivam from "./components/shivam/Shivam";
import Fql from "./components/shivam/Fql";
import Komo from "./components/pages/Flag";
import Chat from "./components/chat/Chat.jsx";
import Bank from "./components/shivam/Bank.jsx";

export default function Layout() {
  const [showTestimonial, setShowTestimonial] = useState(true);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setShowTestimonial((prev) => !prev);
  //   }, 20000); // 12 seconds

  //   return () => clearInterval(interval);
  // }, []);

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        <Outlet />
        <Wow />

         <><Testimonial /> : <Bank /></>

        <Fql />
        <Komo />
        <Shivam />
       
        <Footer />
      </main>
       <Chat />
    </div>
  );
} <Chat />