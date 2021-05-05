import { API } from "../../utils/API";

export const GetResultsForPantheon = async (username) => {
    const data = {};
    await API.getResultsPantheon(username).then(res => data["res"] = res.data);
    return data.res
}