import { API } from "../../utils/API";

export const UserPantheonInteractions = async (username) => {
    const data = {};
    await API.getUserPantheonInteractions(username).then(res => data["res"] = res.data);
    return data.res;
}