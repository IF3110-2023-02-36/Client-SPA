import { Navigate } from "react-router-dom";
import { unsetUser } from "./LocalStorage";

export default function Logout() {
    unsetUser();
    return <Navigate to="/Login"/>
}