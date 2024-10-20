import { useState } from "react";

export const CompWithProps  =props => {
    const {user} = props;
    const [text, setText] = useState("");
   
   const  handleChange = event => {
    setText (event.target.value);
   }
    return (
    <div>
        <input type="text" value={text} onChange={handleChange} />
        <h2>{user} {text}</h2>
    </div>
    )
};