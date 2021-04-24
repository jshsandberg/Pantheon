import { API } from "../../utils/API";

export const GetPantheonBattle = async  (username) => {
    const data = {};
    await API.getPantheonBattle(username).then(res => data["res"] = res.data);
    return data.res;
};