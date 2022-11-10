import React from "react";

interface MemberType {
  name: string;
  link?: string;
  roles: Array<string>; // now this is bugging me quiet a bit ..
}

export const ProjectMember: React.FC<MemberType> = ({ name, roles, link }) => {
  return (
    <div className="project-member">
      <a href={link}>{name}</a>
    </div>
  );
};
