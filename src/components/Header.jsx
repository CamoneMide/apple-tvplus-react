import { navLinks } from "../constants";
import Button from "./Button";
import Container from "./Container";

const Header = () => {
  return (
    <>
      <header className="relative z-20 text-white bg-backgroundContrast">
        <Container className="flex items-center min-h-[--header-row-height] justify-between">
          <a
            href="/"
            className="min-h-[--header-row-height] flex items-center px-[8px] -ml-[8px] text-mxl"
          >
            <i className="bx bxl-apple"></i>
            <span className="sr-only">Back to HomePage</span>
          </a>
          {navLinks.map((navLink) => {
            return (
              <a
                href="/"
                key={navLink.id}
                id={navLink.id}
                className="min-h-[--header-row-height] items-center px-[8px] text-xs font-[400] text-[rgba(255,255,255,0.8)] hidden md:flex testNavLinks"
              >
                {navLink.text}
              </a>
            );
          })}

          <div className="flex items-center min-h-[--header-row-height] justify-between">
            <a
              href="/"
              className="min-h-[--header-row-height] items-center px-[22px] text-[21px] text-[rgba(255,255,255,0.6)] flex"
            >
              <i className="bx bx-search"></i>
              <span className="sr-only">Search icon</span>
            </a>
            <a
              href="/"
              className="min-h-[--header-row-height] items-center px-[18px] -mr-[18px] text-[20px] text-[rgba(255,255,255,0.6)] flex"
            >
              <i className="object-contain bx bx-shopping-bag"></i>
              <span className="sr-only">Cart icon</span>
            </a>
          </div>
        </Container>
      </header>
      <div className="sticky top-0 z-20 text-white bg-backgroundContrast">
        <Container className="flex items-center justify-between min-h-[--header-row-height]">
          <p className="text-mxl font-[600]">Apple TV+</p>
          <Button size="small">Stream now</Button>
        </Container>
      </div>
    </>
  );
};

export default Header;
