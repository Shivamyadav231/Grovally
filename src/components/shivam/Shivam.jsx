import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770389/Abdul_vdgfmu.jpg",
    name: "Abdulla Al-Hammadi",
    role: "Founder, QSolar & QSoft (Qatar)",
    text: "Working with Grovally has been a good decision for our business. Their expertise in IT solutions, digital marketing, and international business strategy helped us strengthen our market presence and streamline operations. The team consistently delivers high-quality results with professionalism and commitment.",
  },
  {
    image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770399/Menf_webu0j.jpg",
    name: "Hrithik Chhabra",
    role: "Founder, Property Sath",
    text: "Grovally transformed our digital presence through a modern website and result-driven marketing strategies. Their understanding of the real estate industry helped us generate quality leads, improve brand visibility, and build stronger customer trust.",
  },
  {
    image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770399/Mene_uijjq6.jpg",
    name: "Milan",
    role: "Startup Founder",
    text: "From import-export consulting to technology solutions and brand positioning, Grovally provided end-to-end support for our business growth. Their strategic approach and execution capabilities have helped us expand confidently into new markets.",
  },
  {
    image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770399/Menb_yh22rl.jpg",
    name: "Sai Siddhant",
    role: "Founder, Drink Fizzico",
    text: "Grovally's expertise in IT development, branding, and digital marketing helped us establish a strong business identity in a competitive market. Their commitment to quality and attention to detail exceeded our expectations.",
  },
  {
    image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770386/cha_uwsasy.jpg",
    name: "Chhabra Properties",
    role: "Founder, Chhabra Properties",
    text: "Grovally delivered excellent support across project funding, HR consulting, and business advisory services. Their professional guidance and strategic insights helped us streamline operations and unlock new growth opportunities.",
  },
  {
    image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770399/Menc_jucvvt.jpg",
    name: "Amit Sharma",
    role: "Founder, Financial Consultancy",
    text: "Grovally delivered excellent support across project funding, HR consulting, and business advisory services. Their professional guidance and strategic insights helped us streamline operations and unlock new growth opportunities.",
  },
  {
    image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770398/Mena_bfwsl1.jpg",
    name: "Prateek Gupta",
    role: "Founder, Revayu Energy",
    text: "Grovally provided a complete business growth ecosystem for us, including website development, funding assistance, and digital marketing. Their ability to combine technology with business strategy has contributed significantly to our expansion journey.",
  },
  {
    image: "https://res.cloudinary.com/dzu9qjxqa/image/upload/f_auto,q_auto,w_800/v1781770398/Men_nvh0sj.jpg",
    name: "Dinesh Goel",
    role: "Founder, Sanjivan Anushandhan",
    text: "Grovally has been a valuable growth partner for our organization. From IT infrastructure and finance solutions to marketing and BPO services, their team delivered reliable, scalable, and business-focused solutions that created measurable results.",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-gradient-to-br from-red-50 via-white to-red-100 overflow-hidden">
      
      return (
  <section className="py-24 bg-gradient-to-br from-red-50 via-white to-red-100">
    <div className="max-w-7xl mx-auto px-6">

      {/* Heading */}
      <div className="text-center mb-16">
        <h2 className="text-3xl sm:text-5xl font-extrabold text-red-700">
          What Our Clients Say
        </h2>

        <p className="mt-4 text-gray-600 text-lg max-w-2xl mx-auto">
          Trusted by startups and global businesses for delivering impactful solutions.
        </p>
      </div>

      {/* CARD */}
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -80 }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row items-center gap-8 p-6 md:p-10"
        >

          {/* IMAGE */}
          <div className="w-full md:w-1/3 flex justify-center">
            <img
              src={testimonials[current].image}
              alt={testimonials[current].name}
              className="w-64 h-64 object-cover rounded-2xl shadow-md"
            />
          </div>

          {/* CONTENT */}
          <div className="flex-1 text-center md:text-left">
            <p className="text-gray-700 text-base md:text-lg leading-7">
              {testimonials[current].text}
            </p>

            <div className="mt-8 border-l-4 border-red-600 pl-4">
              <h3 className="text-xl md:text-2xl font-bold text-red-600">
                {testimonials[current].name}
              </h3>

              <p className="text-gray-500 mt-1">
                {testimonials[current].role}
              </p>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* DOTS */}
      <div className="flex justify-center mt-10 gap-3">
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`transition-all duration-300 rounded-full ${
              current === index
                ? "w-10 h-3 bg-red-700"
                : "w-3 h-3 bg-gray-300"
            }`}
          />
        ))}
      </div>

    </div>
  </section>
);
    </section>
  );
}