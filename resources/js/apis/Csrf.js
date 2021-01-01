import { defaults } from "chart.js"
import Api from "./Api"

export default {
    getCookie() {
        return Api.get("/csrf-cookie");
    }
}