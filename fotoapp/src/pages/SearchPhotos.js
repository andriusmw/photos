import {useState} from "react"
import { SearchPhotosForm } from "../components/SearchPhotosForm"
import { SearchResults } from "../components/SearchResults"


export const SearchPhotos = () => {
const [SearchResults2, setSearchResults2] = useState([]);

    return (
        <section id="search-photos" >
            <h2>SearchPhotos</h2>

            <SearchPhotosForm setSearchResults2={setSearchResults2} />  
           <SearchResults photos={SearchResults2} />
        </section>
    )
}

//SearchPhotosForm hace una búsqueda con un fetch y guarda los resultados en setSearchResults y lo ejecuta para cambiar el estado de SearchResults. Luego le pasamos el ESTADO SearchResults al COMPONENTE SearchResults que hace un map del array y nos lista las fotos.