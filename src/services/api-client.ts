import axios from "axios"
export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1cdc09a7a68f40b5bc3e2dcd8b53744d",
  },
});