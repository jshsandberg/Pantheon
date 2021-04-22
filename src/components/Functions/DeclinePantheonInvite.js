import { API } from "../../utils/API";

export const DeclinePantheonInvite = async (id, username) => {
    const data = {};
    await API.declinePantheon(id, username).then(res => data["res"] = res.data);
    return data.res
}