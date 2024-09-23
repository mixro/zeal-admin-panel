import axios from "axios"

const BASE_URL = "https://zeal-backend-cucr.onrender.com/api";
const user = JSON.parse(localStorage.getItem("persist:root"))?.zealAdmin;
const currentUser = user && JSON.parse(user).currentUser;
const TOKEN = currentUser?.accessToken;

export const publicRequest = axios.create({
    baseURL: BASE_URL,
});

export const userRequest = axios.create({
    baseURL: BASE_URL,
    headers: { token: `Bearer ${TOKEN}` },
})