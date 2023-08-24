import { useState } from "react";

const AboutSection = () => {
  const initialDescription =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.";
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  return (
    <>
      <div className="py-12">
        <h1 className="text-5xl font-medium font-serif text-center">
          About Us
        </h1>
      </div>
      <div className="flex mx-auto justify-center pb-12 max-w-[1200px] w-full px-10">
        <section className="bg-gray-100 p-8">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p className="text-gray-600">
            {expanded
              ? initialDescription
              : `${initialDescription.slice(0, 70)}...`}
            <span
              className="ml-1 text-[#F3A717] cursor-pointer font-medium"
              onClick={toggleDescription}
            >
              {expanded ? "Read Less" : "Read More"}
            </span>
          </p>
        </section>
      </div>
    </>
  );
};

export default AboutSection;
