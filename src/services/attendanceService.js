import axios from "axios";
import { config } from '../config'

export const attendanceService = {
    checkin,
    checkout,
};

function checkin(image, token) {
    if (config.DEBUG) {
        return Promise.resolve(
            {
                "error_code": 0,
                "message": "success",
                "data": {
                    "name": "mmisimpt",
                    "flag": "On Time",
                }
            }
        ).then((res) => {
            console.log(res.data)
        });
    }

    return axios
        .post("user/checkin", {
            image: image,
            Authorization: token,
        });
}

function checkout(image, token) {
    if (config.DEBUG) {
        return Promise.resolve(
            {
                "error_code": 0,
                "message": "success",
                "data": {
                    "name": "mmisimpt",
                    "flag": "On Time",
                }
            }
        ).then((res) => {
            console.log(res.data)
        });
    }

    return axios
        .post("user/checkout", {
            image: image,
            Authorization: token,
        });
}