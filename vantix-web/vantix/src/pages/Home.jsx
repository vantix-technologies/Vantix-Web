import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Services from "../components/Services/Services";
import Solutions from "../components/Solutions/Solutions";
import Company from "../components/Company/Company";
import WhyVantix from "../components/WhyVantix/WhyVantix";
import CTAFooter from "../components/CTAFooter/CTAFooter";
import WhatsAppButton from "../components/WhatsAppButton/WhatsAppButton";
import Anuncio from "../components/Anuncio/Anuncio";

function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Services />
      <Solutions />
      <Company />
      <WhyVantix />
      <CTAFooter />
      <WhatsAppButton />
    </>
  );
}

export default Home;