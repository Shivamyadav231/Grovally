import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./components/shivam/Navbar";
import Footer from "./components/pages/Footer";
import Wow from "./components/shivam/Wow";
import Testimonial from "./components/shivam/Testimonial";
import Shivam from "./components/shivam/Shivam";
import Fql from "./components/shivam/Fql";
import Komo from "./components/pages/Flag";
import Chat from "./components/chat/Chat.jsx";
import Blog from "./components/pages/Blog.jsx";





export default function Layout() {
  const location = useLocation();

  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      <Navbar />

      <main className="flex-1">
        <Outlet />

        {location.pathname === "/" && (
          <>
            <Wow />
            <Testimonial />
            <Blog limit={3} />


            

            <Fql />
            <Komo />
            <Shivam />
          </>
        )}
      </main>

      <Footer />


      {location.pathname !== "/grovallyAI" && (
        <Chat />
      )}


      

    </div>
  );
}