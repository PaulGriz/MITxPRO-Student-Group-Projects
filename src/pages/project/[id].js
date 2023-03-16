import { useRouter } from "next/router";
import projects from "../../data/projects";
import { AiFillHome } from "react-icons/ai";
import Link from "next/link";
import { Image } from "next/image";

const ProjectPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const project = projects.find((project) => project.id === id);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div className="project-wrapper">
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <img
          src={project.image}
          alt="Project Image"
          className="project-image"
        ></img>
        <h2>Project Description:</h2>
        <p>{project.Project_Description}</p>
        <br />
        <h2>Project Links:</h2>
        <p>
          Link to Github:{" "}
          <a href={project.Github_Link}>{project.Github_Link}</a>
        </p>
        <p>
          Link to Preview:{" "}
          <a href={project.Preview_Link}>{project.Preview_Link}</a>
        </p>

        <Link href="/">
          <button className="home-button">Go Home</button>
        </Link>
      </div>
    </>
  );
};

export default ProjectPage;
