import React from 'react'
import Card from './Card'

const Projects = () => {
  return (
    <section id="projects" className="flex-col">
      <div className="s-head heading">
        <h2>Projects</h2>
      </div>
      <div className="s-area">
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </div>
    </section>
  )
}

export default Projects