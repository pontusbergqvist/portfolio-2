import { useEffect, useRef } from 'react';
import useQuery from './useQuery';

/**
 * This uses an array to create an hierarcy between the items inside the input array. This hierarchy decides which direction the animation uses. The only use case for this is for next/previous buttons. 
 * @param {string} pages - An array of possible query routes from a query page. The array should be formatted [previous, current, next]
 * @returns {string} returns a string to be used as a condition in the variants object for the framer motion element.
 */

const usePageTransition = (pages: string[]): string => {
	const ref = useRef<string | undefined>();
	const query = useQuery();

	useEffect(() => {
		ref.current = query;
	}, [query])

	if (!ref.current) return 'rtl';
	return 1 > pages.indexOf(ref.current) ? 'ltr' : 'rtl';
}

export default usePageTransition;
