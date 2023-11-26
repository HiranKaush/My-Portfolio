import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { bgno } from "../assets";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className="flex">
        <motion.div variants={textVariant()} className="flex-1 mt-20">
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>

          <motion.p
            variants={fadeIn("", "", 0.1, 1)}
            className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
          >
            I am a proficient undergraduate student specializing in Software
            Engineering, equipped with hands-on experience in JavaScript(Main)
            and Java. I'm familiar with frameworks such as React.js, React
            Native, and Node.js. As a quick learner, I thrive in collaborative
            team environments, dedicated to crafting efficient, scalable, and
            user-friendly solutions that effectively tackle real-world
            challenges. Let's collaborate to make this technological world a
            better place !
          </motion.p>

          <p className={styles.sectionHead2Text}>Soft Skills</p>
          <div className="mt-1 ml-6 text-secondary text-[17px] max-w-3xl leading-[30px]">
            <ul style={{ listStyleType: "disc" }}>
              <li>LeaderShip</li>
              <li>Problem Solving</li>
              <li>Stress management</li>
              <li>Team Collaboration</li>
              <li>Better Communication</li>
              <li>Time management</li>
              <li>Adaptability</li>
            </ul>
          </div>

          <p className={styles.sectionHead2Text}>Education</p>
          <div className="mt-1 ml-6 text-secondary text-[17px] max-w-3xl leading-[30px]">
            <ul style={{ listStyleType: "disc" }}>
              <li>Central College Anuradhapura (2011-2019)</li>
            </ul>
          </div>
          <p className={styles.sectionHead2Text}>Academic Qualifications</p>
          <div className="mt-1 ml-6 mb-8 text-secondary text-[17px] max-w-3xl leading-[30px]">
            <ul style={{ listStyleType: "disc" }}>
              <li>
                Specialization in Software Engineering - BSc(Hons) Information
                Technology SLIIT (2021-2025)
                <ul className="ml-2">
                  <li>-GPA : 3.19</li>
                </ul>
              </li>
            </ul>
          </div>
        </motion.div>

        <div className="flex-2 ">
          <img src={bgno} alt="bgno" className="w-100 h-100 mb-[-100px]" />
        </div>
      </div>
      <p className={styles.sectionHead2Text}>Services</p>
      <div className="mt-5 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
