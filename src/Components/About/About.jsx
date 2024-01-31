import React, { useTransition, useState } from "react";
import TabButton from "../../Utils/TabButton";
import "./about.scss";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromRight } from "../../Utils/motions";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-text">
        <li>Node.js</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>Sequelize</li>
        <li>JavaScript</li>
        <li>React</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-text">
        <li style={{fontWeight: "bold"}}>COMASTS University Islamabad (Sahiwal Campus)</li>
        <li>Bachelor of Software Engineering</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-text">
        <li>AWS Cloud Practitioner</li>
        <li>Google Professional Cloud Developer</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <motion.section
      initial="hidden"
      animate="visible"
      className="about-section"
      id="about"
    >
      <div className="wrapper">
        <motion.div className="image-container" variants={slideInFromLeft(0.5)}>
          <motion.img
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            src="about-image.png"
            alt=""
          />
        </motion.div>
        <motion.div className="text-container" variants={slideInFromRight(0.5)}>
          <h2>About Me</h2>
          <p>
            I am a full stack web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, Node.js, Express, PostgreSQL,
            Sequelize, HTML, CSS, and Git. I am a quick learner and I am always
            looking to expand my knowledge and skill set. I am a team player and
            I am excited to work with others to create amazing applications.
          </p>
          <div className="tab-buttons">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
          </div>
          <div style={{ marginTop: "10px" }}>
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
