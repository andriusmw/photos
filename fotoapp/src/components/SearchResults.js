export const SearchResults = ({photos}) => {
    return (
        <ul className="photos-list" > {photos.map((photo) => {
             return( 
                    <li>
                         <img src={photo.src.small} alt="" />
                    </li>)
    })} </ul>)
}