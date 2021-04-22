import { API } from "../../utils/API";

export const AcceptPantheonInvite = async (id, username) => {
    await API.acceptPantheon(id, username).then(res => console.log(res))
}