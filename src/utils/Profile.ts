import { fetchBalance, withdraw } from "../api/Balance";
import { fetchUserDetail, putUserDetail } from "../api/Profile";
import UserInterface from "../interfaces/UserInterface";


export async function getUserDetail(username : string) {
    const userDetail = await fetchUserDetail(username);
    return userDetail;
}

export async function changeUserDetail(username : string, newUserDetail : UserInterface) {
    const responseString = await putUserDetail(username, newUserDetail);
    return responseString;
}
