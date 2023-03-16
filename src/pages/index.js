import Head from "next/head";
import ProjectList from "../components/ProjectList";
import projects from "../data/projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Student Projects</title>
        <meta name="description" content="MIT xPro Group Student Projects" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex-wrapper">
        <Image
          src="/images/students.png"
          alt="Students Icon"
          width={120}
          height={120}
        />
        <h1 className="heading">MIT xPRO Student Projects</h1>
        <ProjectList projects={projects} />
      </main>
    </>
  );
}
