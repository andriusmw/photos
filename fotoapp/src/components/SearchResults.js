export const SearchResults = ({photos}) => {
    return (
        <ul className="photos-list" > {photos.map((photo) => {
             return( 
                    <li key={photo.id} >
                         <img src={photo.src.small} alt="" />
                    </li>)
    })} </ul>)
}