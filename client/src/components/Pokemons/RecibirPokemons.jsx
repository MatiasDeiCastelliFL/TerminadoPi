import React from "react";
import style from "styled-components";
import fire from "../../img/icons/Pokémon_Fire_Type_Icon.svg.png";
import water from "../../img/icons/Pokémon_Water_Type_Icon.svg.png";
import bug from "../../img/icons/Pokémon_Bug_Type_Icon.svg.png";
import lucha from "../../img/icons/Pokémon_Fighting_Type_Icon.svg.png";
import grass from "../../img/icons/1200px-Pokémon_Grass_Type_Icon.svg.png";

import dragon from "../../img/icons/Pokémon_Dragon_Type_Icon.svg.png";
import Electrico from "../../img/icons/1024px-Pokémon_Electric_Type_Icon.svg.png";
import flying from "../../img/icons/Pokémon_Flying_Type_Icon.svg.png";
import Ghost from "../../img/icons/1024px-Pokémon_Ghost_Type_Icon.svg.png";
import Ground from "../../img/icons/Pokémon_Ground_Type_Icon.svg.png";
import Hada from "../../img/icons/Pokémon_Fairy_Type_Icon.svg.png";
import Ice from "../../img/icons/Pokémon_Ice_Type_Icon.svg.png";
import Normal from "../../img/icons/1024px-Pokémon_Normal_Type_Icon.svg.png";
import Poison from "../../img/icons/1200px-Pokémon_Poison_Type_Icon.svg.png";
import Psiquico from "../../img/icons/1200px-Pokémon_Psychic_Type_Icon.svg.png";
import Rock from "../../img/icons/1200px-Pokémon_Rock_Type_Icon.svg.png";
import Shadow from "../../img/icons/Descargada/black-and-white-dark-explorers-pokemon-set-symbol.png";
import Steel from "../../img/icons/Pokémon_Steel_Type_Icon.svg.png";
import Uknown from "../../img/icons/png-clipart-pokemon-diamond-and-pearl-unown-pokedex-poke-ball-others-text-logo.png";
import dark from "../../img/icons/1024px-Pokémon_Dark_Type_Icon.svg.png";
import { Link } from "react-router-dom";
const RecibirPokemons = ( {id,name, img, tipo, weight, ataque,elemento} ) => {
  return (
    <div>
      <Carta>
      <Link to={`/pokemon/detalle/${id}`}>
        <Letra>{name}</Letra>
      </Link>
        
        <Cartaimg src={img} alt="Imagen no encontrada" />
        <Flex>
          <div>
            <Letra>Peso</Letra>
          </div>
          <div>
            <Letra>Tipo</Letra>
          </div>
          <div>
            <Letra>Ataque</Letra>
          </div>
        </Flex>

        <Tit>
          <Flex2>
            <div>
              <h2>{`${weight} kg`}</h2>
            </div>

            <div>
            {tipo && tipo.map((elemento) =>
                  elemento === "fire" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={fire}
                      alt="imagen no encotrada"
                    />): elemento === "water" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={water}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "normal" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Normal}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "fighting" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={lucha}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "flying" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={flying}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "poison" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Poison}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "ground" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Ground}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "rock" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Rock}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "bug" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={bug}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "ghost" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Ghost}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "steel" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Steel}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "grass" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={grass}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "electric" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Electrico}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "psychic" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Psiquico}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "ice" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Ice}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "dragon" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={dragon}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "dark" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={dark}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "fairy" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Hada}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "unknown" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Uknown}
                      alt="imagen no encotrada"
                    />
                  ) : elemento === "shadow" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Shadow}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "fire" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={fire}
                      alt="imagen no encotrada"
                    />): elemento.name === "water" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={water}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "normal" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Normal}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "fighting" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={lucha}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "flying" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={flying}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "poison" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Poison}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "ground" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Ground}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "rock" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Rock}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "bug" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={bug}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "ghost" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Ghost}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "steel" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Steel}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "grass" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={grass}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "electric" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Electrico}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "psychic" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Psiquico}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "ice" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Ice}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "dragon" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={dragon}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "dark" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={dark}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "fairy" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Hada}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name === "unknown" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Uknown}
                      alt="imagen no encotrada"
                    />
                  ) : elemento.name=== "shadow" ? (
                    <Cartaimg2
                      key={crypto.randomUUID()}
                      src={Shadow}
                      alt="imagen no encotrada"
                    />
                  ) :"Tipo desconocido"
                )}
              
                     
            </div>

            <div>
              <h2>{ataque}</h2>
            </div>
          </Flex2>
        </Tit>
      </Carta>
    </div>
  );
};

const Flex = style.div`
    display:flex;
    justify-content: space-around;
    align-items: center;
    margin-left:1rem;
    
`;
const Letra = style.div`
    text-transform: capitalize;
    font-family: 'Roboto Slab', serif;
    margin-top:2rem;
    font-size:1.5rem;
    

`;
const Carta = style.div`
    border:0.1rem solid black;
    border-radius:4rem;
    background:white;
    
`;
const Cartaimg = style.img`
    width:30%;
    max-width:300px;
    
`;

const Tit = style.div`

    display:flex;
    justify-content: center;
    align-items: center;
    margin-left:8px;
    margin-top:-0.2rem
    text-aling:center;
    
`;
const Cartaimg2 = style.img`
    max-width:20%;
    margin-top:1rem;
    
    margin-bottom:1rem;
`;
const Flex2 = style.div`
    
    display:grid;
    grid-template-columns:repeat(3,1fr);
    
    

`;

export default RecibirPokemons;
