import React from 'react'
import Home from './pages/Home'
import SearchResults from './pages/SearchResults'
import Detail from './pages/Detail'
import { Route } from 'wouter'
import './css/main.css'

const App = () => {
  return (
    <div>
      <section>
        <Route path="/" default component={Home} />
        <Route path="/search/:keyword" component={SearchResults} />
        <Route path="/user/:login" component={Detail} />
      </section>
    </div>
  )
}

export default App
