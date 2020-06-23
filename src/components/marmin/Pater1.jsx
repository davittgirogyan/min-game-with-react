import React from 'react';

const Pater1 = (props)=>{
    const {pater1Data,verev,kox,setGameOver}=props;

    return(
    <>
    {pater1Data.map((res,index)=>{
        if(verev>res.top-20 && verev<res.top+res.height){
            if(kox>res.left-20 && kox<res.left+res.width){
                setGameOver(true);
            }
        }
        return <div key={index} className='pater1' style={{ top:res.top+"px",
                                                            left:res.left+"px",
                                                            width:res.width+"px",
                                                            height:res.height+"px"
                                                            }}></div>})}
    </>
    )
}
export default Pater1;