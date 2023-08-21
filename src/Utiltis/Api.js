import axios from "axios";

const PRANCEPAL_URl="https://youtube138.p.rapidapi.com"
const options = {
  params: {
    hl: 'en',
    gl: 'US'
  },
  headers: {
    'X-RapidAPI-Key':'b689e6629dmsh3f37452b2e575f5p16ddc9jsn1b2eacbcb03e',
    'X-RapidAPI-Host': 'youtube138.p.rapidapi.com'
  }
};
export const fetchDataApi=async(url)=>{
     const {data}=await axios.get(`${PRANCEPAL_URl}/${url}`,options)
     console.log(data)
     return data
}