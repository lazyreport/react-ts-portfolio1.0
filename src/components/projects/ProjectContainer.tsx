import React from 'react'
import demo from "../assets/videos/demo.mp4"


function ProjectContainer() {
  return (
    <div className='project-container'>
        <div className="project-description">
        <h2 className='project-name'>Project Name</h2>
        <p>project summary</p>
        <p>project feautures</p>
        <div>project stacks</div>
        <a href="">project links</a>
        </div>
        <div className="project-video">
            {/* should I do Iframe of video? I think Iframe would be better.. */}
            <video src={demo}></video>
        </div>
    </div>
  )
}

export default ProjectContainer