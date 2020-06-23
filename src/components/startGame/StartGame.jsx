import React from 'react';
import { useState } from 'react';
const StartGame = ({setGameProcess})=>{
    const [showPoint,setShowPoint] = useState(false);
    let content;
    if(showPoint){
        let data = JSON.parse(localStorage.getItem('scores'));
        function compare_qty(a, b){
            if(a.score < b.score){
                    return 1;
            }else if(a.score > b.score){
                    return -1;
            }else{
                    return 0;
            }
        }
        data = data.sort(compare_qty);
        content=<div>
            <h1>Tops</h1>
            <button onClick={()=>setShowPoint(false)} >go Back</button><br/>
            {data.map((e,i)=>{
            return <React.Fragment key={i} ><span>{i}-{e.name} {e.score}</span><br/></React.Fragment>
            })}
        </div>
    }else{
        content = <> 
            <h1>Start Game</h1>
            <button onClick={()=>setGameProcess(true)} >Start</button>
            <button onClick={()=>setShowPoint(true)}>See Top Players</button>
        </>
    }
    return(
        <div className='App'>

            {content}

        </div>
    )
}
export default StartGame;