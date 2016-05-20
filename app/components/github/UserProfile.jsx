import React from 'react'

export default class UserProfile extends React.Component{
  render(){
    return (<div>
      <h1>Bio</h1>
      <ul className="list-group">
        <li className="list-group-item"><img className="img-responsive" src={this.props.bio.avatar_url}/></li>
        <li className="list-group-item">{this.props.bio.name}</li>
        <li className="list-group-item">{this.props.bio.company}</li>
      </ul>
    </div>)
  }
}

UserProfile.propTypes={
  bio: React.PropTypes.object.isRequired,
  username: React.PropTypes.string.isRequired
}
