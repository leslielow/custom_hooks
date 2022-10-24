import { useEffect, useState } from "react";
import getPersonajesApi from "../services/personajesApi";

const Card = (numero) => {

    const [personajeApi, setPersonajeApi] = useState({});
  
    useEffect(() => {
        const personaje = getPersonajesApi(numero.numero);
        
        console.log(personaje);
        
        setPersonajeApi(personaje)
    }, [numero.numero] ); 

    // console.log( "personajeApi",personajeApi);

    return (
        <div>
            <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="Rick" />
            {/* <img src={personajeApi.image} alt="Rick" /> */}
        </div>
    )
}

export default Card;