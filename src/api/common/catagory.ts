import { axiosRequest } from "../../helpers/apiFunc";

export const getCatagoryListAPI = () => {
    return axiosRequest("GET", "catagory");
}
