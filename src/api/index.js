import axios from "axios";

const api = axios.create({
   baseURL: "http://localhost:4000/api"
})

export const fetchCard = payload => api.post("/getCard", payload).then((response)=>{console.log("Server Response", response); return response}).catch((error)=>console.log(error))

export const login = payload => api.post("/getCard", payload).then(response=>console.log("response"))