import React from "react"
import Hero from "./Components/Hero/Hero"
import Services from "./Components/Services/Services"
import Projects from "./Components/Project/Project"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Project from "./Components/Projects/Projects"
// import Test3d from "./Components/Test/Test3d"


const App = () => {
  return (
    <div className="container">
      <section id="#home">
      <Hero/>
      </section>
      <section id="#services">
      <Services/>
      </section>
      {/* <section  */}
      {/* <Projects/> */}
      <Project/>
      {/* </section> */}
      <section id="#contact">
      <Contact/>
      </section>
      <section id="#contact">
      <Footer/>
      </section>
      {/* <Test3d/> */}
    </div>
  )
}

export default App