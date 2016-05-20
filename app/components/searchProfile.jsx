import React from 'react'
import {Router, History} from 'react-router'

export default class searchProfile extends React.Component{

  setRef(ref){
    this.searchUsername= ref;
  }

  handleSubmit(){
    var username= this.searchUsername.value;
    this.props.history.pushState(null, `/profile/${username}`);
    this.searchUsername.value='';
  }

  render(){
    return(<div>
      <form onSubmit={()=> this.handleSubmit()}>
        <input type="text" className="form-control" placeholder="search" ref={(ref)=>this.setRef(ref)}/>
        <button type="submit" className="btn btn-default">button</button>
      </form>
    </div>)
  }
}




