import React from "react";
import { movies, randomMoviesSect1, randomMoviesSect2 } from "../constants";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import { useWindowSize } from "react-use";
import { Button } from "../components";

const VideoCarousel = () => {
  const { width, height } = useWindowSize();
  const carouselWrapperRef = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: carouselWrapperRef,
    offset: ["start start", "end start"],
  });

  const maximumScale = React.useMemo(() => {
    const windowYRatio = height / width;
    const xScale = 1.66667;
    const yScale = xScale * (16 / 9) * windowYRatio;
    return Math.max(xScale, yScale);
  }, [width, height]);

  const scale = useTransform(
    scrollYProgress,
    [0.3, 0.5, 0.66],
    [maximumScale * 1.1, maximumScale, 1]
  );

  const postersOpacity = useTransform(scrollYProgress, [0.64, 0.66], [0, 1]);

  const posterTranslateXLeft = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [-30, 0]
  );
  const posterTranslateXRight = useTransform(
    scrollYProgress,
    [0.64, 0.66],
    [30, 0]
  );

  const [carouselVariant, setCarouselVariant] = React.useState("inactive");
  useMotionValueEvent(scrollYProgress, "change", (progress) => {
    if (progress >= 0.67) {
      setCarouselVariant("active");
    } else {
      setCarouselVariant("inactive");
    }
  });

  return (
    <>
      <motion.div animate={carouselVariant} className="pb-16 bg-background">
        <div
          ref={carouselWrapperRef}
          className="overflow-clip h-[300vh] mt-[-100vh]"
        >
          <div className="sticky top-0 flex items-center h-screen">
            <div className="relative flex gap-5 mb-5 -translate-x-1/2 left-1/2">
              <motion.div
                style={{ opacity: postersOpacity, x: posterTranslateXLeft }}
                className="shrink-0 aspect-[9/16] md:aspect-video w-[60vw] overflow-clip rounded-2xl"
              >
                <img
                  className="object-cover w-full h-full"
                  src={movies[0].poster}
                  alt={movies[0].name}
                />
              </motion.div>

              <motion.div
                style={{ scale }}
                className="shrink-0 aspect-[9/16] md:aspect-video w-[60vw] overflow-clip rounded-2xl relative"
              >
                <img
                  className="object-cover w-full h-full"
                  src={movies[1].poster}
                  alt={movies[1].name}
                />
                <motion.div
                  variants={{
                    active: { opacity: 1 },
                    inactive: { opacity: 0 },
                  }}
                  className="absolute bottom-0 left-0 flex flex-col items-center w-full gap-4 p-5 text-lg text-white md:gap-0 md:justify-between md:flex-row"
                >
                  <p>Best video title ever</p>
                  <Button>Watch now</Button>
                </motion.div>
              </motion.div>

              <motion.div
                style={{ opacity: postersOpacity, x: posterTranslateXRight }}
                className="shrink-0 aspect-[9/16] md:aspect-video w-[60vw] overflow-clip rounded-2xl"
              >
                <img
                  className="object-cover w-full h-full"
                  src={movies[2].poster}
                  alt={movies[2].name}
                />
              </motion.div>
            </div>
          </div>
        </div>

        <motion.div
          variants={{
            active: { opacity: 1, y: 0 },
            inactive: { opacity: 0, y: 20 },
          }}
          transition={{ duration: 0.4 }}
          className="space-y-3 lg:-mt-[6%] -mt-[46%] md:-mt-[58%]"
        >
          <SmallVideoCarousel movies={randomMoviesSect1} />
          <div className="[--duration:68s] [--carousel-offset:-32px]">
            <SmallVideoCarousel movies={randomMoviesSect2} />
          </div>
        </motion.div>
      </motion.div>
    </>
  );
};

export default VideoCarousel;

const SmallVideoCarousel = ({ movies }) => {
  return (
    <>
      <div className="overflow-clip">
        <div className="flex gap-3 animate-carousel-move left-[var(--carousel-offset,0px)] relative">
          {movies.map((movie, index) => (
            <div
              className="w-[40vw] md:w-[25vw] aspect-video-[9 / 16] md:aspect-video shrink-0"
              key={`${movie.name}-${index}`}
            >
              <img
                className="object-cover w-full h-full rounded-[10px]"
                src={movie.poster}
                alt={movie.name}
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
