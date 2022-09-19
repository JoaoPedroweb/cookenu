import { useEffect } from "react";
import {
    goToLoginPage
} from '../routes';

export const useProtectedPage = (navigate) => {

    useEffect(() => {
        const token = localStorage.getItem("cookenu.token");
        if(!token) {
            goToLoginPage(navigate);
        }
    }, [navigate]);

}