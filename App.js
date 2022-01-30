
import './App.css';
import requests from './request';
import Row from './row';
import Banner from './banner';
import Navbar from './navbar';
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Banner/>
      <br/>
      <br/>
      <br/>

      <Row title="NETFLIX ORIGINALS" fetchURL={requests.discover} bigtile/>
      <Row title="Top Rated" fetchURL={requests.toprated}/>
      <Row title="Trending Shows" fetchURL={requests.trending_shows}/>
      <Row title="Trending Movies" fetchURL={requests.trending_movies}/>
      <Row title="Drama" fetchURL={requests.fetchdrama}/>
      <Row title="Action" fetchURL={requests.fetchaction}/>
      <Row title="Animation" fetchURL={requests.fetchanimation}/>
      <Row title="Comedy" fetchURL={requests.fetchcomedy}/>
      <Row title="Crime" fetchURL={requests.fetchcrime}/>
      <Row title="Family" fetchURL={requests.fetchfamily}/>
      <Row title="Fantasy" fetchURL={requests.fetchfantasy}/>
      <Row title="Horror" fetchURL={requests.fetchhorror}/>
      <Row title="Romance" fetchURL={requests.fetchromance}/>
      <Row title="Mystery" fetchURL={requests.fetchmystery}/>
      <Row title="History" fetchURL={requests.fetchhistory}/>
      <Row title="Science Fiction" fetchURL={requests.fetchscience}/>
      <Row title="War" fetchURL={requests.fetchwar}/>



    </div>
  );
}

export default App;
