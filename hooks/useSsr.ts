import { useState, useEffect } from 'react';

/**
* Checks if the component is rendered on the server. Used as a condition for client side rendering.
* @returns booelan
*/
const useSsr = () => {
	const [ssr, setSsr] = useState(true);

	useEffect(() => {
		typeof window === 'undefined' ? setSsr(true) : setSsr(false);
	}, [])

	return ssr;
}

export default useSsr;













