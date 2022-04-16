import Link from 'next/link';
import { AiOutlineBranches } from "react-icons/ai";
import { useRouter } from 'next/router';

interface Props {
	current: string
}

const Breadcrumbs = ({ current }: Props) => {
	const router = useRouter();

	const getPathStringFromRoute = (string: string): string => {
		string = string.slice(1);
		return string.slice(0, string.indexOf('/'));
	}

	return (
		<div className='inline-flex items-center bg-item-light dark:bg-item-dark font-mono my-2'>
			<Link href={"/" + getPathStringFromRoute(router.pathname)}>
				<p className='bg-accent text-light px-2 cursor-pointer'>{getPathStringFromRoute(router.pathname)}</p>
			</Link>
			<span className='border-t-[14px] border-t-transparent border-l-[14px] border-l-accent border-b-[14px] border-b-transparent mr-1'></span>
			<AiOutlineBranches />
			<Link href={router.asPath}>
				<p className='px-2 cursor-pointer'>{current}</p>
			</Link>
		</div>
	)
}		

export default Breadcrumbs;
