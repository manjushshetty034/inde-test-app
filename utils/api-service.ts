import { API_URL } from "./constants";

export default {
	getPageData: async () => {
		try {
			const res = await fetch(API_URL);
			const data = await res.json();

			return data;
		} catch (err) {
			return console.debug("Error: ", err);
		}
	},
};
