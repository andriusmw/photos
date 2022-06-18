export const SearchPhotosForm = () => {
    return (
        <form>
            <label htmlFor="search">Buscador: </label>
            <input id="search" name="search" type="search" />

            <button type="Submit">Buscar</button>
        </form>
    )
}