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

        {/* ================= HAPPY INDEPENDENCE DAY ================= */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">

            <span className="text-[#FF9933]">
              Happy
            </span>{" "}

            <span className="text-[#000080]">
              Independence
            </span>{" "}

            <span className="text-[#138808]">
              Day
            </span>

          </h2>
        </motion.div>


        {/* ================= MAIN HEADING ================= */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="
            mt-6
            text-4xl
            md:text-6xl
            lg:text-7xl
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
          className="-mt-10 flex flex-col items-center"
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
              w-[130px]
              md:w-[240px]
              h-auto
              object-contain
            "
          />


          {/* Description */}
          <p
            className="
              -mt-11
              text-base
              md:text-xl
              text-gray-600
              max-w-3xl
              mx-auto
              leading-relaxed
            "
          >
            Empowering Indian entrepreneurship through technology,
            intelligent operations and financial solutions.
          </p>

        </motion.div>


        {/* ================= SERVICES ================= */}
      


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
          From India 🇮🇳 to the World 🌍
        </motion.p>

      </div>


      {/* ================================================= */}
      {/* ================= MOVING FLAGS ================== */}
      {/* ================================================= */}

      <div className="
        relative
        z-10
        w-full
        overflow-hidden
        mt-14
        py-8
      ">

        <motion.div
          className="
            flex
            items-center
            gap-10
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
                y: [0, -5, 5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.08,
              }}
              className="
                relative
                w-[130px]
                md:w-[170px]
                h-[78px]
                md:h-[100px]
                shrink-0
                rounded-sm
                overflow-hidden
                shadow-lg
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
                    w-8
                    h-8
                    md:w-9
                    md:h-9
                    rounded-full
                    border-2
                    border-[#000080]
                  "
                >

                  {/* Chakra Spokes */}

                  {Array.from({ length: 24 }).map((_, i) => (

                    <div
                      key={i}
                      className="
                        absolute
                        top-1/2
                        left-0
                        w-full
                        h-[1px]
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
                      w-1.5
                      h-1.5
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

        {/* Main Bottom Text */}

        <p
          className="
            text-lg
            md:text-2xl
            font-semibold
            text-gray-800
          "
        >
          Proudly Building from India 🇮🇳
        </p>


        {/* Services */}

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


/* ================================================= */
/* ================= SERVICE PILL ================== */
/* ================================================= */

function Service({ text, color }) {

  const colors = {

    orange:
      "text-[#FF9933] border-orange-200 bg-orange-50",

    blue:
      "text-[#000080] border-blue-200 bg-blue-50",

    green:
      "text-[#138808] border-green-200 bg-green-50",

  };


  return (

    <motion.div
      whileHover={{
        y: -5,
        scale: 1.05,
      }}
      transition={{
        duration: 0.2,
      }}
      className={`
        px-6
        py-2.5
        rounded-full
        border
        shadow-sm
        font-bold
        text-sm
        md:text-base
        ${colors[color]}
      `}
    >

      {text}

    </motion.div>

  );
}