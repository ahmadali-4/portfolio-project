import "./App.scss";
import { Hero } from "./Components/Hero/Hero";
import { Navbar } from "./Components/navbar/navbar";

const App = () => {
  return (
    <div>
      <section id="Home Page">
        <Navbar />
        <Hero/>
      </section>
      <section id="About">Parallax</section>
      <section>Services</section>
      <section id="Projects">Parallax</section>
      <section>Portfolio3</section>
      <section>Portfolio3</section>
      <section>Portfolio3</section>
      <section id="Contact Me">Contact</section>
    </div>
  );
};

export default App;
