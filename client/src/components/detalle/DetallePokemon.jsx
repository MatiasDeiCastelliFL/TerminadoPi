import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { BuscarPokemonId, LimparPokemon } from "../../redux/actions/action";
import style from "styled-components";
import estilo from "../CrearPokemn/style.css"

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

export default function DetallePokemon() {
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(LimparPokemon())
    dispatch(BuscarPokemonId(id));
  }, []);

  const { pokemon,loading } = useSelector((e) => e.Poke);
  console.log(pokemon);

  const alturas = () => {
    let datos;

    if (pokemon.height < 10) {
      datos = "0." + pokemon.height;
    } else {
      datos = pokemon.height;
      datos = datos * 100;
      let valorNuevo = datos.toString();
      valorNuevo = valorNuevo.split("");
      valorNuevo = valorNuevo[0] + "." + valorNuevo[1] + valorNuevo[2];

      datos = valorNuevo;
    }

    console.log(datos);

    return datos ? datos : null;
  };
  return (

    <Form>
      <Titulo>{pokemon.name ? pokemon.name:"Obteniendo Informacion"}</Titulo>
      <FormContainer>
        <div>
          {pokemon.img?<Img src={pokemon.img} alt="imagen no encontrada"/>:"Cargando imagen"}
        </div>
        <div>
        <FormGroup>
            <FormInput
              type="text"
              id="pokedex"
              className="input"
              placeholder=" "
              value={pokemon.id ? pokemon.id : 0}
              readOnly={pokemon.id}
            />
            <Label htmlFor="pokedex" className="label">
              Pokedex:
            </Label>
            <FormLine className="form__line"></FormLine>
          </FormGroup>
          <FormGroup>
            <FormInput
              type="text"
              id="vida"
              className="input"
              placeholder=" "
              value={pokemon.hp ? pokemon.hp : 0}
              readOnly={pokemon.hp}
            />
            <Label htmlFor="vida" className="label">
              Vida:
            </Label>
            <FormLine className="form__line"></FormLine>
          </FormGroup>

          <FormGroup>
            <FormInput
              type="text"
              id="ataque"
              className="input"
              placeholder=" "
              value={pokemon.attack? pokemon.attack : 0}
              readOnly={pokemon.attack}

            />
            <Label htmlFor="ataque" className="label">
              Ataque:
            </Label>
            <FormLine className="form__line"></FormLine>
          </FormGroup>

          <FormGroup>
            <FormInput
              type="text"
              id="defensa"
              className="input"
              placeholder=" "
              value={pokemon.defense ? pokemon.defense : 0}
              readOnly={pokemon.defense}
            />
            <Label htmlFor="defensa" className="label">
              Defensa:
            </Label>
            <FormLine className="form__line"></FormLine>
          </FormGroup>
          <FormGroup>
            <FormInput
              type="text"
              id="velocidad"
              className="input"
              placeholder=" "
              value={pokemon.speed ? pokemon.speed : 0}
              readOnly={pokemon.speed}
            />
            <Label htmlFor="velocidad" className="label">
              Velocidad:
            </Label>
            <FormLine className="form__line"></FormLine>
          </FormGroup>

          <FormGroup>
            <FormInput
              type="text"
              id="altura"
              className="input"
              placeholder=" "
              value={pokemon.height ? alturas()+" M":0}
              readOnly={alturas()+" M"}
            />
            <Label htmlFor="altura" className="label">
              Altura:
            </Label>
            <FormLine className="form__line"></FormLine>
          </FormGroup>

          <FormGroup>
            <FormInput
              type="text"
              id="peso"
              className="input"
              placeholder=" "
              value={pokemon.weight ? pokemon.weight+" Kg" : 0}
              readOnly={pokemon.weight+" Kg"}
            />
            <Label htmlFor="peso" className="label">
              Peso:
            </Label>
            <FormLine className="form__line"></FormLine>
          </FormGroup>

          <FormGroup2>
            <FormInput2>

            {pokemon?.tipos && pokemon?.tipos?.map((elemento) =>
                
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

            </FormInput2>
            <Label className="label">
              Tipo
            </Label>
            
                
            

            
          </FormGroup2>
        </div>
        
      </FormContainer>
    </Form>
  );
}

const Titulo= style.h1`

    text-transform:capitalize

`

const Form = style.form`
    margin:auto;
    background-color:#ffc501;
    width:90%;
    max-width:60rem;
    padding:4.5rem 3rem;
    border-radius:10px;
    box-shadow:0 5px 10 px -5px rgb(0 0 0 / 30%);
`;




const Cartaimg2 = style.img`
    width:40%;
    max-width:60px;
    margin-top:1rem;
    margin-right:5px;
    
    
    
`;
const FormContainer = style.div`
    margin-top:5em;
    display:grid;
    grid-template-columns: repeat(2,1fr);
    gap:1.5rem;

`;

const FormGroup = style.div`

    position:relative;
    color:black;


`;

const FormGroup2 = style.div`

    position:absolute;

    color:black;


`;

const FormInput = style.input`
    width:100%;
    color:#706c6c;
    background:none;
    font-size:1rem;
    padding:.8em .3em;
    border:none;
    outline:none;
    border-bottom:1px solid black;
`;

const FormInput2 = style.p`
    width:100%;
    color:#706c6c;
    background:none;
    font-size:1rem;
    padding:.3rem .2rem;
    border:none;
    outline:none;
    
`;

const Label = style.label`

    color:#706c6c;
    cursor:pointer;
    position:absolute;
    top:0;
    left:5px;
    transform: translateY(10px)
    

`;



const FormLine = style.span`

    position:absolute;
    bottom:0;
    left:0;
    width:100%;
    height:1px;
    background-color: #2e4595;

`;

const Img = style.img`
    width:90%;
    max-width:400px;
`;
