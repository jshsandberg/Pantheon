import { API } from "../../utils/API";

export const GetAllUsersPantheons = async (username) => {
    const data = {};
    await API.getAllUsersPantheon(username).then(res => data["res"] = res.data);
    return data.res
};