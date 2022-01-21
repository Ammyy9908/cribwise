import Cookies from 'js-cookie';
import React from 'react';
import { useHistory } from 'react-router-dom';
import "./logout.css"
function Logout() {

const history = useHistory();
    const handleLogout =()=>{
        Cookies.remove('username');
        Cookies.remove('password');
        Cookies.remove('url');
        history.push('/login/cribwise');
    }

    React.useEffect(()=>{
        setTimeout(handleLogout,5000);
    },[])
  return <div className='logout'>

      <h1>Loging out...</h1>
  </div>;
}

export default Logout;
