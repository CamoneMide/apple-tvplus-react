import React from "react";
import Lenis from "lenis";
import { Container, Header } from "./components";
import { Content, Hero, Usps, VideoCarousel } from "./sections";

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
    <>
      <Header />
      <main>
        <div className="relative z-10 bg-background">
          <Hero />
          <Usps />
        </div>
        <VideoCarousel />
        <Content />
      </main>
    </>
  );
}

export default App;
