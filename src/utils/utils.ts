import axios from "axios";

const requestRide = async (data: any) => {
  try {
    const response = await axios.post("http://localhost:3001/request", data);
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};

export default requestRide;
