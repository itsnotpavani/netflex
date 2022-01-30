import React,{useState,useEffect} from 'react';
import axios from "./axios";
import "./row.css";
import Youtube from "react-youtube";
import movieTrailer from "movie-trailer";

const imgBaseURL="https://image.tmdb.org/t/p/w500/";

function Row({title,fetchURL,bigtile})
{ const[movies,setMovies]=useState([]);
  const [trailerUrl,setTrailerUrl]=useState("");
  //A snippet of code which runs based on a specific condition

  useEffect(()=>{
    async function fetchData(){
      const request=await axios.get(fetchURL);
      setMovies(request.data.results);
       return request;
    }

    fetchData();


  },[fetchURL]);

  const opts = {
      height: '390',
      width: '640',
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1,
      },
    };
   const handleClick=(movie)=>{
     if(trailerUrl)
     {
       setTrailerUrl("");
     }
     else
      {
        movieTrailer(movie?.title||movie?.original_name||movie?.name).then((url)=>{

          const urlParams=new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParams.get('v'));
        }).catch((error)=>{console.log(error);});
      }
   };
   console.log(trailerUrl);
   //if [],run once when the row loads ,and dont run again
  //if [movies] ,run once when the row loads and run again when movies changes .so we are setting a dependency here
  return(
    <div className="row">
     <h2>{title}</h2>
     <div className="row_posters">
       {
         movies.map((movie)=>(
           <img key={movie.id} onClick={()=>{handleClick(movie)}} className={`row_poster ${bigtile && "row_poster_large"}`} src={`${imgBaseURL}${bigtile?movie.backdrop_path:movie.poster_path}`} alt={movie.title}/>))
       }
     </div>

     {trailerUrl && <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailerUrl}`}></iframe>}

    </div>
  );
//<Youtube videoId={trailerUrl} opts={opts}/>
  //we used key as an optimization whenever some poster changes we wont have to render the entire row but only that specific poster
}

export default Row;
