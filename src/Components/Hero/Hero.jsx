import React, { Suspense } from 'react'
import {motion} from "motion/react";
import "./Hero.css"
import Shape from './Shape';
// import video from "../../../public/Videp.mp4"
import { Canvas } from '@react-three/fiber';
// import { Suspense } from 'react';

const Hero = () => {

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  return (
    <div class="hero">
      <video autoPlay muted loop playsInline className="background-video">
        <source src="/Video1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div class="hero_container">
        <motion.h1
        initial={{y:-100 , opacity:0}}
        animate={{y:0 , opacity:1}}
        transition={{duration:1}}
        class="hero__name"
        >Hi, I'm Gautam 👋</motion.h1>
        {/* <h2 class="hero__headline">Front-End Developer | Aspiring Web Designer</h2> */}
        <p class="hero__subheadline">Transforming your ideas into reality with creative and modern web solutions.</p>
        <p class="hero__description">
        As a web developer, I blend creativity with technology to create seamless, user-first web experiences. I specialize in transforming complex ideas into intuitive, responsive solutions. Let's build something remarkable.
        </p>
        <div class="hero__cta">
          <a href="#projects" class="cta__button1" onClick={scrollToSection}>Dive into My Projects</a>
          <a href="#contact" class="cta__button" onClick={scrollToSection}>Contact Me</a>
        </div>
        {/* <div className="bg">
          <Canvas>
            <Suspense fallback="loading...">
            <Shape/>
            </Suspense>
          </Canvas>
        </div> */}
      </div>
    </div>
  )
}

export default Hero
