import React from 'react'
import image from '../images/images12.jpg'
import './styles/styles.css'
import {Apiurl} from '../services/APIrest'
import axios from 'axios';

class Form extends React.Component {
    //constructor(props){
     //   super(props)}
    
    state={
        form:{
            "email":""
        },
        cabezera:{
            "app": "APP_BCK",
            "password": ""
        },
        error:false,
        errorMsg:""
    }
    //evita que se recargue la pag al pulsar el botón log in
    manejadorSubmit2=e=>{
        e.preventDefault();
    }
    //toma los cambios dentro del input y se los pasa a una variable (setear) 
    manejadorChange = async e =>{
        await this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            },
            cabezera:{
                ...this.state.cabezera,
                [e.target.name]: e.target.value
            }
        })
        //console.log(this.state.cabezera);
       // console.log(this.state.form);
    }
    //metodo que permite enviar la solicitud al servidor
    manejadorButton=()=>{
        let url = Apiurl;
        let datos = this.state.form;
        let cabezera = this.state.cabezera;
        axios.put(url, {
            datos
           },
           {
             headers: cabezera
           })
        .then((response) =>{
            console.log(response);
            localStorage.setItem("token", response.data.sessionTokenBck);
            //this.props.history.push("/home");
            //if (response.data.status === "ok"){
            //    console.log(response);
            //}else{
            //    this.setState({
             //       error: true,
             //       errorMsg: "Información Incorrecta"
             //   })
           // }
        }).catch(error =>{
            console.log(error.message);
            this.setState({
                error: true,
                errorMsg: "Error al conectar con la api"
            })
        });
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
                <input type="submit" className="fadeIn fourth" value="Log In" onClick={this.manejadorButton}/>
                </form>
               
            </div>
            </div>
        </section>
        
        )
    }
    

}

export default Form