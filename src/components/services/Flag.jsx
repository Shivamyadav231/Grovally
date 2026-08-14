import { motion } from "framer-motion";

const flags = Array.from({ length: 20 });

export default function Flag() {
  return (
    <section className="relative w-full min-h-[650px] bg-white flex flex-col items-center justify-center overflow-hidden">

      {/* ================= BACKGROUND GLOW ================= */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-orange-100/40 blur-3xl rounded-full pointer-events-none" />

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[250px] bg-green-100/30 blur-3xl rounded-full pointer-events-none" />


      {/* ================= MAIN CONTENT ================= */}
      <div className="relative z-10 text-center px-5">

        {/* ================= MAIN HEADING ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="
            mt-6
            text-xl
            md:text-3xl
            lg:text-5xl
            font-extrabold
            tracking-tight
            text-gray-900
          "
        >
          Celebrating India's Freedom.

          <br />

          <span className="bg-gradient-to-r from-[#FF9933] via-gray-800 to-[#138808] bg-clip-text text-transparent">
            Building India's Future.
          </span>
        </motion.h1>


        {/* ================= GROVALLY ================= */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="-mt-16 flex flex-col items-center"
        >

          {/* Grovally Logo */}
          <motion.img
            src="https://res.cloudinary.com/bzbcmzrn/image/upload/v1786726681/Untitled_design_27_mjuk6j.png"
            alt="Grovally Business Solutions"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              w-[180px]
              md:w-[300px]
              h-auto
              object-contain
            "
          />


          {/* Description */}
          <p
            className="
              -mt-20
              text-base
              md:text-xl
              text-gray-600
              max-w-5xl
              mx-auto
              leading-relaxed
            "
          >
            Empowering Indian entrepreneurship through technology,
            intelligent operations and financial solutions.
          </p>

        </motion.div>


        {/* ================= INDIA TO WORLD ================= */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.8,
            delay: 0.4,
          }}
          className="
            mt-7
            text-sm
            md:text-base
            font-medium
            text-gray-500
          "
        >
          Happy Independence Day • Proudly Indian 🇮🇳
        </motion.p>

      </div>


      {/* ================================================= */}
      {/* ================= MOVING FLAGS ================== */}
      {/* ================================================= */}

      <div
        className="
          relative
          z-10
          w-full
          overflow-hidden
          
          py-6
        "
      >

        <motion.div
          className="
            flex
            items-center
            gap-6
            w-max
          "
          animate={{
            x: ["0%", "-50%"],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
        >

          {[...flags, ...flags].map((_, index) => (

            <motion.div
              key={index}
              animate={{
                rotate: [0, 2, -2, 0],
                y: [0, -4, 4, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.08,
              }}
              className="
                relative
                w-[90px]
                md:w-[120px]
                h-[54px]
                md:h-[72px]
                shrink-0
                rounded-sm
                overflow-hidden
                shadow-md
              "
            >

              {/* ================= SAFFRON ================= */}

              <div
                className="
                  absolute
                  top-0
                  left-0
                  w-full
                  h-1/3
                  bg-[#FF9933]
                "
              />


              {/* ================= WHITE ================= */}

              <div
                className="
                  absolute
                  top-1/3
                  left-0
                  w-full
                  h-1/3
                  bg-white
                  flex
                  items-center
                  justify-center
                "
              >

                {/* ================= ASHOKA CHAKRA ================= */}

                <div
                  className="
                    relative
                    w-5
                    h-5
                    md:w-7
                    md:h-7
                    rounded-full
                    border
                    md:border-2
                    border-[#000080]
                  "
                >

                  {Array.from({ length: 24 }).map((_, i) => (

                    <div
                      key={i}
                      className="
                        absolute
                        top-1/2
                        left-0
                        w-full
                        h-[0.5px]
                        bg-[#000080]
                      "
                      style={{
                        transform: `rotate(${i * 15}deg)`,
                      }}
                    />

                  ))}


                  {/* Chakra Center */}

                  <div
                    className="
                      absolute
                      top-1/2
                      left-1/2
                      -translate-x-1/2
                      -translate-y-1/2
                      w-1
                      h-1
                      rounded-full
                      bg-[#000080]
                    "
                  />

                </div>

              </div>


              {/* ================= GREEN ================= */}

              <div
                className="
                  absolute
                  bottom-0
                  left-0
                  w-full
                  h-1/3
                  bg-[#138808]
                "
              />

            </motion.div>

          ))}

        </motion.div>

      </div>


      {/* ================================================= */}
      {/* ================= BOTTOM ======================== */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.8,
          delay: 0.5,
        }}
        className="
          relative
          z-10
          mt-3
          text-center
          px-5
        "
      >

        <p
          className="
            text-lg
            md:text-2xl
            font-semibold
            text-gray-800
          "
        >
          Proudly Building from India 
        </p>

        <p
          className="
            mt-2
            text-sm
            md:text-base
            text-gray-500
          "
        >
          Technology • Business • Operations • Finance
        </p>

      </motion.div>

    </section>
  );
}