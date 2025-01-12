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
            <p className="font-semibold">
              Watch on the <i className="bx bx-tv"></i> app.
            </p>
          </motion.div>
        </Container>
      </div>
    </>
  );
};

export default Hero;
