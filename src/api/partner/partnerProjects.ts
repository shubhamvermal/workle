import { axiosRequest } from "../../helpers/apiFunc";

export const addPartnerProjectsAPI = (details: any) => {
  return axiosRequest("POST", "partner/projects", details, "image");
}

export const getPartnerProjectsAPI = (details: any) => {
  return axiosRequest("GET", "partner/projects", details);
}
