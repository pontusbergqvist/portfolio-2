import Heading from '../shared/heading';
import Link from '../shared/link';

const About = () => {
	return (
		<section className="my-14 flex flex-col">
			<main>
				<Heading>About</Heading>
				<p className="indent-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
			</main>
			<article className="my-4">
				<h3 className="text-h3">Work</h3>
				<ul>
					<li className="bg-item-light p-2 my-3 first:mt-0 rounded dark:bg-item-dark">
						<p>2022 - </p>
						<p>Front-end developer</p>
						<p>Arbetsplats</p>
					</li>
					<li className="bg-item-light p-2 my-3 first:mt-0 rounded dark:bg-item-dark">
						<p>2020 - 2022</p>
						<p>Back-end developer</p>
						<p>En annan arbetsplats</p>
					</li>
				</ul>
			</article>
			<article className="my-4">
				<h3 className="text-h3">Education</h3>
				<ul>
					<li className="bg-item-light p-2 my-3 first:mt-0 rounded dark:bg-item-dark">
						<p>2019 - 2020</p>
						<p>Webmaster, 120hp</p>
						<p>Högskolan Väst</p>
					</li>
				</ul>
			</article>
			<Link to="/">View portfolio</Link>
		</section>
	)
}

export default About;
