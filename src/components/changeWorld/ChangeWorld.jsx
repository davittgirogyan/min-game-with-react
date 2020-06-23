import React from 'react';
import { useEffect } from 'react';

const ChangeWorld = ({setWorld,setPater1Data,setGameProcess,
                    setVerev,setKox,setFast,setVerjinxod,setLevel
                    })=>{
    useEffect(()=>{
        setGameProcess(false)
    },[setGameProcess])
    const doThat = ()=>{
        setWorld(2);
        setVerjinxod(2);
        setVerev(100);
        setKox(25);
        setFast(10);
        setLevel(1)
        setPater1Data([
          {top:50,left:50,width:150,height:230},
          {top:30,left:250,width:100,height:220},
          {top:400,left:110,width:150,height:40},
          {top:280,left:300,width:150,height:100},
          {top:400,left:300,width:200,height:60},
        ]);
        setGameProcess(true)

    }
    return(
    <div>
        <h1>You winn world</h1>
        <button onClick={doThat} >Play next world</button>
    </div>)
}

export default ChangeWorld;