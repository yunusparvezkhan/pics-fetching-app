import axios from "axios";

export default axios.create({
    baseURL: "https://api.unsplash.com",
    headers: {
        Authorization: "Client-ID PLiLgVUo7Z-p2Rkguvg0HYTXUEfu7ORa-5w4lFl1OOo"
    }
})