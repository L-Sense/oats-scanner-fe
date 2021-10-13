import axios from "axios";
import { config } from '../config'
import { authenticationService } from "./authenticationService";
axios.defaults.baseURL = config.SERVICE_URL

export const attendanceService = {
    checkin,
};

async function checkin(image, boolCheckin) {
    return await axios
        .post("scanner", {
            image: image,
            isCheckin: boolCheckin,
        },{
            headers: {
                Authorization: authenticationService.getToken(),
            }
        },)
        .then((result) => {
            return `${result.data.message} ${result.data.data.employee_name ?? ''}`;
        })
        .catch((err) => {
            return err.response.data.message
        });
}