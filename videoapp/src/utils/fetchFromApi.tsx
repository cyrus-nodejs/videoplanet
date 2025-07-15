import axios from 'axios'
// const BASE_URL = import.meta.env.VITE_APP_BASE_URL

const options = {
    
    url: import.meta.env.VITE_APP_BASE_URL,
    params: {
      maxResults: '50'
    },
    headers: {
      'X-RapidAPI-Key': import.meta.env.VITE_APP_BASE_KEY,
      'X-RapidAPI-Host':  import.meta.env.VITE_APP_BASE_HOST
    }
  };  
  
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  export const fetchFromAPI =  async (url: any)  =>{
   const {data} =  await axios.get(`${import.meta.env.VITE_APP_BASE_URL}/${url}`, options);

   return data;
  }

  console.log(import.meta.env.VITE_APP_BASE_URL)
  console.log(import.meta.env.VITE_APP_BASE_KEY)