import { fetchAvailableOrder, fetchOrderByCourier, fetchOrderById, fetchOrderDetails, pickOrderAPI, updateOrderAPI } from "../api/Order";

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

export async function updateOrder(orderId : number, username : string, status : string, description : string) {
    const response = await updateOrderAPI(orderId, username, status, description);
    return response;
}
