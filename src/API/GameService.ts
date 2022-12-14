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

	static async getById(id: any) {
		const response = await axios.get("/game/" + id, {
			baseURL: `https://${API_HOST}/api`,
			headers: {
				"X-RapidAPI-Key": API_KEY,
				"X-RapidAPI-Host": API_HOST,
			},
			params: {
				id: `${id}`,
			},
		});
		return response;
	}
}
