const urlGetPersonajes = `https://rickandmortyapi.com/api/character/`;

const getPersonajesApi = async(numero) => {
    let data = {};
    try{
    const personajes = await fetch(`${urlGetPersonajes}${numero}`);   
	 data = await personajes.json()
     .then((result) => {
        return result
      });
    
    } catch(e) {
        console.log(e);
    }
    // console.log("DATA", data);
    return data
}

export default getPersonajesApi;
