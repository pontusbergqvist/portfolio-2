import Nav from './nav';
import Footer from './footer';

interface Props {
	children: JSX.Element
}

const Layout = ({ children }: Props) => {
	return (
		<div className='bg-light text-dark dark:bg-dark dark:text-light text-body font-sansSerif'>
			<div className='w-[650px] mx-auto'>
				<Nav />
				<div className='w-[550px] mx-auto'>
					{children}
					<Footer />
				</div>
			</div>
		</div>
	)
}

export default Layout;
