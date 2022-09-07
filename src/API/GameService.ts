import axios from "axios";
import { API_HOST, API_KEY } from "../consts";

export default class GameService {
	static async getAll() {
		const response = await axios.get("/games", {
			baseURL: `https://${API_HOST}/api`,
			headers: {
				"X-RapidAPI-Key": API_KEY,
				"X-RapidAPI-Host": API_HOST,
			},
			params: {
				platform: "browser",
			},
		});
		return response;
	}

	static async getById(id: string) {
		const response = await axios.get("/games/" + id, {
			baseURL: `https://${API_HOST}/api`,
			headers: {
				"X-RapidAPI-Key": API_KEY,
				"X-RapidAPI-Host": API_HOST,
			},
			params: {
				platform: "browser",
			},
		});
		return response;
	}
}
