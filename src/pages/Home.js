import React from 'react'
import Tablelist from '../components/Tablelist'
import axios from 'axios';

//const accessToken = "stestapis@tuten.cllr91m1s5lrd1nfd9fo8bu39o56";
const apiUrl = "https://dev.tuten.cl/TutenREST/rest/user/contacto%40tuten.cl/bookings?current=true";

const  authAxios = axios.create ({
  baseURL: apiUrl,
  body: {
    email:"contacto@tuten.cl",
  },
  headers: {
    token: localStorage.getItem("token"),
    app: "APP_BCK",
    adminemail: "testapis@tuten.cl"
  }
});

class home extends React.Component {
      
    state = {
        data: []
    }
    //se ejecuta justo después de que el componente haya sido montado en el DOM)
    async componentDidMount(){
        await this.fetchData()
    }
    fetchData = async () => {
            //recupera y setea data
        authAxios.get()
        .then((response) =>{
            console.log(response);
            //let data = await result.json()
            this.setState({
                data: response.data
            })
            console.log(this.state.data)
        }).catch(error =>{
            console.log(error.message);
        });
    }
    render(){
        return(
            <Tablelist information={this.state.data}
            />
        )
    }
}
export default home