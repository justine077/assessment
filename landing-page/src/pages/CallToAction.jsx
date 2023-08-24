import banner from "../assets/image/b17.png";
const CallToAction = () => {
  return (
    <>
      <div className="text-center mb-4 md:mb-6">
        <h1 className="text-4xl md:text-5xl font-medium font-serif">
          Feature Product
        </h1>
      </div>
      <div className="carousel w-full md:w-[888px] flex flex-col md:flex-row items-center gap-4 md:gap-[86px] relative bg-[#E9CEBE] my-6 md:my-[100px] mx-auto rounded-lg md:py-[32px] md:pr-[46px] md:pl-[86px] z-10 p-4 md:p-6">
        <img
          className="h-[200px] md:h-auto md:w-[300px] rounded-lg transform scale-1500 md:scale-100 shadow-lg"
          src={banner}
          alt="Justine"
        />
        <blockquote className="testimonial mt-4 md:mt-0">
          <p className="testimonial_text text-xs md:text-sm font-medium leading-6 md:mb-[32px] text-[#1a1a1a]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio rerum
            voluptatibus natus culpa, perspiciatis minima. Magnam quasi quos qui
            explicabo!
          </p>
          <div className="text-center md:text-left">
            <button className="bg-[#F3A717] px-6 py-2 text-white font-bold rounded">
              Buy Now
            </button>
          </div>
        </blockquote>
      </div>
      <div id="contact" className="pt-12"></div>
    </>
  );
};

export default CallToAction;
