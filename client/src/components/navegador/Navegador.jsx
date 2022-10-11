import React, { useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { Link } from 'react-router-dom';
import style from "styled-components"
import { AgregarTodosPokemon, BuscarNombrePokemon, datoFiltrado, datoObtenerCreado, datoOrdenar} from '../../redux/actions/action';

export default function Navegador() {
    const dispatch= useDispatch();
    const {tipo}=useSelector(elemento=>elemento.Poke.tipos)
    const desactiva=useSelector(elemento=>elemento.Poke.desactiva)
    const [select, setSelect] = useState(true)
    let busqueda;
    const tomarValorTexto=(evento)=>{
        if(evento.target.value===""){
            dispatch(AgregarTodosPokemon())
        }else{
             busqueda=evento.target.value;
             
        }

        evento.target.value="";
    }
    const obtenerTipo = (evento)=>{
      
        busqueda="";

        if(desactiva==="Filtrar"){
            setSelect(false)
        }
        dispatch(datoFiltrado(evento.target.value))
        
    }
    const obtenerOrden = (evento)=>{
       dispatch(datoOrdenar(evento.target.value));

       busqueda="";
    }
    const obtenerFiltro = (evento)=>{

        busqueda="";

        if(evento.target.value==="Filtrar"){

            //defino o selecciona la primera opcion del select
            
        
    
        setSelect(true)
   }else{
        setSelect(false)
        dispatch(datoObtenerCreado(evento.target.value))  
   }
         
      
    }
    return (

    <>
           <Color>
                <Flex>
                    <div>
                        <Link to="/home">
                            <Boton>HOME</Boton>
                        </Link>
                        
                    </div>
                    <div>
                        <Link to={"/CrearPokemon"}>
                            <Boton>CREAR POKEMON</Boton>
                        </Link>
                        
                    </div>
                </Flex>

                <Marco>
                <Margen>
                    <Label>FILTRO Y ORDENAMIENTO</Label>
                </Margen>
                
                    <Flex3>
               

                        <Marco>
                            <Forma id='select' onChange={e=>obtenerFiltro(e)} >
                                <option  value="Filtrar">FILTRAR POR</option>
                                <option value="All">All</option>
                                <option value="MisPokemon">Mis pokemones</option>
                                <option value="Existente">Api</option>
                            </Forma>
                        </Marco> 

                        <Marco>
                        
                            <Forma disabled={select} onChange={e=>obtenerOrden(e)}>
                                <option value="Ordenar">ORDENAR POR</option>
                                <option value="AtaqueMayor">Ataque mayor que</option>
                                <option value="AtaqueMenor">Ataque menor que</option>
                                <option value="Ascedente">Nombre a-z</option>
                                <option value="Descendente">Nombre z-a</option>
                            </Forma>
                        </Marco>

                        <Marco> 
                            <Forma  onChange={e=>obtenerTipo(e)} disabled={select}>
                                <option value="tipo">FILTRAR POR TIPO</option>
                                {tipo?.map(elemento=>
                                    <option key={elemento.id} value={elemento.name}>{elemento.name[0].toUpperCase()+ elemento.name.slice(1)}</option>
                                )}
                            </Forma>
                         </Marco>
                    </Flex3>
                </Marco>
       
                <Flex2>
                    <div>
                        <Label  id="BuscarPokemon">POKEMON: <Input type="text" name="buscarNombre" id="Buscar" value={busqueda} onChange={tomarValorTexto}/></Label>
                    </div>
                    <div>
                        <Boton onClick={()=>dispatch(BuscarNombrePokemon(busqueda))}>BUSCAR</Boton>
                    </div>
                </Flex2>
              </Color>
              <hr/>
    </>
  );
}


const Color=style.div`
    display:flex;
    background: #2e4595;
    justify-content: space-between;
    align-items: center;
    
    
`
const Marco=style.div`
    margin-top:1rem;
    
`

const Flex=style.div`
    display:flex;
    justify-content: left;
    align-items: center;
    
`

const Flex3=style.div`
    display:flex;
    justify-content: left;
    align-items: center;
    gap:2.5rem;
    
`

const Flex2=style.div`
    display:flex;
    justify-content: right;
    align-items: center;
    
`
const Boton=style.button`
    
    margin-right:2rem;
    margin-top:1rem;
    margin-left:0.3rem;
    margin-bottom:0.2rem;
    font-size:25px;
    border:none;
    background-color:#2e4595;
    align-items:center;
    color:#ffc501;
    cursor:pointer;
    text-transform: uppercase;
`

const Label= style.label`
    font-size:25px;
    color:#fec10e;
    
`


const Margen=style.div`
    margin-top:1.5rem;
`
    


const Input=style.input`

    font-size:1.5rem;
    margin-top:1rem;
    margin-bottom:0.5rem;

`
const Forma=style.select`

    font-size:1rem;
    border-radius:2rem;
    


`
