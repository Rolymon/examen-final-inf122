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

                setHp(data.stats[0].name);
            })
            
    }, []);

    return (
        <div className={styles.poke}>
            
            <h1 className='styles.titulo'>{` ${nom}`} </h1>
            <img src={pokemon} alt="pokemon"  width={500} height={500} />


                <div className='styles.habi'>
                    <h1>ABOUT</h1>
                    <div className={styles.about}>
                    <h1>{`type: ${type}`} </h1>
                    <h1>{`heigh: ${heig}`} </h1>
                    <h1>{`weigh: ${weig}`} </h1>
                    <h1>{`Habilidad: ${habilidad}`}</h1>
                    </div>

                    <h1>STATS</h1>
                     <div className={styles.about}>
                        <h1>{`hp: ${hp}`} </h1>
                    </div>   


                </div>

        </div>
    );
}

export default Pokemon;