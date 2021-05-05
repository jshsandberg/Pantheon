import { API } from "../../utils/API";

export const GetWinner = async (username) => {
    const data = {};
    await API.getWinner(username).then(res => data["res"] = res.data);
    return data.res;
};