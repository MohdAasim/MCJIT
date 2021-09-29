import React,{useContext} from "react";
import { faGripLines } from "@fortawesome/free-solid-svg-icons";
import { Link,useHistory } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./NavBar.css";
import { Navtype } from "../App";


const NaviBar = () => {
  const history = useHistory()
  const context = useContext(Navtype)
  const {isloggedin,setntype} = context
   const handleclick =(e)=>{
     if(isloggedin===true){
      setntype(e.target.name)
    }else{
      if(e.target.name==='Favourites'){
        history.push('/signin')
      }else{
        setntype(e.target.name)
      }
    }
  }
  return (
  <nav className="navbar navbar-expand-lg bg-light ml-4 mr-4 p-4">
  <Link to='/'>Home</Link>
  <button className="navbar-toggler " type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon bg-info rounded-circle"><FontAwesomeIcon className='mt-1 text-light' icon={faGripLines}/></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <div className="justify-content-end">   
  <Link to="/signin">
  <button className="main-button ml-4" name='Signin' >SignIn</button>
  </Link>
  <Link to="/">
  <button className="main-button ml-4" onClick={handleclick} name="Popular">Popular</button>
  </Link>
  <Link to="/">
  <button className="main-button ml-4" onClick={handleclick} name='Latest'>Latest</button>
  </Link>
  <Link to="/">
  <button className="main-button ml-4" onClick={handleclick} name='Favourites'>Favourites</button>
  </Link>
      </div>
  </div>
</nav>
  )
}
export default NaviBar;
