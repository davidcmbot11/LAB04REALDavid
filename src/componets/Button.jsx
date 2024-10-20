import { useState } from "react";

export const Button  = props => {
   const {text} = props;
   const[count, setCount] = useState(0);
   const handleIncrement = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setCount(count + randomNumber);
  };

  const handleDecrement = () => {
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    setCount(count - randomNumber);
  };
    return (
    <div>
        <button onClick={handleIncrement}>Incrementar</button>
        <button onClick={handleDecrement}>Decrementar</button>
        <h2>{text} {count}</h2>
    </div>
    )
};