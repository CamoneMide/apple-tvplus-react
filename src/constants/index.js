import moviePoster1 from "../assets/images/airplane.webp";
import moviePoster2 from "../assets/images/family-man.webp";
import moviePoster3 from "../assets/images/laboratory.webp";
import moviePoster4 from "../assets/images/napoleon.webp";
import moviePoster5 from "../assets/images/person-in-darkness.webp";
import moviePoster6 from "../assets/images/scary-building.webp";
import moviePoster7 from "../assets/images/stars.webp";

export const navLinks = [
  { id: 1, text: "Store" },
  { id: 2, text: "Mac" },
  { id: 3, text: "iPad" },
  { id: 4, text: "iPhone" },
  { id: 5, text: "Watch" },
  { id: 6, text: "Vision" },
  { id: 7, text: "AirPods" },
  { id: 8, text: "TV & Home" },
  { id: 9, text: "Entertainment" },
  { id: 10, text: "Accessories" },
  { id: 11, text: "Support" },
];

export const movies = [
  { poster: moviePoster1, name: "Airplane" },
  { poster: moviePoster2, name: "Family Man" },
  { poster: moviePoster3, name: "Laboratory" },
  { poster: moviePoster4, name: "Napoleon" },
  {
    poster: moviePoster5,
    name: "Person in Darkness",
  },
  { poster: moviePoster6, name: "Scary Building" },
  { poster: moviePoster7, name: "Stars" },
];

export const randomMoviesSect1 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5));

export const randomMoviesSect2 = movies
  .sort(() => Math.random() - 0.5)
  .concat(movies.sort(() => Math.random() - 0.5))
  .concat(movies.sort(() => Math.random() - 0.5))
  .sort(() => Math.random() - 0.5);
