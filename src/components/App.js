import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'

function App(){
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/" render = { props=> ( <Login {...props} />)}   />
            <Route exact path="/home" render = { props=> ( <Home {...props} />)}  />
        </Switch>
        </BrowserRouter>
    )
}
export default App