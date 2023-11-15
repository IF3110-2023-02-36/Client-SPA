import axios from "axios";

const REST_URL = "http://localhost:5000"; // TODO : using env

export async function fetchBalance(username : string) {
    try {
        const API_URL = REST_URL + `/user/balance/${username}`;
        const response = await axios.get<number>(API_URL);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}

export async function withdraw(username : string, withdrawBalance : number) {
    try {
        const API_URL = REST_URL + "/user/balance";
        const data = {username : username, topupBalance : -withdrawBalance};
        const response = await axios.post<string>(API_URL, data);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}
