import React from 'react'
import "./Services.css"
import ComputerModelContainer from './Computer/ComputerModelContainer'

const Services = () => {
  return (
    <section className="approach-section">
      {/* Left Side: Approach Content */}
      <div className="approach-left">
        <h2 className="approach-title">My Approach</h2>
        <p className="approach-description">
          From strategy to execution, we ensure every phase of your project is handled with precision and care.
        </p>
        <div className="approach-phases">
          <div className="phase">
            <h3 className="phase-title">1. Planning and Strategy</h3>
            <p className="phase-description">
              Understanding your goals, researching the best approaches, and crafting a roadmap to ensure success.
            </p>
          </div>
          <div className="phase">
            <h3 className="phase-title">2. Development and Progress Updates</h3>
            <p className="phase-description">
              Turning the strategy into reality with regular progress updates to keep you in the loop.
            </p>
          </div>
          <div className="phase">
            <h3 className="phase-title">3. Deployment and Launch</h3>
            <p className="phase-description">
              Delivering a polished product and ensuring a smooth launch that meets your expectations.
            </p>
          </div>
        </div>
      </div>

      {/* Right Side: Reserved for Visuals */}
      <div className="approach-right">
        <ComputerModelContainer/>
      </div>
    </section>
  )
}

export default Services
