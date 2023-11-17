import axios from "axios";
import HistoryInterface from "../interfaces/HistoryInterface";
import HistoryDetailInterface from "../interfaces/HistoryDetailInterface";
import { getUser } from "../utils/LocalStorage";

const REST_URL = "http://localhost:5000"; // TODO : using env

export async function fetchHistory() {
    try {
        const API_URL = REST_URL + "/history";
        let header = { headers: {"Authorization" : `Bearer ${getUser().jwt}`} };
        const response = await axios.get<HistoryInterface[]>(API_URL, header);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}

export async function fetchHistoryById(historyId : number) {
    try {
        const API_URL = REST_URL + "/history/history/" + historyId;
        const response = await axios.get<HistoryInterface>(API_URL);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}

export async function fetchHistoryDetails(historyId : number) {
    try {
        const API_URL = REST_URL + "/history/detail/" + historyId;
        const response = await axios.get<HistoryDetailInterface[]>(API_URL);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}

