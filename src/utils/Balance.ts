import { fetchBalance, withdraw } from "../api/Balance";


export async function getBalance(username : string) {
    const balance = await fetchBalance(username);
    return balance;
}

export async function withdrawFunction(username : string, withdrawBalance : number) {
    const response = await withdraw(username, withdrawBalance);
    const success = (response.data === "success");
    return success;
}
