import axios from "axios";

// Unsplash API configuration

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID 9nsKuyjVZobcAeIPkmEiS5PKMbh5tLzMEDVFBmCgJYk",
  },
});
