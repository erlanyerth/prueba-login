import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from '../pages/Home'
import Login from '../pages/Login'

function App(){
    return (
        <BrowserRouter>
        <Switch>
            <Route exact path="/login" component={Login} />
            <Route exact path="/home" component={Home} />
        </Switch>
        </BrowserRouter>
    )
}
export default App