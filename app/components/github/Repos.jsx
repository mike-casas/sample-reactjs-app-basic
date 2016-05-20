import React from 'react'

export default class Repos extends React.Component{
  render(){
    return(<ul className="list-group">
     <h3>Repositorios</h3>
      {this.props.repos.map((repo,index)=>
        (<li className="list-group-item" key={index}>
          <h4><a href={repo.html_url}>{repo.name}</a></h4>
          <p>{repo.description}</p>
        </li>)
      )}
    </ul>)
  }
}

Repos.propTypes= {
  repos: React.PropTypes.array.isRequired,
  username: React.PropTypes.string.isRequired
}

