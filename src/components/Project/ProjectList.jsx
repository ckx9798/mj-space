import { PROJECT_LIST } from "./constants";
import ProjectItem from "@/components/Project/ProjectItem";

export default function ProjectList() {
  return (
    <div>
      {PROJECT_LIST.map((project) => (
        <ProjectItem project={project} key={project.title} />
      ))}
    </div>
  );
}
