import { API } from "../../utils/API";

export const GetFriends = async (username) => {
    const data = {};
   await API.getFriends(username).then(res => data["res"] = res.data);
    return data.res
};