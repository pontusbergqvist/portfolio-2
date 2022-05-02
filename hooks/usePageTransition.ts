import { useEffect, useRef } from 'react';

const usePageTransition = (route: string) => {
	const pages = ['/', '/work', '/blog'];
	const ref = useRef<string | undefined>();

	useEffect(() => {
		ref.current = route;
	}, [route])

	if (ref.current === undefined || (!pages.includes(route) && !pages.includes(ref.current))) {
		return null
	} else {
		return pages.indexOf(route) > pages.indexOf(ref.current) ? 'ltr' : 'rtl';
	} 
}

export default usePageTransition;
