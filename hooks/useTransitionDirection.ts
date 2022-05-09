import { useEffect, useRef } from 'react';

/**
* Uses a pre-defined array of routes to find which direction to animate between pages 
* @param {string} route - Current page route
* @return {string} Returns ltr (left to right) or rtl (right to left) as a string to be used conditionally
* I found strings to be more explicit than using a boolean value for this case
*/
const usePageTransition = (route: string): string => {
	const pages = ['/', '/work', '/blog'];
	const ref = useRef<string | undefined>();

	useEffect(() => {
		ref.current = route;
	}, [route])
	return ref.current && pages.indexOf(route) > pages.indexOf(ref.current) ? 'ltr' : 'rtl';
}

export default usePageTransition;
