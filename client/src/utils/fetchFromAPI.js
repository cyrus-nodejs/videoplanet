import axios from "axios";

const BASE_URL = "https://youtube-v31.p.rapidapi.com"
const options = {
    
    url: BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': '153ae4376amsh607af9dbb7d1f9dp18df99jsnfa51ee398bae',
      'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
    }
  };
  
  export const fetchFromAPI =  async (url)  =>{
   const {data} =  await axios.get(`${BASE_URL}/${url}`, options);

   return data;

  }