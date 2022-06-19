export const SearchPhotosForm = ({setSearchResults2}) => {
    const handleSubmit = async (event) => {
        try {
            event.preventDefault();
          
          const query = event.target.elements.search.value;

          const res = await  fetch(`https://api.pexels.com/v1/search?query=${query}&locale=es-ES&per_page=80`,
            {
                headers: {
                    Authorization: process.env.REACT_APP_API_KEY,
                },
            }
           );

            console.log(res)
            //el fetch devuelve un error 500 y por eso la respuesta no se puede parsear a json porque no nos devuelve un json con un
            //array, sino que nos devuelve una respuesta. ¿problema del servidor? la llamada antes iba bien, de hecho se realiza y nos da
            //una respuesta detipo 500 que es error interno del servior o que ha roto por pedirle algo para lo que no está preparado,
            //pero antes iba.
            console.log(res.responseText)
            const results = await res.json()
            console.log(results);
            setSearchResults2(results.photos) //cambia el estado con los resultados de la búsqueda

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