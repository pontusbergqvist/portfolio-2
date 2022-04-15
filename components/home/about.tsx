import Heading from '../shared/heading';
import Link from '../shared/link';

const About = () => {
	return (
		<section className="my-14 flex flex-col">
			<main>
				<Heading>About</Heading>
				<p className="indent-4">I am a full-stack web developer from Gothenburg, Sweden. Currently I am pursuing university studies, graduating in 2023. My interests include <span className="text-accent">React</span>, <span className='text-accent'>TypeScript</span> and <span className='text-accent'>web design</span>!</p>
			</main>
			<article className="my-4">
				<h3 className="text-h3">Work</h3>
				<ul>
					<li className="bg-item-light p-2 my-3 first:mt-0 rounded dark:bg-item-dark">
						<p className='font-mono'>2022 - </p>
						<p className='text-h3'>Front-end developer</p>
						<p>Arbetsplats</p>
					</li>
					<li className="bg-item-light p-2 my-3 first:mt-0 rounded dark:bg-item-dark">
						<p className='font-mono'>2020 - 2022</p>
						<p className='text-h3'>Back-end developer</p>
						<p>En annan arbetsplats</p>
					</li>
				</ul>
			</article>
			<article className="my-4">
				<h3 className="text-h3">Education</h3>
				<ul>
					<li className="bg-item-light p-2 my-3 first:mt-0 rounded dark:bg-item-dark">
						<p className='font-mono'>2019 - 2020</p>
						<p className='text-h3'>Webmaster, 120hp</p>
						<p>Högskolan Väst</p>
					</li>
				</ul>
			</article>
			<Link to="/">View portfolio</Link>
		</section>
	)
}

export default About;
