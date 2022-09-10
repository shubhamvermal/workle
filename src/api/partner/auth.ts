import { axiosRequest } from "../../helpers/apiFunc";


export function authAPI(fieldData: any) {
  return axiosRequest("POST", "partner/auth", fieldData);
}


export function verifyOTPAPI(fieldData: any) {
  return axiosRequest("POST", "partner/auth/verify", fieldData);
}

export const checkPartnerAvailbilityAPI = async () => {
  return await axiosRequest("GET", "partner/auth/checkAuthenticated");
};












// not in use
export function loginAPI(fieldData: any) {
  return axiosRequest("POST", "login", fieldData);
}


export const logoutAPI = async () => {
  return await axiosRequest("GET", "logout");
};
