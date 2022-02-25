import axios from "axios";

export const getEmails = async () => {
  return await axios
    .get("https://flipkart-email-mock.now.sh/")
    .then((response) => response?.data?.list || []);
};

export const getEmailById = async (id) => {
  return await axios
    .get(`https://flipkart-email-mock.now.sh/?id=${id}`)
    .then((response) => response?.data);
};
