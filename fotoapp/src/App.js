import logo from './logo.svg';
import './App.css';
import {SearchPhotos} from "./pages/SearchPhotos"
import { useState } from 'react';

function App() {
  const [favorites, setFavorites] = useState([]);

  console.log(favorites)  ;
  const addToFavorites = (photo) => {
    setFavorites([...favorites, photo]);  
}



  return (
    <div className="App">
      <header>
        <h1>Photo Catalog</h1>
        <nav>
          <ul>
            <li>My Photos</li>
            <li>Search new photos</li>
          </ul>
        </nav>
      </header>
      <main>
          <SearchPhotos addToFavorites={addToFavorites} ></SearchPhotos>
      </main>
      <footer>
        <p>Hack a Boss 2022@</p>
      </footer>
    </div>
  );
}

export default App;
