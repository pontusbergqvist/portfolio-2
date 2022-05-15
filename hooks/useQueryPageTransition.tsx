import { useEffect, useRef } from 'react';
import useQuery from './useQuery';


/**
 * Like usePageTransition this uses an array to create a transition hierarchy between post, nextPost and previousPost using the array indexing.
 * @param {string} post, nextPost, previousPost - key for respective query page, currently only using slugs as the unique identifier.
 */
const usePageTransition = (post: string, next: string | undefined, previous: string | undefined): string => {
	const pages = [previous, post, next];
	const ref = useRef<string | undefined>();
	const query = useQuery();

	useEffect(() => {
		ref.current = query;
	}, [query])

	if (!ref.current) return 'rtl';
	return pages.indexOf(post) > pages.indexOf(ref.current) ? 'ltr' : 'rtl';
}

export default usePageTransition;
