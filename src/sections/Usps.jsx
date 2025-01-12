import Container from "../components/Container";
import FadeIn from "../components/FadeIn";

const Usps = () => {
  return (
    <>
      <Container className="text-3xl md:text-4xl font-bold text-white space-y-[50px] z-10 relative py-36">
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
          <div className="mt-[150px] grid grid-cols-1 md:grid-cols-3 gap-[30px] mb-[175px]">
            <div className="text-[#f5f5f7]">
              <h2 className="text-3xl font-[600]">Buy an Apple device</h2>
              <h3 className="text-4xl mt-[11px] md:mt-[16px] font-[700]">
                3 months free.
              </h3>
              <p className="max-w-[98%] md:max-w-[200px] lg:mt-[9px] lg:mb-[31px] md:min-h-[100px] md:text-base text-[#A1A1A6] mt-[3px] mb-[21px] md:mt-[5px] md:mb-[23px] lg:max-w-[98%] md:leading-[20px] leading-[31px]">
                Apple TV+ is included for 3 months when you purchase an Apple
                device and redeem the offer within 90 days.2
              </p>
              <button className="bg-white text-textBlack rounded-full text-[14px] py-[12px] px-[22px]">
                Check eligibility
              </button>
            </div>

            <div className="text-[#f5f5f7]">
              <h2 className="text-3xl font-[600]">Free 7-day trial</h2>
              <h3 className="text-4xl mt-[11px] md:mt-[16px] font-[700]">
                $9.99/mo.
              </h3>
              <p className="max-w-[98%] md:max-w-[200px] lg:mt-[9px] lg:mb-[31px] md:min-h-[100px] md:text-base text-[#A1A1A6] mt-[3px] mb-[21px] md:mt-[5px] md:mb-[23px] lg:max-w-[98%] md:leading-[20px] leading-[31px]">
                A monthly subscription is just $9.99 per month after a free
                7-day trial.3 Share Apple TV+ with your family.4
              </p>
              <button className="bg-white text-textBlack rounded-full text-[14px] py-[12px] px-[22px]">
                Try it free
              </button>
            </div>

            <div className="text-[#f5f5f7]">
              <h2 className="text-3xl font-[600]">Free 1‑month trial</h2>
              <h3 className="text-4xl mt-[11px] md:mt-[16px] font-[700]">
                Apple One
              </h3>
              <p className="max-w-[98%] md:max-w-[200px] lg:max-w-[98%] lg:mt-[9px] md:min-h-[100px] md:text-base text-[#A1A1A6] mt-[3px] mb-[21px] lg:mb-[31px] md:mt-[5px] md:mb-[21px] md:leading-[20px] leading-[31px]">
                Bundle Apple TV+ with up to five other great services for one
                low monthly price. And enjoy more for less.{" "}
                <span>
                  <a href="">Learn more</a>
                </span>
              </p>
              <button className="bg-white text-textBlack rounded-full text-[14px] py-[12px] px-[22px]">
                Try Apple one free
              </button>
            </div>
          </div>
        </FadeIn>
        {/* <p className="h-[25vh]"></p> */}
      </Container>
    </>
  );
};

export default Usps;
