import Header from "./components/Header";
import Hero from "./components/Hero";
import Fleet from "./components/Fleet";
import WhyUs from "./components/WhyUs";
import HowItWorks from "./components/HowItWorks";
import ServiceArea from "./components/ServiceArea";
import Testimonials from "./components/Testimonials";
import Faq from "./components/Faq";
import CtaBand from "./components/CtaBand";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Fleet />
        <WhyUs />
        <HowItWorks />
        <ServiceArea />
        <Testimonials />
        <Faq />
        <CtaBand />
      </main>
      <Footer />
    </>
  );
}
