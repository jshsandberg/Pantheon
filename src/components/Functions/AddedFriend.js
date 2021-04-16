import { API } from "../../utils/API";

export const AddedFriend = async (user, selector, input) => {
    const data = {};
    await API.addFriend(user, selector, input).then(res => data["res"] = res.data);
    return data.res
}