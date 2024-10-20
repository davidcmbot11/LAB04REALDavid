import { useState } from "react";

export const Button  = props => {
   const {text} = props;
   const[count, setCount] = useState(0);
   function handlerButton (){

        const randomNumber = Math.floor(Math.random()*100) + 1;
        alert(`Valor Aleatorio: ${randomNumber}`);
        setCount(randomNumber)
   }
    return (
        <button onClick={handlerButton}>
        {text} { count }
        </button>
    )
};