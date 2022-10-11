import React, { useEffect, useState } from "react";
import style from "styled-components";
import axios from "axios";
import estilos from "./style.css";
import ima from "../../img/pokemon.png";
import {
  AgregarTodosTipo
} from "../../redux/actions/action";
import { useDispatch, useSelector } from "react-redux";
  

const CrearPoke = () => {
  const dispatch = useDispatch();
  const { tipo } = useSelector((elemento) => elemento.Poke.tipos);

  let errores = [];
  
  const [mensajes, setMensajes] = useState("")


  const datosEstado = {
    name: "",
    hp: "",
    attack: "",
    defense: "",
    speed: "",
    height: "",
    weight: "",
    img: "",
    tipo: [],
  };



  const [Dato, setDato] = useState(datosEstado);
  const handleChange = (e) => {
    setDato((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const enviar = async (e) => {
    e.preventDefault();

    errores.slice(0, errores.length);



    
    

      if(Dato.hp !== "" && Dato.attack !== "" && Dato.defense !=="" && Dato.speed !== "" && Dato.height !== "" && Dato.weight !== "" && Dato.img !== ""  && Dato.name !==""){
       

         if(Number(Dato.hp) && Number(Dato.attack) && Number(Dato.defense) && Number(Dato.speed) && Number(Dato.height) && Number(Dato.weight) ){
          const datos= await axios.post("http://localhost:3001/pokemons", Dato);
          
          const {data:{data}}=datos;
          console.log(data)
          if (data === "Creado exito") {
            setMensajes("Pokemon Creado correctamente")
            
         
          } else {
          
            setMensajes("El nombre del pokemon ya se encuentra registrado")
          }
        }else{
      
          setMensajes("Ingreso letras en los campo de vida o velocidad o ataque o defensa o altura o peso ")
           
        }
        
      }else{
        setMensajes("Complete los campo requeridos")
           
     
      }
      
    
    

    

    //

    // console.log(data)
  };
  console.log(mensajes)


  const handleOnChange = (evento) => {
    if (Dato.tipo.includes(evento.target.value)) {
      setDato({
        ...Dato,
        tipo: Dato.tipo.filter((e) => e !== evento.target.value),
      });
    } else {
      setDato({
        ...Dato,
        tipo: [...Dato.tipo, evento.target.value],
      });
    }
  };
  useEffect(() => {
    dispatch(AgregarTodosTipo());
  }, []);

  return (
    <div>
      
      { mensajes  === "Pokemon Creado correctamente" && <Correcto>Pokemon Creado correctamente</Correcto>}
      { mensajes ==="El nombre del pokemon ya se encuentra registrado" && <Errores>El nombre del pokemon ya existe</Errores>}
      { mensajes === "Complete los campo requeridos" && <Errores>Complete los campos</Errores>}
      { mensajes === "Ingreso letras en los campo de vida o velocidad o ataque o defensa o altura o peso " && <Errores>Ingreso letras en los campo de vida o velocidad o ataque o defensa o altura o peso borrelo</Errores>}

      {/* mensaje === "El nombre del pokemon ya se encuentra registrado"? <Errores>El nombre del pokemon ya existe</Errores>:mensaje === "Complete los campo requeridos" ? <Errores>Complete los campos</Errores>: mensaje= "hola"} */}
      <Form onSubmit={(e) => enviar(e)}>
      
        <FormContainer>
          <div>
            <Img src={ima} alt="imagen no encontrada" />
          </div>
          <div>
            <FormGroup>
              <FormInput
                type="text"
                id="name"
                className="input "
                placeholder=" "
                name="name"
                value={Dato.name}
                onChange={handleChange}
               
              />
              <Label htmlFor="name" className="label">
                Nombre:
              </Label>

              <FormLine className="form__line"></FormLine>
              {Dato.name === "" && <ErroresInput>Ingrese el nombre</ErroresInput>}
            
            </FormGroup>
            <FormGroup>
              <FormInput
                type="text"
                id="vida"
                name="hp"
                value={Dato.hp}
                onChange={handleChange}
                className="input"
                placeholder=" "
              />
              <Label htmlFor="vida" className="label">
                Vida:
              </Label>
              <FormLine className="form__line"></FormLine>
              {Dato.hp === "" && (
              <ErroresInput>Ingrese la vida</ErroresInput>
            )}
            </FormGroup>

            <FormGroup>
              <FormInput
                type="text"
                id="ataque"
                className="input"
                name="attack"
                value={Dato.attack}
                onChange={handleChange}
                placeholder=" "
              />
              <Label htmlFor="ataque" className="label">
                Ataque:
              </Label>

              <FormLine className="form__line"></FormLine>
              {Dato.attack === "" && (
              <ErroresInput>Ingrese el ataque</ErroresInput>
            )}

            </FormGroup>

            <FormGroup>
              <FormInput
                type="text"
                id="defensa"
                className="input"
                name="defense"
                value={Dato.defense}
                placeholder=" "
                onChange={handleChange}
              />
              <Label htmlFor="defensa" className="label">
                Defensa:
              </Label>
              <FormLine className="form__line"></FormLine>
              {Dato.defense === "" && (
              <ErroresInput>Ingrese la defensa</ErroresInput>
            )}
            </FormGroup>
            <FormGroup>
              <FormInput
                type="text"
                id="velocidad"
                className="input"
                name="speed"
                value={Dato.speed}
                placeholder=" "
                onChange={handleChange}
              />
              <Label htmlFor="velocidad" className="label">
                Velocidad:
              </Label>
              <FormLine className="form__line"></FormLine>
              {Dato.speed === "" && (
              <ErroresInput>Ingrese la velocidad</ErroresInput>
            )}

            </FormGroup>

            <FormGroup>
              <FormInput
                type="text"
                id="altura"
                className="input"
                name="height"
                value={Dato.height}
                placeholder=" "
                onChange={handleChange}
              />
              <Label htmlFor="altura" className="label">
                Altura:
              </Label>
              <FormLine className="form__line"></FormLine>
              {Dato.height === "" && (
              <ErroresInput>Ingrese la altura</ErroresInput>
            )}
            </FormGroup>

            <FormGroup>
              <FormInput
                type="text"
                id="peso"
                className="input"
                name="weight"
                value={Dato.weight}
                placeholder=" "
                onChange={handleChange}
              />
              <Label htmlFor="peso" className="label">
                Peso:
              </Label>

              <FormLine className="form__line"></FormLine>
              {Dato.weight === "" && (
              <ErroresInput>Ingrese el peso</ErroresInput>
            )}


            </FormGroup>

            <FormGroup>
              <FormInput
                type="text"
                id="ima"
                className="input"
                name="img"
                value={Dato.img}
                placeholder=" "
                onChange={handleChange}
              />
              <Label htmlFor="ima" className="label">
                Imagen:
              </Label>
              <FormLine className="form__line"></FormLine>
              {Dato.img === "" && (
              <ErroresInput>Ingrese la imagen</ErroresInput>
            )}
            </FormGroup>
            <Label2 htmlFor="altura" className="label">
              Tipo
            </Label2>
            <Check>
              {tipo?.map((elemento) => (
                <div key={elemento.id}>
                  <input
                    type={"checkbox"}
                    name="tipo"
                    value={elemento.name}
                    onChange={handleOnChange}
                  />
                  {elemento.name[0].toUpperCase() + elemento.name.slice(1)}
                </div>
              ))}
            </Check>
            {Dato.tipo.length === 0 && (
              <ErroresInput>
                Selecciona 1 tipo por lo menos
              </ErroresInput>
            )}
            
          </div>

          <FormSubmit type="submit" value="Crear Pokemon" />
        </FormContainer>
      </Form>
    </div>
  );
};

const Form = style.form`

margin:auto;
    background-color:#ffc501;
    width:90%;
    max-width:60rem;
    padding:4.5rem 3rem;
    border-radius:10px;
    box-shadow:0 5px 10 px -5px rgb(0 0 0 / 30%);
    
   

`;

const ErroresInput = style.p`
  
  
  height:20px;
  width:50%;
  max-width:200px;
  font-weight:100;
  
  -webkit-text-stroke: 1px red;
  
  
`;

const Titulo = style.h1`
    text-transform:capitalize
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

const FormInput = style.input`
    width:100%;
    color:#706c6c;
    background:none;
    font.size:1rem;
    padding:.6rem .3rem;
    border:none;
    outline:none;
    border-bottom:1px solid black;
`;

const Label = style.label`
x
    color:#706c6c;
    cursor:pointer;
    position:absolute;
    top:0;
    left:5px;
    transform: translateY(10px)
    

`;

const FormSubmit = style.input`
    background-color: #2e4595;
    padding:.8rem 0;
    font-weight:300;
    font-size;1rem;
    border:none;
    border-radius:.5em;
    color: white;
    cursor:pointer
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

const Check = style.div`
   display:grid;
   grid-template-columns:repeat(4,1fr);
   justify-items:left;
`;

const Label2 = style.div`
    margin-bottom:1rem;
    margin-top:1rem;
`;

const Correcto = style.h2`

color:green;
font-size:2rem;
`;

const Errores = style.h2`

color:red;
font-size:2rem;
`;


export default CrearPoke;
