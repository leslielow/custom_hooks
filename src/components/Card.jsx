import { useEffect, useState } from "react";
import getPersonajesApi from "../services/personajesApi";

const Card = (numero) => {

    const [personajeApi, setPersonajeApi] = useState({});
  
    useEffect(() => {
        const personaje = getPersonajesApi(numero.numero).then(value => {
            // console.log("VALUE", value);
            setPersonajeApi(value)
        });
        
    }, [numero.numero] ); 

    console.log( "personajeApi",personajeApi);

    return (
        <div>
            <img src={personajeApi.image} alt={personajeApi.name} />
        </div>
    )
}

export default Card;