import { API } from "../../utils/API";

export const SubmitFinalVote = async (username, fighter, pantheonId, battle) => {
    await API.submitFinalVote(username, fighter, pantheonId, battle).then(res => console.log(res));
}