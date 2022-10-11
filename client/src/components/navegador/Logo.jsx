import React from 'react';
import PokemonUnite from "../../img/pngwing.com.png";
import style from "styled-components"
import style2 from "./style.module.css"
const Logo = () => {
    return (
        <div className={style2.Tam}>
           <div>
                <Img src={PokemonUnite} alt="Imagen no encontrada" />
           </div>
        </div>
    );
}



const Img=style.img`
    background-repeat: no-repeat;
    max-width:20rem



`

export default Logo;
