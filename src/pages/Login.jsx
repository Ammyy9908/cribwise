import React from 'react';
import { Link } from 'react-router-dom';
import {loginnavis} from "../utils/loginnnavis"
import {loginCribWise} from "../utils/logincribewise"
import "./Login.css"
import { useHistory } from 'react-router-dom';
import Cookies from 'js-cookie';


function FormField({type,label,value,setValue,placeholder}) {
             return <div className="form-field">
                <label>{label}</label>
                <input type={type} value={value} onChange={(e)=>setValue(e.target.value)} placeholder={placeholder}/>
                </div>
}
function Login({brand}) {
    console.log(brand)
    const [name,setName] = React.useState("");
    const [password,setPassword] = React.useState("");
    const [url,setUrl] = React.useState("");
    const history = useHistory();


    const handleCribWiseLogin = () => {
        if(name && password && url){
            loginCribWise(name,password,url).then(data=>{
                const {error,user} = data;
                if(!error){
                    Cookies.set('username',user.uname);
                    Cookies.set('password',user.password);
                    Cookies.set('url',url);
                    history.push('/');
                }
                else{
                    alert('There is an error in the login!Try again');
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }

    const handleNavisLogin = () => {
        if(name && password && url){
            loginnavis(name,password,url).then(data=>{
                const {error,user} = data;
                if(!error){
                    Cookies.set('username',user.uname);
                    Cookies.set('password',user.password);
                    Cookies.set('url',url);
                    history.push('/');
                }
                else{
                    alert('There is an error in the login!Try again');
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }
  return <div className='login'>
            <div className="login-form">
                <div className="login-box">
                    <h3>Welcome to {brand.charAt(0).toUpperCase()+brand.slice(1)}!</h3>
                    <p>Welcome back! Please enter your details</p>
                    <div className="form-box">
                        <FormField type="text" label="Username" value={name} setValue={setName} placeholder="Enter Username"/>
                        <FormField type="password" label="Password" value={password} setValue={setPassword} placeholder="Password"/>
                        <FormField type="url" label="Url" value={url} setValue={setUrl} placeholder="Url"/>
                        <button className="login-btn" onClick={brand==="cribwise"?handleCribWiseLogin:handleNavisLogin}>Sign in</button>

                        <Link to={`/login/${brand==="cribwise"?"navvis":"cribwise"}`}>Login with {brand==="cribwise"?"navvis":"cribwise"}</Link>

                        
                    </div>
                </div>
            </div>
            <div className="login-section-image">
                {/* <img src="https://images.unsplash.com/photo-1635002962487-2c1d4d2f63c2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" /> */}
            </div>
        </div>;
}

export default Login;
