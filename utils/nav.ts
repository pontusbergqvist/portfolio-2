import { NextRouter } from "next/router";
export const getValues = (router: NextRouter): Array<number | string> => {
	if (router.route === "/") {
		return [0, "0%"];
	} else if (router.route === "/work") {
		return [180, "-50%"];
	} else if (router.route === "/blog") {
		return [360, "-100%"];
	}
	return [];
}
