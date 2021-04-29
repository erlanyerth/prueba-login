import React from 'react'
import image from '../images/images12.jpg'
import './styles/styles.css'
import {Apiurl} from '../services/APIrest'
import axios from 'axios';

class Form extends React.Component {
    state={
        form:{
            "email":"",
            "password":"",
            "app":"",
            "Accept": "application/json"
        },
        error:false,
        errorMsg:""
    }
    //evita que se recargue la pag al pulsar el botón log in
    manejadorSubmit2=e=>{
        e.preventDefault();
    }
    //toma los cambios dentro del input y se los pasa a una variable 
    manejadorChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        //console.log(this.state.form);
    }
    manejadorButton=()=>{
        let url = Apiurl;
        axios.get(url,this.state.form)
        .then( response =>{
            console.log(response);
        })
    }
    render(){
        return(
        <section className="Container">
            <div className="wrapper fadeInDown">
            <div id="formContent">
                <div className="fadeIn first">
                <br></br>
                <img src={image} width="90px" alt="User Icon" />
                <br></br>
                </div>
                <form onSubmit={this.manejadorSubmit2}>
                <input type="email" className="fadeIn second" name="email" onChange={this.manejadorChange} placeholder="Email" required/>
                <input type="password" className="fadeIn third" name="password" onChange={this.manejadorChange} placeholder="Password" required/>
                <input type="text" className="fadeIn third" name="app" onChange={this.manejadorChange} placeholder="App" required/>
                <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorButton}/>
                </form>
                <div id="formFooter">
                <a className="underlineHover" href="#">Forgot Password?</a>
                </div>
            </div>
            </div>
        </section>
        
        )
    }
    

}

export default Form