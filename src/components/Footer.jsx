import React, { Component } from 'react'
import Emoji from './Emojis'
import './footer.css'
export default class Footer extends Component {
  render() {
    return (
      <div className="footer">
       Made With<Emoji label="love" symbol={"\u{1F3B5}"}/>
      </div>
    )
  }
}
