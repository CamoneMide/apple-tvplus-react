import Button from "./Button";
import Container from "./Container";

const Header = () => {
  return (
    <>
      <header className="relative z-20 text-white bg-backgroundContrast">
        <Container className="flex items-center min-h-[--header-row-height]">
          <a
            href="/"
            className="min-h-[--header-row-height] flex items-center px-[22px] -ml-[22px] text-mxl"
          >
            <i className="bx bxl-apple"></i>
            <span className="sr-only">Back to HomePage</span>
          </a>
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
