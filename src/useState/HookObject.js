import { useState } from "react";

function HookObject() {
    const [name, setName] = useState({ fName: '', lName: '' })
    return(
        <form>
            <input 
            type='text' 
            value={name.fName} 
            onChange={e => setName({...name, fName: e.target.value})}/>
            <input 
            type='text' 
            value={name.lName} 
            onChange={e => setName({...name, lName: e.target.value})}/>

            
        <h3>First Name: {name.fName}</h3>
        <h3>Last Name: {name.lName}</h3>
        </form>
    )
}
export default HookObject