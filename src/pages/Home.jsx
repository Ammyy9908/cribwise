import Cookies from 'js-cookie';
import React from 'react';
import { Link, useHistory } from 'react-router-dom';
import ItemCard from '../components/ItemCard';
import {getData} from "../utils/getData"
import "./Home.css"
function Home() {
    const [appData,setAppData] = React.useState(null);
    const history = useHistory();
    const username = Cookies.get('username');
    const password = Cookies.get('password');
    const url = Cookies.get('url');

    const redirectLogin = () => {
        history.push('/login/cribwise');
    }

    const handleData = ()=>{
        getData(username,password,url).then((response)=>{
            const {error,data} = response;
            if(!error){
                console.log(data);
                setAppData(data);
            }
        }).catch((e)=>{
            console.log(e);
        })
    }
  return <div className='home'>
        <header>
            <div className="header-wrapper">
                <a href="#" className='logo'>Home</a>

                <div className="navbar-user">
                    <a href="#">{Cookies.get('username')}</a>
                    <Link to="/logout">Logout</Link>
                </div>
                
            </div>
        </header>

        <div className={`home-body ${appData && "home-group"}`}>
                  {  !appData  && <button className="connect-btn" onClick={Cookies.get('username')?handleData:redirectLogin}>Connect</button>}

                  {
                      appData && appData.map((item,i)=>{
                          return <ItemCard key={i} name={item.ItemName} id={item.DeviceId} category={item.ItemCategory} status={item.ItemStockStatus}/>
                      })
                  }
        </div>
  </div>;
}

export default Home;
