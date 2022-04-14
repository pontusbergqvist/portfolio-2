import { default as NextLink } from 'next/link'

interface Props {
	to: string,
	children: any;
}

const Link = ({ to, children }: Props) => {
	return (
		<NextLink href={to}>
			<a className='underline text-center'>{children}</a>
		</NextLink>
	)
}

export default Link;
