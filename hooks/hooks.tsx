import { useMutation, useQuery } from "@tanstack/react-query";
import axios from "axios";
import { usePathname } from "next/navigation";

// mutation post function
const Postfn = async (
  payload: any,
  url: any,
  token?: any,
  timeout = 220000
) => {
  const headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    Authorization: `${token && `Bearer ${token}`}`,
  };

  try {
    const response = await axios({
      method: "POST",
      url: url,
      data: payload,
      headers,
      timeout, // 3 minutes 40 seconds
    });

    return response;
  } catch (error) {
    const errorData: any = error;
    if (axios.isAxiosError(error) && error.code === "ECONNABORTED") {
      console.log(error);
    } else {
      throw error;
    }
  }
};
