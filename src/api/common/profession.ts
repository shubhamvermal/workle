import { axiosRequest } from "../../helpers/apiFunc";

export const getProfessionListAPI = () => {
    return axiosRequest("GET", "profession");
}
