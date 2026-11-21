import Header from "./components/Header";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import About from "./components/sections/About";
import Contact from "./components/sections/Contact";
import Hero from "./components/sections/Hero";
import Portfolio from "./components/sections/Portfolio";
import Process from "./components/sections/Process";
import Services from "./components/sections/Services";
import Technologies from "./components/sections/Technologies";
import WhyChooseUs from "./components/sections/WhyChooseUs";
import { useSiteEffects } from "./hooks/useSiteEffects";

export default function App() {
  useSiteEffects();

  return (
    <div className="min-h-screen w-full">
      <ScrollProgress />
      <Header />
      <main className="min-h-screen">
        <Hero />
        <Portfolio />
        <WhyChooseUs />
        <Services />
        <About />
        <Process />
        <Technologies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
