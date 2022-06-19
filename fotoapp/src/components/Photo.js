


export const Photo = ({photo, addToFavorites}) => {


    return (
        <>
            <img src={photo.src.small} alt="resultado búsqueda" />
            <button onClick={() => {
                addToFavorites(photo);
            }} >Add to favorites</button>
        </>
    )
}