import axios from "axios";
import HistoryInterface from "../interfaces/HistoryInterface";
import HistoryDetailInterface from "../interfaces/HistoryDetailInterface";

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

