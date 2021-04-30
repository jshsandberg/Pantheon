import { API } from "../../utils/API";

export const GetFriendsPantheon = async (user) => {
    const data = {};
    await API.getFriendsPantheon(user).then(res => data["res"] = res.data);
    return data.res;
}