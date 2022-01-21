import axios from 'axios';
import {Buffer} from 'buffer';



export const getData = async (uname,password,url) => {
   
    try{
        
        const r = await axios.post(`http://localhost:5000/cribewise`,{url,uname,password});
        return r.data;
    }
    catch(e){
        return e;
    }
}