import React from 'react';
import './GameOver.css';
import { useState } from 'react';
const GameOver = ({setGameOver,setVerev,setKox,
                    verev,kox,setGameProcess,gameProcess,
                    setVerjinxod,setLevel,setAchok,
                    setKutKox,setKutVerev,time,setFast,
                    setAllHashiv,allhashiv
                })=>{
    const [name,setName] = useState('');
    const saveName = ()=>{
        let data = localStorage.getItem('scores');
        if(data){
            data = JSON.parse(data);
            data.push({name,score:allhashiv})
            localStorage.setItem('scores', JSON.stringify(data));
        }else{
            localStorage.setItem('scores', JSON.stringify([{name,score:allhashiv}]));
        }
        duThat()
    }
    // setKox(25)
    if(gameProcess){
        setGameProcess(false)
    }
    if(verev!==100){
        setVerev(100)
    }
    if(kox!==25){
        setKox(25)
    }
    const duThat = ()=>{
        clearInterval(time)
        setGameOver(false);
        setGameProcess(true);
        setVerjinxod(2);
        setLevel(1);
        setAchok(0);
        setFast(10);
        setAllHashiv(0)
        let rand = Math.round(Math.random()*475)
        let rand2 = Math.round(Math.random()*475);
        setKutKox(rand);
        setKutVerev(rand2);
    }
    return(
        <div className='App' >
            <h1>Game Over</h1>
            <h2>Your Score is {allhashiv}</h2>
            <h3>Enter your name and Save your Score</h3>
            <div>
                <input placeholder='Enter your name' value={name} onChange={(e)=>setName(e.target.value)} />
                <button onClick={saveName} >Save</button>
            </div>
            <button onClick={duThat} >Restart</button>
        </div>
    )
}
export default GameOver;