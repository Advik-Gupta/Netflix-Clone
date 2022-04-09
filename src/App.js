import React from 'react';
import './App.css';
import Banner from './components/Banner';
import Row from './components/Row';
import Navbar from './components/Navbar';
import requests from './requests.js';

function App() {
	return (
		<div className="app">
			<Navbar />
			<Banner />
			<Row key={1} title="Netflix Originals" fetchUrl={requests.fetchNetflixOriginals} isLargeRow />
			<Row key={2} title="Trending Now" fetchUrl={requests.fetchTrending} />
			<Row key={3} title="Top Rated" fetchUrl={requests.fetchTopRated} />
			<Row key={4} title="Action Movies" fetchUrl={requests.fetchActionMovies} />
			<Row key={5} title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
			<Row key={6} title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
			<Row key={7} title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
			<Row key={8} title="Documentaries Movies" fetchUrl={requests.fetchDocumentaries} />
		</div>
	);
}

export default App;
