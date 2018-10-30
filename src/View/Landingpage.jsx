import React, { Component } from 'react'
import Body from '../components/Body'
import Header from '../components/Header'
import Footer from '../components/Footer'
export default class Landingpage extends Component {
  render() {
    return (
      <div>
          <Header/>
          <Body/>
          <Footer/>
      </div>
    )
  }
}
