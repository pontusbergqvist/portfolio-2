import { useEffect, Dispatch, SetStateAction } from 'react';

interface Props {
	onClick: Dispatch<SetStateAction<boolean>>
}

const MenuOverlay = ({ onClick }: Props) => {

	useEffect(() => {
		document.body.classList.add('overflow-hidden');
		return () => document.body.classList.remove('overflow-hidden');
	})

	return (
		<div 
			onClick={() => onClick(false)}
			className="opacity-90 h-screen w-screen bg-light dark:bg-dark text-dark dark:text-light fixed top-[0px] right-0">
		</div>
	)
}

export default MenuOverlay;
