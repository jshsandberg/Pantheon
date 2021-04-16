import { API } from "../../utils/API";

export const SavePantheon = async (data) => {
    await API.savePantheon(data).then(res => console.log(res));
}