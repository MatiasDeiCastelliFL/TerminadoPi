const ConjuntoError=[];
    
                if(name === ""){
                    ConjuntoError.push("Complete El campo nombre");
                }
    
                if(hp  === ""){
                     ConjuntoError.push("Complete el campo de vida");
                }
    
                if(attack === ""){
                     ConjuntoError.push("Complete el campo de atake");
                }
    
                if(defense  === ""){
                    ConjuntoError.push("Complete el campo de defensa");
                }
    
                if(speed === ""){
                    ConjuntoError.push("Complete el campo de velocidad");
                }
    
                if(weight === ""){
                    ConjuntoError.push("Complete el campo de peso");    
                }
                if(height === ""){
                    ConjuntoError.push("Complete el campo de altura");
                }

                if(types.length==0){
                    ConjuntoError.push("Falto Enviar los tipos de pokemons");
                }

                if(img === ""){
                    ConjuntoError.push("Olvido agregar las imagenes")
                }
    
                return res.json({ConjuntoError});