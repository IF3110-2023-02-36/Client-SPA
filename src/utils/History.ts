import { fetchHistory, fetchHistoryById, fetchHistoryDetails } from "../api/History";

export async function getHistory(username : string) {
    const response = await fetchHistory(username);
    const histories = response.data;
    return histories;
}

export async function getHistoryById(historyId : number) {
    const response = await fetchHistoryById(historyId);
    const histories = response.data;
    return histories;
}

export async function getHistoryDetails(historyId : number) {
    const response = await fetchHistoryDetails(historyId);
    const histories = response.data;
    return histories;
}
