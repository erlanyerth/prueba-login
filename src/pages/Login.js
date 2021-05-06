import React from 'react'
import image from '../images/images12.jpg'
import '../components/styles/styles.css'
import {Apiurl} from '../services/APIrest'
import axios from 'axios';

class Form extends React.Component {
    //campo de clase que contiene el estado del ciclo de vida del componente, para evitar this.setState()ser llamado.
    //se se inicializa en false
    _isMounted = false;
    
    state={
        form:{
            "email":""
        },
        cabecera:{
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
            cabecera:{
                ...this.state.cabecera,
                [e.target.name]: e.target.value
            }
        })
    }
    //metodo que permite enviar la solicitud al servidor
    manejadorButton=()=>{
        let url = Apiurl;
        let datos = this.state.form;
        let cabecera = this.state.cabecera;
        //la variable se cambia a verdadero cuando el componente se monta
        this._isMounted = true;
        axios.put(url, {
            datos
           },
           {
             headers: cabecera
           })
        .then((response) =>{
            if (response.statusText === "OK"){
                console.log(response);
                localStorage.setItem("token", response.data.sessionTokenBck); //guarda el token en el navegador para usarlo posteriormente
                this.props.history.push("/home"); //redirige a la pag home
                //valida el abortar la solicitud cuando el componente se desmonta
                if (this._isMounted) {
                    this.setState({
                        error: false,
                        errorMsg:""
                    })
                }
            }else{
                this.setState({
                    error: true,
                    errorMsg: "Información Incorrecta"
                })
            }
        }).catch(error =>{
            console.log(error.message);
            this.setState({
                error: true,
                errorMsg: "Error al conectar con la api"
            })
        });
    }
    componentWillUnmount() {
        //se restablece a falso cuando el componente se desmonta
        //esto permite realizar un seguimiento del estado del ciclo de vida del componente
        this._isMounted = false;
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
                            {this.state.error === true &&
                            <div className="alert alert-danger alert-dismissible fade show" role="alert">
                                {this.state.errorMsg}
                            </div>
                            }
                </div>
            </div>
        </section>
        )
    }
}
export default Form