import HomeClient from "@/components/HomeClient";
import About from "@/components/About";
import Certificates from "@/components/Certificates";
import Projects from "@/components/Projects";
import Architecture from "@/components/Architecture";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <HomeClient />
      <About />
      <Projects />
      <Architecture />
      <Skills />
      <Certificates />
      <Achievements />
      <Contact />
      <Footer />
    </>
  );
}
