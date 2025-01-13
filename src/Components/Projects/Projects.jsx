import React from 'react';
import "./Projects.css";

const items = [
  {
    id: 1,
    image: "/Pr1.jpg",
    title: "IRADA-Youth Engagement in Environmental Issues",
    technologies: ["React", "Tailwind", "JavaScript"],
    description: "Developed a user-friendly website for the Youth Environmental Summit, enhancing participant engagement.",
    liveLink: "https://iraada.vercel.app/",
    codeLink: "https://github.com/Gautam7701/irada/",
  },
 
  {
    id: 2,
    image: "/Pr2.jpg",
    title: "PromptSpot: Discover Creative Prompts",
    description: "PromptSpot is an open-source, AI-driven platform for discovering, creating, and sharing creative prompts. It empowers users to explore new ideas and fuel their creative projects.",
    liveLink: "https://promptspots.vercel.app/",
    technologies: ["Next.Js", "React", "Tailwind"],
    codeLink: "https://github.com/Gautam7701/Promptspot",
  },

  {
    id: 3,
    image: "/Pr3.jpg",
    title: "Nike Shoes: Style in Every Step",
    technologies: ["React", "Tailwind", "Javascript"],
    description: "Nike Shoes is a front-end e-commerce platform featuring stylish footwear, customer reviews, offers, and a seamless shopping experience.",
    liveLink: "https://nikefusion.netlify.app/",
    codeLink: "https://github.com/Gautam7701/Nike",
  },

  {
    id: 4,
    image: "/Pr4.jpg",
    title: "MOVIEMATE- Discover Your Next Favourite Film",
    technologies: ["React", "Tailwind", "JavaScript"],
    description: " A responsive movie platform built with React and Tailwind CSS, featuring real-time data fetching and personalized recommendations.",
    liveLink: "https://filmmate.netlify.app/",
    codeLink: "https://github.com/Gautam7701/MovieMate"
  },
  {
    id: 5,
    image: "/Pr5.jpg",
    title: "EDUSITY- Transforming Education with Technology",
    technologies: ["React", "CSS", "JavaScript"],
    description: "Created an online educational platform using React.js, designed to enhance student engagement and learning. Focused on the front-end with a user-friendly interface, though real-time integration and feedback features were not implemented.",
    liveLink: "https://college-edusity.netlify.app/",
    codeLink: "https://github.com/Gautam7701/react-college-website"
  },
  {
    id: 6,
    image: "/Pr6.jpg",
    title: "Fitzonehub – Empowering Your Fitness Journey",
    technologies: ["React", "CSS", "JavaScript"],
    description: "Fitzonehub offers personalized programs, expert trainers, and flexible plans to help you achieve your fitness goals. Join us and transform your body and mind!",
    liveLink: "https://fitzonehub.netlify.app/",
    codeLink: "https://github.com/Gautam7701/react-gym-website"
  },
];

const Projects = () => {
  return (
    <div className="project-section" id='projects'>
      <h2 className="section-title">My Projects</h2>
      <div className="projects-container">
        {items.map((project) => (
          <div key={project.id} className="card">
            <img src={project.image} alt={project.title} className="card-image" />
            <div className="card-content">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
              <div className="card-technologies">
                {project.technologies.map((tech, index) => (
                  <span key={index} className="tech-icon">{tech}</span>
                ))}
              </div>
              <div className="card-buttons">
                <a href={project.liveLink} className="btn1" target="_blank" rel="noopener noreferrer">
                  View Live
                </a>
                <a href={project.codeLink} className="btn" target="_blank" rel="noopener noreferrer">
                  View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
