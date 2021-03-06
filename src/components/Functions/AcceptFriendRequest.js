import { API } from "../../utils/API";

export const AcceptFriendRequest = async (username, friendUsername) => {
    const data = {};
    await API.acceptFriendRequest(username, friendUsername).then(res => data["res"] = res.data);
    return data.res
}