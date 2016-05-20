import React from 'react'
import Search from './searchProfile'

export default class main extends React.Component{
  render(){
    return (<div className="main-container">
      <div className="navbar">
        <div className="container-fluid">
          <div className="container">
            <Search history={this.props.history}/>
          </div>
        </div>
      </div>
    <div className="container">
      {this.props.children}
    </div>
    </div>)
  }
}
