import React, { createRef } from 'react'

function Uncontrolfun() {
    let nameRef = createRef();
    let emailRef = createRef(); 

    function submit(e){
        e.preventDefault();
        alert(nameRef.current.value);
        alert(emailRef.current.value);
    }
  return (
    <div> Uncontrol fun

    <form onSubmit={submit} >
        <input type="text" name='name' ref={nameRef} defaultValue="abhishek" />
        <input type="email" name='email' ref={emailRef} defaultValue="abhi@gmail.com" />
        <input type="submit" value="Submit"/>
    </form>

    </div>
  )
}

export default Uncontrolfun