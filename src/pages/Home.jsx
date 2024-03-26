import Border from "../components/Border";
import ContactUs from "../components/Contact";
import Experience from "../components/Experience";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import TechMarquee from "../components/TechMarquee";

const Home = () => {
  return (
    <div>
      <Header />
      <Hero />
      <TechMarquee />
      <Border customStyles={"my-24"} />
      <Projects />
      <Border customStyles={"my-24"} />
      <Experience />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default Home;
