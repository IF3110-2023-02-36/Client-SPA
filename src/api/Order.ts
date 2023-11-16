import axios from "axios";
import OrderInterface from "../interfaces/OrderInterface";

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