import React from "react";
import Lenis from "lenis";
import { Container, Header } from "./components";
import { Content, Hero, Info, Usps, VideoCarousel } from "./sections";

function App() {
  React.useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="fontRoboto">
      <Header />
      <main>
        <div className="relative z-10 bg-background">
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />
        <Content />
        <Info />
      </main>
    </div>
  );
}

export default App;
