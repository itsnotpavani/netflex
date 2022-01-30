const apikey="13d818f8c16513f1282c5e279443a3e4";

const requests={
  trending_shows:`/trending/tv/week?api_key=${apikey}`,
  trending_movies:`/trending/movie/week?api_key=${apikey}`,
  discover:`/discover/movie?api_key=${apikey}&sort_by=popularity.desc&language=en-US`,
  fetchdrama:`/discover/movie?api_key=${apikey}&with_genres=18&sort_by=popularity.desc`,
  fetchaction:`/discover/movie?api_key=${apikey}&with_genres=28&sort_by=popularity.desc`,
  fetchanimation:`/discover/movie?api_key=${apikey}&with_genres=16&sort_by=popularity.desc`,
  fetchcomedy:`/discover/movie?api_key=${apikey}&with_genres=35&sort_by=popularity.desc`,
  fetchcrime:`/discover/movie?api_key=${apikey}&with_genres=80&sort_by=popularity.desc`,
  fetchfamily:`/discover/movie?api_key=${apikey}&with_genres=10751&sort_by=popularity.desc`,
  fetchfantasy:`/discover/movie?api_key=${apikey}&with_genres=14&sort_by=popularity.desc`,
  fetchhorror:`/discover/movie?api_key=${apikey}&with_genres=27&sort_by=popularity.desc`,
  fetchromance:`/discover/movie?api_key=${apikey}&with_genres=10749&sort_by=popularity.desc`,
  fetchhistory:`/discover/movie?api_key=${apikey}&with_genres=36&sort_by=popularity.desc`,
  fetchmystery:`/discover/movie?api_key=${apikey}&with_genres=9648&sort_by=popularity.desc`,
  fetchscience:`/discover/movie?api_key=${apikey}&with_genres=878&sort_by=popularity.desc`,
  fetchwar:`/discover/movie?api_key=${apikey}&with_genres=10752&sort_by=popularity.desc`,
  toprated:`movie/top_rated?api_key=${apikey}&language=en-US`


}

export default requests;
