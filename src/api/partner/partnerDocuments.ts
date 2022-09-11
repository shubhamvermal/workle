import { axiosRequest } from "../../helpers/apiFunc";


export const addPartnerDocumentsAPI = (details: any) => {
  return axiosRequest("POST", "partner/document", details);
}

export const getPartnerDocumentsAPI = (details: any) => {
  return axiosRequest("GET", "partner/document", details);
}
