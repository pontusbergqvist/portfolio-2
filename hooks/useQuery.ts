import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';

/** 
* @returns {string} - if current page is a query route, return the slug else return empty string
*/

const useQuery = (): string => {
	const router = useRouter();
	const [route, setRoute] = useState("");

	useEffect(() => {
		router.query.slug && typeof router.query.slug === "string" ? setRoute(router.query.slug) : setRoute("");
	}, [router.query])
	
	return route;
}

export default useQuery;
