import React from 'react'
import { Route, Switch } from 'wouter'
import Home from './pages/Home'
import Dashboard from './pages/crew/Dashboard'

function App () {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/dashboard" component={Dashboard} />
    </Switch>
  )
}

export default App
