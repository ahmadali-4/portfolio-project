import "./App.scss";
import AboutSection from "./Components/About/About";
import { Cursor } from "./Components/Cursor/Cursor";
import { Hero } from "./Components/Hero/Hero";
import { Projects } from "./Components/Project/Projects";
import { Navbar } from "./Components/navbar/navbar";
import { Parallex } from "./Components/parallex/Parallex";

const App = () => {
  return (
    <div>
      <Cursor />
      <section id="Home Page">
        <Navbar />
        <Hero />
      </section>
      <section id="About"><AboutSection/></section>
      <section id="Projects">
        <Parallex />
      </section>
      <section><Projects/></section>
      <section>Portfolio3</section>
      <section>Portfolio3</section>
      <section id="Contact Me">Contact</section>
      
    </div>
  );
};

export default App;
