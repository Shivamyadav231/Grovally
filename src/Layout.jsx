import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Wow from "./components/Wow";
import Testimonial from "./components/Testimonial";
import Shivam from "./components/Shivam";

export default function Layout() {
  return (
    <div className="flex flex-col min-h-screen w-full overflow-x-hidden">
      
      <Navbar />

      <main className="flex-1">
        <Outlet />
      </main>

      <Wow />
      <Testimonial />
      <Shivam />

      <Footer />
    </div>
  );
}