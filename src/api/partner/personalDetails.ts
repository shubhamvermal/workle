import { axiosRequest } from "../../helpers/apiFunc";

export const addPartnerProfilePicAPI = (details: any) => {
  return axiosRequest("POST", "partner/personal/profile", details, "image");
}

export const addPartnerPersonalDetailsAPI = (details: any) => {
  return axiosRequest("POST", "partner/personal", details);
}

export const getPersonalDetailsAPI = (details: any) => {
  return axiosRequest("GET", "partner/personal", details);
}
