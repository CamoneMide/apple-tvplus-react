import React from "react";
import { movies } from "../constants";
import { motion, useScroll, useTransform } from "framer-motion";
import { useWindowSize } from "react-use";

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

  const randomMoviesSect1 = movies
    .sort(() => Math.random() - 0.5)
    .concat(movies.sort(() => Math.random() - 0.5))
    .concat(movies.sort(() => Math.random() - 0.5));

  const randomMoviesSect2 = movies
    .sort(() => Math.random() - 0.5)
    .concat(movies.sort(() => Math.random() - 0.5))
    .concat(movies.sort(() => Math.random() - 0.5))
    .sort(() => Math.random() - 0.5);

  return (
    <>
      <div className="pb-8 bg-background">
        <div
          ref={carouselWrapperRef}
          className="overflow-clip h-[300vh] mt-[-100vh]"
        >
          <div className="sticky top-0 flex items-center h-screen">
            <div className="relative flex gap-5 mb-5 -translate-x-1/2 left-1/2">
              <div className="shrink-0 aspect-video w-[60vw] overflow-clip rounded-2xl">
                <img
                  className="object-cover w-full h-full"
                  src={movies[0].poster}
                  alt={movies[0].name}
                />
              </div>

              <motion.div
                style={{ scale }}
                className="shrink-0 aspect-video w-[60vw] overflow-clip rounded-2xl "
              >
                <img
                  className="object-cover w-full h-full"
                  src={movies[1].poster}
                  alt={movies[1].name}
                />
              </motion.div>

              <div className="shrink-0 aspect-video w-[60vw] overflow-clip rounded-2xl">
                <img
                  className="object-cover w-full h-full"
                  src={movies[2].poster}
                  alt={movies[2].name}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-3">
          <SmallVideoCarousel movies={randomMoviesSect1} />
          <div className="[--duration:68s] [--carousel-offset:-32px]">
            <SmallVideoCarousel movies={randomMoviesSect2} />
          </div>
        </div>
      </div>
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
              className="w-[25vw] aspect-video shrink-0"
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
