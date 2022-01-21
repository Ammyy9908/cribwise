import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import Login from './pages/Login';
import Home from './pages/Home';
import Logout from './pages/Logout';

function App() {
  return (
    <Router>
  <div>
  
  
  <Switch>
  <Route exact path="/">
    <Home/>
    </Route>


    <Route exact path="/logout">
    <Logout/>
    </Route>

  
   

    <Route
           exact
            path="/login/:brand"
            render={(props) => {
              const brand = props.match.params.brand;
              return <Login brand={brand && brand} />;
            }}
           
          />

       
          
          

   
   
  </Switch>
</div>
</Router>
  );
}

export default App;
