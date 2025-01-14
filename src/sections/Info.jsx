import bundleSrc from "../assets/images/bundle-info-section.jpg";

const Info = () => {
  return (
    <>
      <section>
        <div className="divInfo1 bg-[#f5f5f7] px-[40px] flex flex-col-reverse md:flex-row md:gap-[20px] lg:gap-0 items-center justify-center">
          <div className="flex items-center justify-center w-full">
            <div className="mt-[42px] mb-[77px] ml-[30px] w-[299px] lg:w-[544px]">
              <img
                src={bundleSrc}
                alt="image"
                className="object-cover w-full h-full"
              />
            </div>
          </div>

          <div className="flex flex-col mt-[45px] md:mt-0 w-full justify-start items-center">
            <h2 className="text-[21px] text-textBlack font-[600] flex items-center justify-center">
              <i className="bx bxl-apple text-[25px]"></i> One
            </h2>
            <p className="text-[28px] lg:text-[39px] leading-[30px] lg:leading-[41px] text-textBlack font-[600] flex items-center justify-center mb-[6px] text-center">
              Bundle Apple TV+ with
              <br />
              up to five other
              <br />
              great services.
              <br />
              And enjoy more for less.
            </p>
            <div className="mt-[16px] mb-[22px] flex justify-center">
              <a
                href=""
                className="text-[14px] bg-textBlack text-[#FFF] font-[600] cursor-pointer px-[22px] py-[12px] rounded-full"
              >
                Try Apple One free
              </a>
            </div>

            <a
              href=""
              className="text-[17px] leading-[22px] text-[#0066CC] font-[400] flex justify-center items-center"
            >
              Learn more
              <i className=" bx bx-chevron-right"></i>
            </a>
          </div>
        </div>
        <div className="flex flex-col items-center md:justify-between md:flex-row text-[14px] md:text-[16px] font-[600] text-textBlack border-t-[1px] border-t-textBlack bg-[#f5f5f7] py-3 px-[2%]">
          <p>Copyright &copy; 2025, Apple TV+ Clone-React.</p>
          <p className="flex flex-row items-center flex-nowrap">
            <strong>Developed by</strong>
            <a href="#" target="_blank" className="ml-1">
              <i>Camone_Mide</i>
            </a>
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/mide-web-developer"
              target="_blank"
              className="text-[20px] text-textBlack px-[2px]"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
          </p>
        </div>
      </section>
    </>
  );
};

export default Info;
