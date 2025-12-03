import React from 'react'
import "./App.css"
import Header from './components/common/heading/Header'
import Home from './components/home/Home'
import { BrowserRouter as Router, Switch } from "react-router-dom"
import { Route } from 'react-router-dom/cjs/react-router-dom.min'
const App = () => {
  return (
    <div>
      <>
        <Router>
          <Header />
          <Switch>
            <Route path='/' exact component={Home} />
          </Switch>
        </Router>
      </>
    </div>
  )
}

export default App
