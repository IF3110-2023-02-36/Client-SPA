import axios from "axios";
import UserInterface from "../interfaces/UserInterface";

const REST_URL = "http://localhost:5000"; // TODO : using env

export async function fetchUserDetail(username : string) {
    try {
        const API_URL = REST_URL + `/user/user-detail/${username}`;
        const response = await axios.get<UserInterface>(API_URL);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}
