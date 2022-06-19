import logo from './logo.svg';
import './App.css';
import {SearchPhotos} from "./pages/SearchPhotos"
import { useState, useEffect } from 'react';
import {MyPhotos} from "./pages/Myphotos"

function App() {
  const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
  const [favorites, setFavorites] = useState(storedFavorites);
  const [showingPage, setShowingPage] = useState("search-photos");

  console.log(storedFavorites)  ;

useEffect(() => {
 localStorage.setItem("favorites", JSON.stringify(favorites));
 //Guarda en json como texto el estado favorites y lo pasa a localstorage

}, [favorites]);



  const addToFavorites = (photo) => {
    setFavorites([...favorites, photo]);  
}



  return (
    <div className="App">
      <header>
        <h1>Photo Catalog</h1>
        <nav>
          <ul>
            <li><button onClick={() => {
              setShowingPage("my-photos")
            }} >My Photos</button></li>

            <li><button onClick={() => {
              setShowingPage("search-photos")
            }} >Search new photos</button></li>
          </ul>
        </nav>
      </header>
      <main>
         {showingPage === "search-photos" && ( <SearchPhotos addToFavorites={addToFavorites} /> )}
         {showingPage === "my-photos" && (  <MyPhotos/> )}
         
      </main>
      <footer>
        <p>Hack a Boss 2022@</p>
      </footer>
    </div>
  );
}

export default App;
