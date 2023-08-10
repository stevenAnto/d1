import { useEffect, useState } from "react";
import { getOnly } from "../api/jspost";

export function TarjetaComentario(props){
    let com= props.com;
    const fecha = new Date(com.updated_at);
    const fechaFormateada = fecha.toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric',hour: 'numeric', minute: 'numeric' });
    
    const [datos, setDatos]= useState([]);
    useEffect (() => {
      async function loadDatos(){
        const res = await getOnly('user', com.user);
        setDatos(res.data);
      }
      loadDatos();
    }, []);

    return(
        <div class="comment">
            <div class="fotoPerfil">
                <img src={datos.img} class="fotoPerfilTarjeta" alt="foto de Usuario"/>
            </div>
            <div class="NombreFecha">
                  <div class="nombre">
                    {datos.username}
                  </div>
                  <div class="fechaPublicacion">
                    {fechaFormateada}
                  </div>
            </div>
            <div>
                {com.content}
            </div>
        </div>
    );
}