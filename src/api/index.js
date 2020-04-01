import axios from "axios";

const api = axios.create({
   baseURL: "http://localhost:4000/api"
})

export const fetchCard = payload => api.post("/getCard", payload).then((response)=>{console.log("Server Response", response); return response}).catch((error)=>console.log(error))

export const getLogin = payload => api.post("/login", payload).then(response=>console.log("response", response))

export const getDeckList = payload => api.post("/getDeck", payload).then((response)=>{console.log("getDeck", response)})

export const saveToList = payload => api.post("/saveDeck", payload).then(response=>console.log("saveDeck response", response))

export const addToList = payload => api.post("/addCard", payload).then(response=>console.log("addcard response", response))

export const getRegister = payload => api.post("/register", payload).then(response=>console.log("register response", response))