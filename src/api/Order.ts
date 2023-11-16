import axios from "axios";
import OrderInterface from "../interfaces/OrderInterface";
import OrderDetail from "../interfaces/OrderDetail";

const REST_URL = "http://localhost:5000"; // TODO : using env

export async function fetchAvailableOrder() {
    try {
        const API_URL = REST_URL + "/order/available-order";
        const response = await axios.get<OrderInterface[]>(API_URL);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}

export async function fetchOrderById(orderId : number) {
    try {
        const API_URL = REST_URL + "/order/order/" + orderId;
        const response = await axios.get<OrderInterface>(API_URL);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}

export async function fetchOrderDetails(orderId : number) {
    try {
        const API_URL = REST_URL + "/order/order-details/" + orderId;
        const response = await axios.get<OrderDetail[]>(API_URL);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}

export async function fetchOrderByCourier(courierId : number) {
    try {
        const API_URL = REST_URL + "/order/order-courier/" + courierId;
        const response = await axios.get<OrderDetail[]>(API_URL);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}

