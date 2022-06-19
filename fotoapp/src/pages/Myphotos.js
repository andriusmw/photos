import { PhotosList } from "../components/PhotosList";

export const MyPhotos = ({favorites, removeFromFavorites}) => {
    return (
    <section>
        <h2>MyPhotos</h2>
        <PhotosList photos={favorites} removeFromFavorites={removeFromFavorites}  />
    </section>
            )
};