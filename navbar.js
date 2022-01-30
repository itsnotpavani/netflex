import React,{useEffect,useState} from 'react';
import './navbar.css';

function Nav()
{ const[show,handleShow]=useState(false);
  useEffect(()=>{
     window.addEventListener("scroll",()=>
   {
     if(window.scrollY>100)
     {
       handleShow(true);
       
     }
     else
      handleShow(false);
   });

 });
  return(
    <div className={`Nav ${show && "black_nav"}`}>
    <img className="nav_logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/800px-Logonetflix.png"/>
    <img className="nav_avatar" src="https://png.pngitem.com/pimgs/s/146-1468281_profile-icon-png-transparent-profile-picture-icon-png.png"/>
    </div>
  );
}
export default Nav;
