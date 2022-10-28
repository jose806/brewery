import axios from "axios";

export const axiosInstance = axios.create({
  headers: {
    "catch-control": "max-age=3000",
  },
});
