import { API } from "../../utils/API";

export const DeclineFriendRequest = async (username, friendUsername) => {
    const data = {};
    await API.declineFriendRequest(username, friendUsername).then(res => data["res"] = res.data);
    return data.res
}