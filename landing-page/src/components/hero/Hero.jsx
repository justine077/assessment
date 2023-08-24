import { Link } from "react-scroll";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="w-full h-[90vh] bg-image flex flex-col items-center md:items-start"
    >
      <div className="container mx-auto h-full px-6 flex flex-col items-center md:items-start justify-center">
        <h4 className="pb-2 md:pb-4 text-black font-mono text-center md:text-left">
          Trade-in-offer
        </h4>
        <h2 className="pb-2 font-serif text-3xl md:text-5xl font-semibold text-black text-center md:text-left">
          Super value deals
        </h2>
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-green-500 text-center md:text-left">
          On all products
        </h1>
        <p className="text-black font-mono text-sm md:text-base mt-2 md:mt-[15px] mb-3 md:mb-5 text-center md:text-left">
          Save more with coupons &amp; up to 70% off!
        </p>
        <Link to="products" smooth={true} duration={500}>
          <button className="font-serif mt-2 md:mt-4 bg-transparent bg-no-repeat text-green-500 font-bold text-base md:text-lg py-2 md:py-3 px-8 md:px-16 cursor-pointer">
            Shop Now
          </button>
        </Link>
      </div>
      <div id="products" className="pt-12"></div>
    </section>
  );
};

export default HeroSection;
