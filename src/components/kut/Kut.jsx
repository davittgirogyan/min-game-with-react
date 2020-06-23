import React from 'react';
import { useEffect } from 'react';

const Kut=(props)=>{
    const {verev,kox,qayl,kutVerev,setKutVerev,kutKox,setKutKox,setAchok,setAchokArr,time,setAllHashiv}= props;
    useEffect(()=>{
        if(verev>=kutVerev-20  && verev-kutVerev<20){
            if(kox>=kutKox-20 && kox-kutKox<20){
                setAchok((prevState)=>prevState+1)
                let rand = Math.round(Math.random()*475)
                let rand2 = Math.round(Math.random()*475)
                setKutVerev(rand);
                setKutKox(rand2);
                setAchokArr(oldArray => [...oldArray, 1]);
                setAllHashiv((prev)=>prev+1)
                clearInterval(time);
            }
        }
    },[verev,kox])
    return(
        <div className="kut" style={{top:`${kutVerev}px`,left:`${kutKox}px`}}>
        </div>
    )
}

export default Kut;