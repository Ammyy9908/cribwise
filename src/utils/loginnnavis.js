import axios from 'axios';



export const loginnavis = async (uname,password,url) => {
    console.log(uname,password,url)
    try{
        
        const r = await axios.post(`http://localhost:5000/login/navvis`,{
            uname,
            password,
            url
        });
        return r.data;
    }
    catch(e){
        return null;
    }
}