import { API } from "../../utils/API";

export const SubmitVote = async (username, fighter, pantheonId, battle, number) => {
    await API.submitVote(username, fighter, pantheonId, battle, number).then(res => console.log(res));
}