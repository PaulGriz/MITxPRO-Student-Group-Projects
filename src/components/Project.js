import Link from 'next/link';

export default function Project({ project }) {
  return (
    <div>
      <h2 className='project-list'>
        <Link  href={`/project/${project.id}`}>
          {project.title}
        </Link>
      </h2>
      <p>{project.description}</p>
      <p className='difficulty'>Difficulty: {project.difficulty}</p>
    </div>
  );
}
