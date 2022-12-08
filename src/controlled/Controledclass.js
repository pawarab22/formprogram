import React, { Component } from 'react'

export default class Controledclass extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: "Abhishek",
            email: "abhi@gmail.com",
            nameMessage:"",
            emailMessage:""
        }
        this.handleName=this.handleName.bind(this);
        this.handleEmail= this.handleEmail.bind(this); 
        this.submit=this.submit.bind(this);
    }

    handleName(e) {
        e.preventDefault();
        this.setState({
            name: e.target.value
        })


    }
    handleEmail(e) {
        e.preventDefault();
        this.setState({
            email: e.target.value
        })
    }

     submit(e){
            e.preventDefault();
            let validated= true;
            if(this.state.name.trim() === "")
            {
                this.setState({nameMessage:"Please enter name...!"});
                validated=false;
            }
            if(this.state.email.trim() === "")
            {
                this.setState({emailMessage:"Please enter email...!"});
                validated=false;
            }
            if(validated){

            alert(this.state.name);
            alert(this.state.email);
            }
    }

    render() {
        return (
            <div>Controled class Component

                <form onSubmit={this.submit}>
                    <input type="text" value={this.state.name} onChange={this.handleName} />
                    <div className='error'>{ this.state.nameMessage }</div>
                    <input type="email" value={this.state.email} onChange={this.handleEmail} />
                 <div className='error'>   { this.state.emailMessage }</div>
                 <h3>   {this.state.name} </h3>
                    <input type="submit" value="Submit" />
                </form>

            </div>
        )
    }
}
