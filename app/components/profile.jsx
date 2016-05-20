import React from 'react'
import Bio from './github/UserProfile.jsx'
import Repo from './github/Repos.jsx'
import Notes from './notes/Notes.jsx'
import ReactFireMixin from 'reactfire'
import Firebase from 'firebase'
import getGithubInfo from './handlerequest.js'


module.exports= React.createClass({
   mixins: [ReactFireMixin],
  getInitialState: function() {
    return {
      bio:{},
      repos:[],
      notes:['A','b','c']
    };
  },


 componentDidMount: function(){
     this.ref = new Firebase('https://sample-react-profile.firebaseio.com/');
     this.init(this.props.params.username)
   },
   componentWillReceiveProps: function(nextProps){
     this.unbind('notes');
     this.init(nextProps.params.username);
   },
   componentWillUnmount: function(){
     this.unbind('notes');
   },
   init: function(username){
     this.ref.child(username);
     this.bindAsArray(this.ref, 'notes');

      getGithubInfo(username)
       .then(function(data){
         this.setState({
           bio: data.bio,
           repos: data.repos
         })
       }.bind(this))
   },
   handleAddNote: function(newNote){
     this.ref.child(this.props.params.username).child(this.state.notes.length).set(newNote)
   },
  render: function(){
    return (
      <div>
        <div className="col-md-4">
          <Bio username={this.props.params.username} bio={this.state.bio}/>
        </div>
        <div className="col-md-4">
          <Repo username={this.props.params.username} repos={this.state.repos}/>
        </div>
        <div className="col-md-4">
          <Notes username={this.props.params.username} notes={this.state.notes} addNote={this.handleNewNote} />
        </div>
      </div>
    )
  }
});
