import axios from "axios";
import { config } from '../config'

export const authenticationService = {
    login,
    logout,
    authorize,
    getToken,
};

function login(username, password) {
    if (config.DEBUG) {
        localStorage.setItem("token", "Bearer TESTINGTOKEN");
        return Promise.resolve();
    }

    return axios
        .post("user/login", {
            name: username,
            password: password,
        })
        .then((res) => {
            localStorage.setItem("token", res.data.data.token);
        });
}

function logout() {
    localStorage.removeItem('token');
    return Promise.resolve();
}

function authorize(){
    let token = getToken()
    if (config.DEBUG) {
        if (token == null) {
            return Promise.reject()
        }
        // console.log("token ", token);
        return Promise.resolve()
    }
    if (token === null) return Promise.reject()

    return axios
        .post("user/auth", {
            Authorization: getToken()
        });
}

function getToken(){
    return localStorage.getItem('token')
}