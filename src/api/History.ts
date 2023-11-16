import axios from "axios";
import HistoryInterface from "../interfaces/HistoryInterface";

const REST_URL = "http://localhost:5000"; // TODO : using env

export async function fetchHistory(username : string) {
    try {
        const API_URL = REST_URL + "/history/" + username;
        const response = await axios.get<HistoryInterface[]>(API_URL);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}

