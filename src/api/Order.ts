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

export async function pickOrderAPI(orderId : number, username : string) {
    try {
        const API_URL = REST_URL + "/order/pick-order";
        const data = {orderId : orderId, username : username};
        const response = await axios.put(API_URL, data);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}

export async function updateOrderAPI(orderId : number, username : string, status : string, description : string) {
    try {
        const API_URL = REST_URL + "/order/order/" + orderId;
        const data = {username : username, status : status, description};
        console.log("GOLGOLOG", data);
        const response = await axios.put(API_URL, data);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}

export async function finishOrderAPI(orderId : number, username : string) {
    try {
        const API_URL = REST_URL + "/order/finish-order";
        const data = {orderId : orderId, username : username};
        console.log("GOLGOLOG", data);
        const response = await axios.put(API_URL, data);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}
