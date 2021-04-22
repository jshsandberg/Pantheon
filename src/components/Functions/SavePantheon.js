import { API } from "../../utils/API";

export const SavePantheon = async (data) => {
    const info = {};
    await API.savePantheon(data).then(res => info["res"] = res.data);
    return info.res;
}