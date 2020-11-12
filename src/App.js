import  React from 'react'; 
import Row from './Row.js';
import './App.css';
import requests from './requests.js';
import Banner from './Banner.js';
import Nav from './nav';

function App() {
  return (
    <div className="app">
    
     <Nav/>
     <Banner/>
     <Row 
     title = "NETFLIX ORIGINALS" 
     fetchUrl={requests.fetchNetflixOriginals} 
     isLargeRow
     />
     <Row title = "Trending Now" fetchUrl={requests.fetchTrending}/>
     <Row title = "Top Rated Movies" fetchUrl={requests.fetchTopRated}/>
     <Row title = "Action Movies" fetchUrl={requests.fetchActionMovies}/>
     <Row title = "Comedy Movies" fetchUrl={requests.fetchComedyMovies}/>
     <Row title = "Horror Movies" fetchUrl={requests.fetchHorrorMovies}/>
     <Row title = "Romance Movies" fetchUrl={requests.fetchRomanceMovies}/>
     <Row title = "Documentaries" fetchUrl={requests.fetchDocumentaries}/>
    </div>
  );
}

export default App;
 