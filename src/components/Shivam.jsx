import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    image: "/images/client1.jpg",
    name: "Rahul Sharma",
    role: "CEO, Tech Solutions",
    text: "Grovally transformed our business with AI-powered automation and outstanding support.",
  },
  {
    image: "/images/client2.jpg",
    name: "Anjali Verma",
    role: "Finance Manager",
    text: "Their finance and IT solutions helped us save time and improve productivity.",
  },
  {
    image: "/images/client3.jpg",
    name: "Mohit Yadav",
    role: "Startup Founder",
    text: "Professional team, excellent service, and innovative technology solutions.",
  },
];

export default function Testimonial() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 bg-white">
      <h2 className="text-4xl font-bold text-center text-red-600 mb-12">
        What Our Clients Say
      </h2>

      <div className="max-w-6xl mx-auto px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 80 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -80 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row items-center gap-12 bg-white rounded-3xl shadow-xl p-8"
          >
            {/* Left Side Image */}
            <div className="md:w-1/2">
              <img
                src={testimonials[current].image}
                alt={testimonials[current].name}
                className="w-full h-[350px] object-cover rounded-3xl"
              />
            </div>

            {/* Right Side Text */}
            <div className="md:w-1/2">
              <p className="text-xl text-gray-700 leading-9">
                "{testimonials[current].text}"
              </p>

              <h3 className="mt-6 text-2xl font-bold text-black">
                {testimonials[current].name}
              </h3>

              <p className="text-red-500 font-medium">
                {testimonials[current].role}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Dots */}
        <div className="flex justify-center gap-3 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full transition ${
                current === index ? "bg-red-600" : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}