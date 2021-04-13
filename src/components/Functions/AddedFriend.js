import { API } from "../../utils/API";

export const AddedFriend = async (user, selector, input) => {
    API.addFriend(user, selector, input).then(res => console.log(res));
}