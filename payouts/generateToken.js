import apiClient from "./apiClient.js";

const generateToken = async () => {
  const cashfreeResponse = await apiClient.post("/authorize");
  console.log(cashfreeResponse);
  return cashfreeResponse.data?.data?.token;
};

export default generateToken;
