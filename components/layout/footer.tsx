import Heading from '../shared/heading';
import Kitten from '../kitten/kitten';

const Footer = () => {
	return (
		<footer className='mt-14 pb-14'>
			<Heading>Contact</Heading>
			<section className='flex justify-between'>
				<div>
					<p>email: pontus@bergqvist.io</p>
					<p>github: pontusbergqvist</p>
				</div>
				<Kitten />
			</section>
		</footer>
	)
}

export default Footer;
