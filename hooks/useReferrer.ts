import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';

const useReferrer = () => {
	const router = useRouter();
	const ref = useRef<string | undefined>();
	useEffect(() => {
		ref.current = router.route;
	})
	return ref.current;
}

export default useReferrer;
