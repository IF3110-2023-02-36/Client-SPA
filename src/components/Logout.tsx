import { Navigate } from "react-router-dom";
import { unsetUser } from "../utils/LocalStorage";

export default function Logout() {
    unsetUser();
    return <Navigate to="/Login"/>
}