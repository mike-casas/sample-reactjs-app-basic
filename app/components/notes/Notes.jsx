import React from 'react'
import NoteList from './NoteList.jsx'
import AddNote from './addNote.jsx'

export default class Notes extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return(<div>
        <h1>
          Notes by {this.props.username}
        </h1>
        <AddNote addNote={this.props.addNote}/>
        <NoteList notes={this.props.notes}/>
      </div>)
  }
}

Notes.propTypes= {
  notes: React.PropTypes.array.isRequired,
  username: React.PropTypes.string.isRequired
}
