import Header from "../components/header/Header";
import HeroSection from "../components/hero/Hero";
import AboutSection from "./About";
import ProductGrid from "./Products";
import CTASection from "./CallToAction";
import ContactForm from "./Contact";
const Home = () => {
  return (
    <>
      <Header />
      <HeroSection />
      <ProductGrid />
      <AboutSection />
      <CTASection />
      <ContactForm />
    </>
  );
};

export default Home;
