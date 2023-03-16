import Project from './Project';

export default function ProjectList({ projects }) {
  return (
    <div>
      {projects.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </div>
  );
}
