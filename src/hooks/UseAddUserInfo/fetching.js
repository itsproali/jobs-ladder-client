import axios from "axios";

const fetching = axios.create({
  baseURL: 'http://localhost:5000' ,  
});


export default fetching