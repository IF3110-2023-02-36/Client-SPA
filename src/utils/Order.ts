import { fetchAvailableOrder, fetchOrderByCourier, fetchOrderById, fetchOrderDetails, pickOrderAPI } from "../api/Order";

export async function getAvailableOrder() {
    const availableOrders = await fetchAvailableOrder();
    return availableOrders;
}

export async function getOrderById(orderId : number) {
    const order = await fetchOrderById(orderId);
    return order;
}

export async function getOrderDetails(orderId : number) {
    const orderDetails = await fetchOrderDetails(orderId);
    return orderDetails;
}

export async function getOrderByCourier(courierId : number) {
    const orders = await fetchOrderByCourier(courierId);
    return orders;
}

export async function pickOrder(orderId : number, username : string) {
    const response = await pickOrderAPI(orderId, username);
    return response;
}