import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component {

  apiKey = process.env.REACT_APP_NEWS_API;
  render() {
    return (
      <>
      <Router>
      <div>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<News apiKey = {this.apiKey} key ="general" pagesize={6} country="in" category= "general"/>} />
          <Route exact path="/sports" element={<News apiKey = {this.apiKey} key ="sports" pagesize={6} country="in" category= "sports"/>} />
          <Route exact path="/business" element={<News apiKey = {this.apiKey} key ="business" pagesize={6} country="in" category= "business"/>} />
          <Route exact path="/entertainment" element={<News apiKey = {this.apiKey} key ="entertainment" pagesize={6} country="in" category= "entertainment"/>} />
          <Route exact path="/health" element={<News apiKey = {this.apiKey} key ="health" pagesize={6} country="in" category= "health"/>} />
          <Route exact path="/technology" element={<News apiKey = {this.apiKey} key ="technology" pagesize={6} country="in" category= "technology"/>} />
          <Route exact path="/science" element={<News apiKey = {this.apiKey} key ="science" pagesize={6} country="in" category= "science"/>} />
        </Routes>
      </div>
      </Router>
      </>
    )
  }
}

export default App;