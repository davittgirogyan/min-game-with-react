import React,{useEffect} from 'react';
import './Snake.css';

const Snake = (props)=>{
    const{verev,setVerev,kox,setKox,time}=props

    useEffect(()=>{
        if(verev>475){
            setVerev(0);
            clearInterval(time)
        }
        else if(verev<0){
            setVerev(475);
            clearInterval(time)
        }
        else if(kox>475){
            setKox(0);
            clearInterval(time)
        }
        else if(kox<0){
            setKox(475);
            clearInterval(time)
        }
    },[verev,kox])
    
    return(
        <div className='snake' style={{top:`${verev}px`,left:`${kox}px`}}>
            
        </div>
    )
}

export default Snake;