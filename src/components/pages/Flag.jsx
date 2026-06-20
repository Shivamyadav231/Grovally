import { FaMapMarkerAlt } from "react-icons/fa";

export default function IndiaMap() {
  const locations = [
    { name: "India",  top: "35%", left: "40%" },
    { name: "Uttar Pradesh", top: "35%", left: "25%" },
    { name: "UK", top: "70%", left: "15%" },
    { name: "Japan", top: "40%", left: "86%" },
    { name: "Australia", top: "60%", left: "90%" },
  ];

  return (
    <section className="relative w-full min-h-screen bg-white overflow-hidden">
      
      <h2 className="text-center text-5xl md:text-5xl font-bold text-red-600 py-8">
        Trusted By 100+ Clients Worldwide
       </h2>
       <div className="relative w-full">
  {/* Background Map */}
 <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
  
  {/* First Image */}
  <div className="w-full md:w-1/2">
    <img
      src="https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781843903/Untitled_design_31_ag7hv9.png"
      alt="World Map 1"
      className="w-full h-auto object-contain"
      loading="lazy"
    />
  </div>

  {/* Second Image */}
  <div className="w-full md:w-1/2">
    <img
      src="https://res.cloudinary.com/dzu9qjxqa/image/upload/v1781843904/Untitled_design_32_wwv0cr.png"
      alt="World Map 2"
      className="w-full h-auto object-contain"
      loading="lazy"
    />
  </div>

</div>

  {locations.map((loc, index) => (
    <div
      key={index}
      className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center"
      style={{
        top: loc.top,
        left: loc.left,
      }}
    >
      <div className="mb-2 px-2 py-1 bg-white rounded shadow-md text-red-600 font-semibold text-xs md:text-sm animate-pulse">
        {loc.name}
      </div>

      <FaMapMarkerAlt className="text-red-600 text-3xl md:text-5xl animate-bounce" />
    </div>
  ))}
</div>

      
    
    </section>
  );
}