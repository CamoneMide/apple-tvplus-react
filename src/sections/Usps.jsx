import Container from "../components/Container";
import FadeIn from "../components/FadeIn";

const Usps = () => {
  return (
    <>
      <Container className="text-4xl font-bold text-white space-y-[50px] z-10 relative py-36">
        <FadeIn>
          <p>New Apple Originals every month — always ad‑free.</p>
        </FadeIn>

        <FadeIn>
          <p>
            Stream on the Apple TV app on Apple devices, smart TVs, consoles, or
            sticks.
          </p>
        </FadeIn>

        <FadeIn>
          <p>Watch in 4K HDR video with immersive Spatial Audio.</p>
        </FadeIn>

        <FadeIn>
          <p>Share a single subscription with up to five people.</p>
        </FadeIn>
        <FadeIn>
          <p>
            3 col layout
            {/* <Container></Container> */}
          </p>
        </FadeIn>
        <p className="h-[25vh]"></p>
      </Container>
    </>
  );
};

export default Usps;
