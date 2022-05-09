import axios from "axios";
const apiClient = axios.create({
  baseURL: "https://payout-gamma.cashfree.com/payout/v1",
  headers: {
    "X-Client-Id": "CF164002C9SJ5FRG1A0QGEN8J9D0",
    "X-Client-Secret": "48c697fbc97103b7f1bb76f730638c088d9060a1",
  },
});

export default apiClient;
