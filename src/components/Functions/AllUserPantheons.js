import { API } from "../../utils/API";

export const AllUserPantheons = async (user) => {
    const data = {};
    await API.allUserPantheons(user.username, user).then(res => data["res"] = res.data);
    return data.res;
}