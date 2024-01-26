"use client";

import React, { useState, useEffect } from 'react';
import styles from './Pokemon.module.css';
function Pokemon() {

    const [pokemon, setPokemon] = useState(null);
    const [habilidad, setHabilidad] = useState('');
    const [type,setType]=useState('');
    const [nom,setNom]=useState('');
    const[heig,setHeig]=useState('');
    const [weig,setWeig]=useState('');
   
    const [hp,setHp]=useState('');
    const [atack,setAtack]=useState('');
    const [def,setDef]=useState('');
    const [speed,setSpeed]=useState('');

    const url = "https://pokeapi.co/api/v2/pokemon/swinub";
    
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setPokemon(data.sprites.front_default);
                setNom(data.name)
                setHabilidad(data.abilities[0].ability.name); 
                setType(data.types[0].type.name);
                setHeig(data.height);
                setWeig(data.weight);

                setHp(data.stats[0].base_stat);
                setAtack(data.stats[1].base_stat);
                setDef(data.stats[2].base_stat);
                setSpeed(data.stats[5].base_stat);
            })
            
    }, []);

    return (
        <div className={styles.poke}>
            
            <h1 className={styles.titulo}>{` ${nom}`} </h1>
            <img src={pokemon} alt="pokemon"  width={500} height={500} />


                <div className={styles.hab}>
                    <h1 className={styles.titus}>ABOUT</h1>
                    <div className={styles.about}>
                    <h1>{`type:          ${type}`} </h1>
                    <h1>{`heigh:          ${heig} m`} </h1>
                    <h1>{`weigh:          ${weig} kg`} </h1>
                    <h1>{`Habilidy:         ${habilidad}`}</h1>
                    </div>

                    <h1 className={styles.titus} >STATS</h1>
                     <div className={styles.about}>
                        <h1>{`hp:          ${hp}`} </h1>
                        <h1>{`atack:       ${atack}`} </h1>
                        <h1>{`defense:       ${def}`} </h1>
                        <h1>{`speed:         ${speed}`} </h1>
                    </div>   


                </div>

        </div>
    );
}

export default Pokemon;