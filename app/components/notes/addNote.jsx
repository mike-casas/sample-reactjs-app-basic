import React from 'react';

export default class addNote extends React.Component {
  constructor(props) {
    super(props);
  }
  setRef(ref){
     this.note= ref;
  }

  handlesubmit(){
    this.props.addNote(this.note.value);
    this.note.value='';
  }
  render() {
      return(<div className="input-group">
        <input type="text" placeholder="add note" ref={(ref)=> this.setRef(ref)} />
        <button onClick={this.handlesubmit.bind(this)}>submit</button>
      </div>)
  }
}











