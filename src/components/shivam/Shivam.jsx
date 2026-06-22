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
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl md:text-6xl font-extrabold">
            <span className="bg-gradient-to-r from-red-800 to-red-500 bg-clip-text text-transparent">
              What Our Clients Say
            </span>
          </h2>

          <p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
            Trusted by startups, enterprises, and global businesses for
            delivering impactful digital, technology, and business solutions.
          </p>
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 gap-3 md:gap-7 items-center bg-white/80 backdrop-blur-xl border border-red-100 rounded-[25px] md:rounded-[40px] p-5 sm:p-6 md:p-12 shadow-[0_20px_60px_rgba(0,0,0,0.08)]"
          >
            {/* Image */}
            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="relative overflow-hidden rounded-[30px]"
            >
              <img
                loading="lazy"
                decoding="async"
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-full h-[500px]  object-cover rounded-[30px]"
              />

              <div className="absolute inset-0  rounded-[30px]" />
            </motion.div>

            {/* Content */}
            <div>
              

              <p className="text-lg md:text-xl text-gray-700 leading-9 mt-2">
                {testimonials[current].text}
              </p>

              <div className="mt-8 border-l-4 border-red-700 pl-5">
                <h3 className="text-3xl text-red-600 font-bold ">
                  {testimonials[current].name}
                </h3>

                <p className="text-red-600 font-semibold text-lg mt-2">
                  {testimonials[current].role}
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-4 mt-12">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`rounded-full transition-all duration-500 ${
                current === index
                  ? "w-10 h-3 bg-red-700"
                  : "w-3 h-3 bg-gray-300 hover:bg-red-400"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}