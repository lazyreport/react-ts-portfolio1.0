import React from "react";
import demo from "../../assets/videos/demo.mp4";
import { ProjectMember } from "./ProjectMember";

const members =  [
  {
      name: "argamza",
      role: ["frontend", "ui/ux design"],
      link: "www.github.com/argamza",
    },
   {
      name: "bailey sarien",
      role: ["backend", "server"],
      link: "www.github.com/murdermystery",
    },
  ]


function ProjectContainer() {

  return (
    <div className="project-container">
      <div className="project-description">
        <h2 className="project-name">Project Name</h2>
        <p>project summary</p>
        <p>project feautures</p>
        <div>project stacks</div>
        <a href="">project links</a>
      </div>
      <div className="members">
        {
          members.map((member) => (
            <ProjectMember name={member.name} roles={member.role} />
          ))
        }
      </div>
      <div className="project-video">
        {/* should I do Iframe of video? I think Iframe would be better.. */}
{/*         <video src={} /> */}
      </div>
    </div>
  );
}

export default ProjectContainer;
