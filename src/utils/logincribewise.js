import axios from 'axios';
import {Buffer} from 'buffer';



export const loginCribWise = async (uname,password,url) => {
    console.log(uname,password,url);
    try{
        
        const r = await axios.post(`http://localhost:5000/login/cribewise`,{url,uname,password});
        return r.data;
    }
    catch(e){
        return e;
    }
}