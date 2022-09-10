import { axiosRequest } from "../../helpers/apiFunc";


export const addPartnerPersonalDetailsAPI = (details: any) => {
  return axiosRequest("POST", "partner/personal", details);
}
