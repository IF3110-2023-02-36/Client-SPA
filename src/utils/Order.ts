import { fetchAvailableOrder, fetchOrderById, fetchOrderDetails } from "../api/Order";

export async function getAvailableOrder() {
    const userDetail = await fetchAvailableOrder();
    return userDetail;
}

export async function getOrderById(orderId : number) {
    const userDetail = await fetchOrderById(orderId);
    return userDetail;
}

export async function getOrderDetails(orderId : number) {
    const userDetail = await fetchOrderDetails(orderId);
    return userDetail;
}