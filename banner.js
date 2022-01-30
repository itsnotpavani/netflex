import React,{useState,useEffect} from 'react';
import req from './request';
import axios from './axios';
import './banner.css';
const imgBaseURL="https://image.tmdb.org/t/p/w500/";
function Banner()
{ const[movie,setmovie]=useState([]);
  useEffect(()=>{
    async function fetchData()
    {
    const request=await axios.get(req.discover);
    setmovie(request.data.results[Math.floor((Math.random()*(request.data.results.length))-1)]);

    return request;

  }


  fetchData();


},[]);
function truncate(str,n){
  return str?.length>n?str.substr(0,n-1)+"...":str;
}
  return(
    <header className="banner" style={{backgroundImage:`url(${imgBaseURL}${movie?.backdrop_path})`,
    backgroundSize:"cover",
    backgroundPosition:"center center",

  }}>
    <div className="banner_details">
     <h1>{movie?.title || movie?.original_name || movie?.name}</h1>
     <div class="buttons">
      <button class="button">Play</button>
      <button class="button">My List</button>
     </div>
     <p>{truncate(movie?.overview,220)}</p>
    </div>
    <div class="shadow">
    </div>

  </header>
  );

}

export default Banner;
