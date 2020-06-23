import React, { useState, useEffect } from 'react';
import './App.css';
import Snake from './components/snake/Snake';
import Kut from './components/kut/Kut';
import Pater1 from './components/marmin/Pater1';
import GameOver from './components/gameOver/GameOver';
import StartGame from './components/startGame/StartGame';
import ChangeWorld from './components/changeWorld/ChangeWorld';

function App() {
  let time,changeXod;
  // clearInterval(time);
  //snake data
  const [verev,setVerev]= useState(100);
  const [kox,setKox]= useState(25);
  const [fast,setFast]= useState(10);
    //2@nerqevn a, 4@dzax@, 6@ach@ 8@verev
  const [verjinxod,setVerjinxod]= useState(2);
  const [qayl,setQayl]= useState(1);
  //over snake data
  const [gameProcess,setGameProcess]= useState(false)
  const [gameOver,setGameOver] = useState(false);
  const [world,setWorld] = useState(1);

  //kut data
  let rand = Math.round(Math.random()*475)
  let rand2 = Math.round(Math.random()*475);
  // console.log(rand,rand2)
  const [kutVerev,setKutVerev]= useState(rand);
  const [kutKox,setKutKox]= useState(rand2);
  const [achok,setAchok]= useState(0);
  const [achokArr,setAchokArr]= useState([]);
  const [level,setLevel]=useState(1);
  const [allhashiv,setAllHashiv] = useState(0);
  //over kut data

  //marmin data
  const [pater1Data,setPater1Data]=useState([
    {top:50,left:50,width:150,height:230},
    {top:0,left:250,width:30,height:150},
    {top:400,left:110,width:150,height:40},
    {top:300,left:270,width:150,height:100},
  ])
  //over marmin data

  if(gameOver){
    return <GameOver setGameOver={setGameOver} 
                     setVerev={setVerev} 
                     setKox={setKox} 
                     verev={verev}
                     kox={kox}
                     setGameProcess={setGameProcess}
                     gameProcess={gameProcess}
                     setVerjinxod={setVerjinxod}
                     setAchok={setAchok}
                     setLevel={setLevel}
                     setKutVerev={setKutVerev}
                     setKutKox={setKutKox}
                     time={time}
                     setFast={setFast}
                     allhashiv={allhashiv}
                     setAllHashiv={setAllHashiv}
                     />
  }
  if(level===10 && world===1){
    return <ChangeWorld  setWorld={setWorld} 
                          setPater1Data={setPater1Data}
                          setVerev={setVerev}
                          setKox={setKox}
                          setFast={setFast}
                          setVerjinxod={setVerjinxod}
                          setGameProcess={setGameProcess}
                          setLevel={setLevel}
                          />

 }  

  if(gameProcess){

    time = setInterval(()=>{
     if(verjinxod===2){
       setVerev((verev)=>verev+qayl)
       clearInterval(time)
     }
     else if(verjinxod===8){
       setVerev((verev)=>verev-qayl)
       clearInterval(time)
     }
     else if(verjinxod===6){
       setKox((kox)=>kox+qayl)
       clearInterval(time)
     }
     else if(verjinxod===4){
       setKox((kox)=>kox-qayl)
       clearInterval(time)
     }

   },fast-level);
   if(achok===5){
    //  console.log(fast)
        setAchok(0);
        setLevel(prevLevel=>prevLevel+1);
        clearInterval(time);

   }

   pater1Data.map((res)=>{
    if((kutVerev>res.top-20 && kutVerev<res.top+res.height)&&(kutKox>res.left-20 && kutKox<res.left+res.width)){
        clearInterval(time);
        let rand = Math.round(Math.random()*475)
        let rand2 = Math.round(Math.random()*475);
        setKutVerev(rand);
        setKutKox(rand2);
        return
    }
         
  })
    changeXod = (key)=>{
     if(+key===6 || key==='d' && verjinxod!==4 && verjinxod!==6){setVerjinxod(6);clearInterval(time)}
     else if(+key===4 || key==='a' && verjinxod!==6 && verjinxod!==4){setVerjinxod(4);clearInterval(time)}
     else if(+key===8 || key==='w' && verjinxod!==2 && verjinxod!==8){setVerjinxod(8);clearInterval(time)}
     else if(+key===2 || key==='s' && verjinxod!==8 && verjinxod!==2){setVerjinxod(2);clearInterval(time)}
   }
 }else{
   return <StartGame setGameProcess={setGameProcess}  />
 }


  return (
    <div className="App" onKeyPress={(e)=>changeXod(e.key)} tabIndex="0">
      <h1>Level:{level}-{achok} all points {allhashiv} world {world}</h1>
      <div className="map">
        <Pater1 achok={achok} 
                verev={verev} 
                kox={kox} 
                pater1Data={pater1Data}
                setGameOver={setGameOver}
                />
        <Kut  verev={verev} 
              kox={kox} 
              qayl={qayl} 
              kutVerev={kutVerev} 
              setKutVerev={setKutVerev} 
              kutKox={kutKox} 
              setKutKox={setKutKox} 
              setAchok={setAchok}
              setAchokArr={setAchokArr} 
              time={time}
              setAllHashiv={setAllHashiv}
          />
        <Snake 
                verev={verev} 
                setVerev={setVerev} 
                kox={kox} 
                setKox={setKox} 
                verjinxod={verjinxod} 
                setVerjinxod={setVerjinxod} 
                qayl={qayl} 
                setQayl={setQayl}
                time={time} />
      </div>
    </div>
  );
}

export default App;
