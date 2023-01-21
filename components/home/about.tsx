import Heading from '../shared/heading';
import Link from '../shared/link';

const About = () => {
  return (
    <section className="my-8 flex flex-col">
      <main>
        <Heading>About</Heading>
        <p className="indent-4 mt-2">
          I am a full-stack web developer from Gothenburg, Sweden. Currently I
          work as a front-end developer at
          <span className="text-accent"> Consid</span> in Ljungby. My favorite
          technologies include <span className="text-accent">NextJS</span>,{' '}
          <span className="text-accent">TypeScript</span> and{' '}
          <span className="text-accent">Tailwind</span>.
        </p>
      </main>
      <section className="my-2">
        <article className="my-4">
          <h3 className="text-h3 my-1">Work</h3>
          <ul>
            <li className="bg-item-light p-2 my-3 first:mt-0 rounded dark:bg-item-dark">
              <p className="font-mono">2023 - </p>
              <p className="text-h3">Front-end developer</p>
              <p>Consid</p>
            </li>
          </ul>
        </article>
        <article className="my-4">
          <h3 className="text-h3 my-1">Education</h3>
          <ul>
            <li className="bg-item-light p-2 my-3 first:mt-0 rounded dark:bg-item-dark">
              <p className="font-mono">2020 - 2022</p>
              <p className="text-h3">Högskolan Väst</p>
              <p>Associate Degree in Information Technology</p>
            </li>
          </ul>
        </article>
      </section>
      <Link to="/work">View portfolio</Link>
    </section>
  );
};

export default About;
