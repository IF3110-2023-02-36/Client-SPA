import { fetchHistory } from "../api/History";

export async function getHistory(username : string) {
    const response = await fetchHistory(username);
    const histories = response.data;
    return histories;
}
