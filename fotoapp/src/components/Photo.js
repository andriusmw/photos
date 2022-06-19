


export const Photo = ({photo}) => {
    return (
        <>
            <img src={photo.src.small} alt="resultado búsqueda" />
            <button>Add to favorites</button>
        </>
    )
}