import React from 'react';
import { useState } from 'react';
const StartGame = ({setGameProcess})=>{
    const [showPoint,setShowPoint] = useState(false);
    let content;
    let innerContent;
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
        if(data){
            data=data.sort(compare_qty);
            innerContent = data.map((e,i)=>{
                return <React.Fragment key={i} ><span>{i+1}-{e.name} {e.score}</span><br/></React.Fragment>
            })
        }
        else{
            innerContent = <h1>Scores are empty</h1>
        }

        content=<div>
            <h1>Tops</h1>
            <button onClick={()=>setShowPoint(false)} >go Back</button><br/>
            {innerContent}
        </div>
    }else{
        content = <> 
            <h1>Start Game</h1>
            <h3>Tools</h3>
            <p>top-w</p>
            <p>button-s</p>
            <p>left-a</p>
            <p>right-d</p>
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