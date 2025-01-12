import React, { useEffect, useRef, useState } from 'react'
import "./Project.css"
import { motion, useScroll, useTransform, useInView } from 'framer-motion'
// import { img, link, title } from 'motion/react-client'


const items = [
  {
    id: 1,
    img: "/Pr1.jpg",
    title: "IRADA-Youth Engagement in Environmental Issues",
    desc: "Developed a user-friendly website for the Youth Environmental Summit, enhancing participant engagement.",
    link: "https://iraada.vercel.app/",
    codelink:"https://github.com/Gautam7701/irada/",
  },
  {
    id: 2,
    img: "/Pr2.jpg",
    title: "PromptSpot: Discover Creative Prompts",
    desc: "PromptSpot is an open-source, AI-driven platform for discovering, creating, and sharing creative prompts. It empowers users to explore new ideas and fuel their creative projects.",
    link: "https://promptspots.vercel.app/",
    codelink:"https://github.com/Gautam7701/Promptspot",
  },
  {
    id: 3,
    img: "/Pr3.jpg",
    title: "Nike Shoes: Style in Every Step",
    desc: "Nike Shoes is a front-end e-commerce platform featuring stylish footwear, customer reviews, offers, and a seamless shopping experience.",
    link: "https://nikefusion.netlify.app/",
    codelink:"https://github.com/Gautam7701/Nike",
  },
  {
    id: 4,
    img: "/Pr4.jpg",
    title: "MOVIEMATE- Discover Your Next Favourite Film",
    desc: " A responsive movie platform built with React and Tailwind CSS, featuring real-time data fetching and personalized recommendations.",
    link: "https://filmmate.netlify.app/",
    codelink:"https://github.com/Gautam7701/MovieMate"
  },
  {
    id: 5,
    img: "/Pr5.jpg",
    title: "EDUSITY- Transforming Education with Technology",
    desc: "Created an online educational platform using React.js, designed to enhance student engagement and learning. Focused on the front-end with a user-friendly interface, though real-time integration and feedback features were not implemented.",
    link: "https://college-edusity.netlify.app/",
    codelink:"https://github.com/Gautam7701/react-college-website"
  },
];


const imgVariants = {
  initial:{
    x:-500,
    y:500,
    opacity:0,
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration: 0.5,
      ease:"easeInOut",

    },
  },
};
const textVariants = {
  initial:{
    x:500,
    y:500,
    opacity:0,
  },
  animate:{
    x:0,
    y:0,
    opacity:1,
    transition:{
      duration: 0.5,
      ease:"easeInOut",
      straggerChildren:0.5,
    },
  },
};
const ListItem = ({ item }) => {
  const ref=useRef();

  const isInview = useInView(ref,{margin:"-100px"})
  return (
    <div className="pItem" ref={ref}>
      <motion.div variants={imgVariants} animate={isInview?"animate":"initial"} className="pImg">
        <img src={item.img} alt="" />
      </motion.div>
      <motion.div  variants={textVariants} animate={isInview?"animate":"initial"} className="pText">
        <motion.h1 variants={textVariants}>{item.title}</motion.h1>
        <motion.p variants={textVariants}>{item.desc}</motion.p>
        <motion.div variants={textVariants} className="buttons">
          <a href={item.link} target="_blank" rel="noopener noreferrer">
            <button>View Project</button>
          </a>
          <a href={item.codelink} target="_blank" rel="noopener noreferrer">
            <button>Source Code</button>
          </a>
        </motion.div>
      </motion.div>

    </div>
  )
}
const Project = () => {
  const [containerDistance, setcontainerDistance] = useState(0);

  const ref = useRef(null)
  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setcontainerDistance(rect.left)
    }

  }, [])
  const { scrollYProgress } = useScroll({ target: ref });
  const isMobile = window.innerWidth <= 768;

  const xTranslate = useTransform(scrollYProgress, [0, 1], [0, isMobile ? 0 :-window.innerWidth * items.length])
  return (
    <div id='projects' className='projects' ref={ref}>
      <h1>My Projects</h1>
      <motion.div className="pList" style={{ x: xTranslate }}>
        {/* <div className="empty"
          style={{ width: window.innerWidth - containerDistance }}
        /> */}
        {items.map(item => (
          <ListItem item={item} key={item.id} />
        ))}
      </motion.div>
      <section />
      <section />
      <section />
      <section />
      <section />

    </div>
  )
}

export default Project
