import React from "react";
import { Button, Container } from "../components";
import napoleonWebP from "../assets/images/napoleon.webp";
import { motion, useScroll, useTransform } from "framer-motion";

const Hero = () => {
  const videoContainerRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: videoContainerRef,
    offset: ["start start", "end end"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7, 1], [1, 1, 0]);

  return (
    <>
      <div className="relative text-white bg-background">
        <motion.div
          style={{ opacity }}
          ref={videoContainerRef}
          className="absolute -top-[--header-height] left-0 w-full h-[200vh]"
        >
          <img
            className="sticky top-0 object-cover w-screen h-screen"
            src={napoleonWebP}
            alt="Napoleon"
          />
        </motion.div>
        <Container className="relative z-10 h-[--hero-height] pb-[28px]">
          <motion.div
            className="flex flex-col items-start justify-end h-full"
            variants={{
              hidden: { opacity: 0 },
              visible: { opacity: 1 },
            }}
            whileInView="visible"
            exit="hidden"
            animate="hidden"
            viewport={{ amount: 0.96 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-[38px]">
              All Apple Originals.
              <br />
              Only on Apple TV+.
            </h1>
            <Button size="large" className="mb-[71px]">
              Stream now
            </Button>
            <p className="flex items-center font-semibold text-[19px]">
              Watch on the{" "}
              <span className="text-[#f9f9f9] bg-backgroundContrast flex flex-row w-[41px] h-[41px] justify-center items-center justify-self-center rounded-[8px] text-mxl px-1 lg:mx-1 mx-2">
                <i className="bx bxl-apple"></i>
                <span>tv</span>
              </span>{" "}
              app.
            </p>
          </motion.div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
