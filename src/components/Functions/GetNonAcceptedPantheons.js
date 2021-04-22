import { API } from "../../utils/API";

export const GetNonAcceptedPantheons = async (username) => {
    const data = {};
    await API.getNonAcceptedPantheons(username).then(res => data["res"] = res.data);
    return data.res;
};