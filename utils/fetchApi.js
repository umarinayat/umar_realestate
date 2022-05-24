import axios from "axios";

// headers: {
//     'X-RapidAPI-Host': 'bayut.p.rapidapi.com',
//     'X-RapidAPI-Key': 'c14d7ea104msh5e8853941457b70p142218jsn5f367efc731a'
//   }

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "c14d7ea104msh5e8853941457b70p142218jsn5f367efc731a",
    },
  });

  return data;
};
