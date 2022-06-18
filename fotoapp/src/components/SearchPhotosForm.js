export const SearchPhotosForm = () => {
    const handleSubmit = (event) => {
        try {
            event.preventDefault();
            console.log("hola")
        } catch(error) {
            console.error(error.message);
        }
        
    };

    return (
        <form onSubmit={handleSubmit} >
            <label htmlFor="search">Buscador: </label>
            <input id="search" name="search" type="search" />

            <button type="Submit">Buscar</button>
        </form>
    )
}