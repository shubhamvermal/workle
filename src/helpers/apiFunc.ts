import Axios from "axios";
import { ENV } from "../config/config";


export async function axiosRequest(
    method: string,
    basicUrl: string,
    data = {},
    isData = true
  ) {
  
    console.log('ENV IS', process.env.NODE_ENV)
    let URL = `${ENV[process.env.NODE_ENV].SERVER_URL}/${basicUrl}`;
  
    return Axios({
      method: method,
      url: URL,
      headers: {
        "Content-Type": "application/json",
      },
      ...(isData && { data: data }),
      withCredentials: true,
    })
      .then((res) => res)
      .catch((err) => {
        if (err?.response?.data) {
          throw err.response.data;
        }
        throw err;
      });
  }
  