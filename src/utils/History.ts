import { fetchHistory, fetchHistoryById, fetchHistoryDetails } from "../api/History";

export async function getHistory() {
    const response = await fetchHistory();
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
