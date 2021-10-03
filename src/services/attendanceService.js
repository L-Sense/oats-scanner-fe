import axios from "axios";
import { config } from '../config'
import { authenticationService } from "./authenticationService";
axios.defaults.baseURL = config.SERVICE_URL

export const attendanceService = {
    checkin,
};

async function checkin(image, boolCheckin) {
    return await axios
        .post("scanner/", {
            image: image,
            isCheckin: boolCheckin,
        },{
            headers: {
                Authorization: authenticationService.getToken(),
            }
        },)
        .then((res) => {
            return res;
        });
}