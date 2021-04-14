import { API } from "../../utils/API";

export const friendRequests = async (username) => {
    const data = {};
    await API.checkFriendRequest(username).then(res => data["res"] = res.data)
    return data.res;
};