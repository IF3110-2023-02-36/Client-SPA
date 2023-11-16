import { fetchAvailableOrder } from "../api/Order";

export async function getAvailableOrder() {
    const userDetail = await fetchAvailableOrder();
    return userDetail;
}