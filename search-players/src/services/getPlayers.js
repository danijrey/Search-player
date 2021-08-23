import Axios from "axios";

const getPlayers = async () => {
  const headers = {
    "Content-Type": "application/json",
  };
  return await Axios.get("https://mach-eight.uc.r.appspot.com/", {
    headers,
  })
    .then((res) => {
      return res.data;
    })
    .catch((error) => {
      return error;
    });
};

export default getPlayers;
