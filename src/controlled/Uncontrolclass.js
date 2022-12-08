import React, { Component } from 'react'

export default class Uncontrolclass extends Component {
    
    constructor(props){
            super(props);
            this.nameRef = React.createRef();
            this.emailRef = React.createRef();
            this.submit = this.submit.bind(this);
    }

    submit(e){
        e.preventDefault();
        alert(this.nameRef.current.value);
        alert(this.emailRef.current.value);
    }

    render() {
    return (
      <div> Uncontrol class

        <form onSubmit={this.submit}>
            <input type="text" name='name' ref={this.nameRef} defaultValue="abhishek"/>
            <input type="email" name='email' ref={this.emailRef} defaultValue="abhi@gmail.com" />
            <input type="submit" value="Submit" />
        </form>

      </div>
    )
  }
}
