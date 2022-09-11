import { axiosRequest } from "../../helpers/apiFunc";


export const addProfessionalDetailsAPI = (details: any) => {
  return axiosRequest("POST", "partner/professional", details);
}

export const getProfessionalDetailsAPI = (details: any) => {
  return axiosRequest("GET", "partner/professional", details);
}
