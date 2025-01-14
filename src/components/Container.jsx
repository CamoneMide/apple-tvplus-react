import { twMerge } from "tailwind-merge";

const Container = ({ children, className }) => {
  return (
    <>
      <div
        className={twMerge(
          "mx-auto max-w-[980px] px-[22px] lg:px-0",
          className
        )}
      >
        {children}
      </div>
    </>
  );
};

export default Container;
