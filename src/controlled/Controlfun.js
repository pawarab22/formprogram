import React, { useState } from 'react'

function Controlfun() {
    let [name,setName] = useState("Abhishek");
    let [email,setEmail] = useState("abhi@gmail.com");
    
    function handleName(e){
            e.preventDefault();
            setName(e.target.value);
    }
    function submit(e){
        e.preventDefault();
        alert(name);
        alert(email);
    }
    function handleEmail(e){
            e.preventDefault();
            setEmail(e.target.value);
    }
  return (
    <div>
      controlfun

    <form onSubmit={submit}>
        <input type="text" value={name} onChange={handleName}/>
        <input type="email" value={email} onChange={handleEmail}/>
        <h3>{name}</h3>
        <input type="submit" value="Submit" />
    </form>

    </div>
  )
}

export default Controlfun