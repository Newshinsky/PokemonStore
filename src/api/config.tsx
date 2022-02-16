import axios from "axios";

let Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjA2OGYzYzBmZDdmNDAwMGY3MWMzN2YiLCJyb2xlcyI6WyJjdXN0b21lciJdLCJpYXQiOjE2NDUwMDM2MjQsImV4cCI6MTY0NTA5MDAyNH0.sJCUk_OELFyFCYlZvEKvPkG6NEZqCTQdIOBHO6FcSbw"

const config = {
    baseURL: `https://it-shatle-demo-api.herokuapp.com`,
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
        Pragma: "no-cache",
        "Authorization": `Bearer ${Token}`
    },
}
const api = axios.create(config);


export default api;