import axios from "axios";

const REST_URL = "http://localhost:5000"; // TODO : using env

export async function checkUsername(username : string) {
    try {
        const API_URL = REST_URL + "/user/check-username";
        const data = {username : username};
        const response = await axios.post<string>(API_URL, data);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}

export async function checkEmail(email : string) {
    try {
        const API_URL = REST_URL + "/user/check-email";
        const data = {email : email};
        const response = await axios.post<string>(API_URL, data);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}

export async function register(username : string, name : string, email : string, password : string) {
    try {
        const API_URL = REST_URL + "/user/register";
        const data = {username : username, 
                        name : name, 
                        email : email, 
                        password : password};
        const response = await axios.post<string>(API_URL, data);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}

export async function login(username : string, password : string) {
    try {
        const API_URL = REST_URL + "/user/login";
        const data = {username : username, 
                        password : password};
        const response = await axios.post<string>(API_URL, data);
        console.log("api response", response);
        return response;
    } catch(err) {
        alert(err);
        throw err;
    }
}

