import { Photo } from "./Photo"


export const SearchResults = ({photos, addToFavorites}) => {
    return (
        <ul className="photos-list" > {photos.map((photo) => {
             return( 
                    <li key={photo.id} >
                       <Photo photo={photo} addToFavorites={addToFavorites} />
                    </li>
                    )
    })} </ul>)
}