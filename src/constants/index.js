import moviePoster1 from "../assets/images/airplane.webp";
import moviePoster2 from "../assets/images/family-man.webp";
import moviePoster3 from "../assets/images/laboratory.webp";
import moviePoster4 from "../assets/images/napoleon.webp";
import moviePoster5 from "../assets/images/person-in-darkness.webp";
import moviePoster6 from "../assets/images/scary-building.webp";
import moviePoster7 from "../assets/images/stars.webp";

import contSrcIcon1 from "../assets/icons/apple-tv-icon.png";
import contSrcIcon2 from "../assets/icons/iphone-icon.png";
import contSrcIcon3 from "../assets/icons/ipad-icon.png";
import contSrcIcon4 from "../assets/icons/mac-icon.png";
import contSrcIcon5 from "../assets/icons/visionpro-icon.png";
import contSrcIcon6 from "../assets/icons/airplay-icon.png";

import partnersImgSrc1 from "../assets/icons/partner1.jpg";
import partnersImgSrc2 from "../assets/icons/partner2.jpg";
import partnersImgSrc3 from "../assets/icons/partner3.jpg";
import partnersImgSrc4 from "../assets/icons/partner4.jpg";
import partnersImgSrc5 from "../assets/icons/partner5.jpg";
import partnersImgSrc6 from "../assets/icons/partner6.jpg";
import partnersImgSrc7 from "../assets/icons/partner7.jpg";
import partnersImgSrc8 from "../assets/icons/partner8.jpg";
import partnersImgSrc9 from "../assets/icons/partner9.jpg";
import partnersImgSrc10 from "../assets/icons/partner10.jpg";

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

export const contentIcons = [
  { id: 1, src: contSrcIcon1, text: "Apple TV" },
  { id: 2, src: contSrcIcon2, text: "iPhone" },
  { id: 3, src: contSrcIcon3, text: "iPad" },
  { id: 4, src: contSrcIcon4, text: "Mac" },
  { id: 5, src: contSrcIcon5, text: "Apple Vision Pro" },
  { id: 6, src: contSrcIcon6, text: "AirPlay" },
];

export const partnerIcons = [
  { id: 1, src: partnersImgSrc1 },
  { id: 2, src: partnersImgSrc2 },
  { id: 3, src: partnersImgSrc3 },
  { id: 4, src: partnersImgSrc4 },
  { id: 5, src: partnersImgSrc5 },
  { id: 6, src: partnersImgSrc6 },
  { id: 7, src: partnersImgSrc7 },
  { id: 8, src: partnersImgSrc8 },
  { id: 9, src: partnersImgSrc9 },
  { id: 10, src: partnersImgSrc10 },
];
