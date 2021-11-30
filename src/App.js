import Banner from "./components/Banner";
import Header from "./components/Header";
import Row from "./components/Row";
import requests from './requests'


function App() {
  return (
    <div className="bg-gray-900 h-full">
      <Header />
      <Banner fetchUrl={requests.fetchNetflixOriginals} />
      <Row isLargeRow title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals} />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
