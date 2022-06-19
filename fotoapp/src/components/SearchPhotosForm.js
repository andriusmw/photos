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