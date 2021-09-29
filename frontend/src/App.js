import './App.css';
import { createContext, useState } from 'react';
import { Route, Switch } from "react-router-dom";
import SignUp from './components/adminAuth/SignUp';
import SignIn from './components/adminAuth/SignIn'
import CardnTime from './components/cards/CardnTime'
import NaviBar from './Navigation/NaviBar';
const Navtype = createContext()

function App() {
const [ntype,setntype] = useState('Popular')
const [isloggedin,setisloggedin] = useState(false)
const value = {ntype,setntype,isloggedin,setisloggedin}
  return (
    <div className="app-content">
    <Navtype.Provider value={value}>
    <NaviBar />
    </Navtype.Provider>
    <div className="main-content-area">
    <Switch>
     <Navtype.Provider value={value}>
      <Route exact path='/' component={CardnTime}/>
      <Route path='/signin' component={SignIn}/>
      <Route path='/signup' component={SignUp}/>
      </Navtype.Provider>
    </Switch>
    </div>
    </div>
  );
}

export default App;
export {Navtype}
