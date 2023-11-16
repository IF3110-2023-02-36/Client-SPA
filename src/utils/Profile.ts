import { fetchBalance, withdraw } from "../api/Balance";
import { fetchUserDetail } from "../api/Profile";


export async function getUserDetail(username : string) {
    const userDetail = await fetchUserDetail(username);
    return userDetail;
}
