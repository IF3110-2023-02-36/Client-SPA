import { checkEmail, checkUsername, login, register } from "../api/Login";


export async function validateUsername(username : string) {
    const response = await checkUsername(username);
    const available = (response.data === "available");
    return available;
}

export async function validateEmail(email : string) {
    const response = await checkEmail(email);
    const available = (response.data === "available");
    return available;
}

export function validateConfirmPassword(password : string, confirmPassword : string) {
    return password === confirmPassword;
}

export async function validateRegister(username : string, name : string, email : string, password : string) {
    const response = await register(username, name, email, password);
    return response.data;
}

export async function validateLogin(username : string, password : string) {
    const response = await login(username, password);
    return response.data;
}
