import axios from "axios";

const PRANCEPAL_URl="https://youtube138.p.rapidapi.com"
const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key':process.env.PRANCEPAL_URl,
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
export const fetchDataApi=async(url)=>{
     const {data}=await axios.get(`${PRANCEPAL_URl}/${url}`,options)
     return data
}