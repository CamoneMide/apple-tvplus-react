import React from "react";
import { Container, FadeIn } from "../components";
import { contentIcons, partnerIcons } from "../constants";

const Content = () => {
  return (
    <>
      <section className="bg-white pb-[150px]">
        <Container>
          <div className="pt-[130px] lg:pb-[52px] pb-[44px] flex flex-col justify-center items-center">
            <FadeIn>
              <div className="text-[#f9f9f9] bg-backgroundContrast flex flex-row w-[75px] h-[75px] justify-center items-center justify-self-center mb-[17px] rounded-[17px] text-3xl">
                <i className="bx bxl-apple"></i>
                <span>tv</span>
              </div>
            </FadeIn>
            <FadeIn>
              <h2 className="text-[28px] lg:text-[70px] leading-[33px] lg:leading-[73px] text-textBlack font-[600] text-center md:text-[40px] md:leading-[44px]">
                Watch Apple TV+ anywhere
                <br /> on the Apple TV app.
              </h2>
            </FadeIn>
            <FadeIn>
              <p className="mt-[14px] lg:mt-[20px] mb-[18px] text-[16px] leading-[22px] text-textBlack font-[400] text-center ">
                Find the Apple TV app on your favorite Apple devices.
                <br />
                Or watch Apple TV+ online at{" "}
                <span className="text-[#0066CC]">tv.apple.com.</span>
              </p>
            </FadeIn>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 mb-[41px] lg:mb-[67px] gap-[20px] lg:gap-[50px] mx-auto lg:max-w-[480px] max-w-[300px] md:max-w-[410px]">
            {contentIcons.map((contentIcon) => (
              <FadeIn key={contentIcon.id}>
                <div className="flex flex-col items-center">
                  <img
                    src={contentIcon.src}
                    alt={contentIcon.text}
                    className="h-[57px] lg:h-[82px]"
                  />
                  <h3 className="mt-[17px] text-[12px] md:text-[14px] lg:text-[19px] leading-[20px] text-textBlack font-[600] text-center">
                    {contentIcon.text}
                  </h3>
                </div>
              </FadeIn>
            ))}
          </div>
          <FadeIn>
            <div>
              <p className="text-[28px] lg:text-[39px] leading-[31px] lg:leading-[42px] text-textBlack font-[600] lg:font-[700] text-center">
                See it on your smart TV
                <br /> or streaming device.
              </p>
              <span className="text-[17px] mt-[10px] leading-[22px] text-[#0066CC] font-[400] flex justify-center items-center">
                Set up your device
                <i className=" bx bx-chevron-right"></i>
              </span>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="mt-[38px] flex flex-wrap md:grid md:grid-cols-5 gap-[20px] lg:gap-[50px] mx-auto md:max-w-[692px] lg:max-w-[100%] max-w-[360px] mb-[20px] justify-center flex-shrink-0">
              {partnerIcons.map((partnerIcon) => (
                <div
                  key={partnerIcon.id}
                  className="h-[51px] md:h-[63px] lg:h-[81px] flex min-w-[86px]"
                >
                  <img
                    className="object-contain w-full h-full"
                    src={partnerIcon.src}
                    alt={`partner-image-${partnerIcon.id}`}
                  />
                </div>
              ))}
            </div>
          </FadeIn>
        </Container>
      </section>
    </>
  );
};

export default Content;
