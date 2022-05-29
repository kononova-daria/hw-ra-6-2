import './App.css';
import React from 'react';
import Form from './components/Form';
import Card from './components/Card';

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {notes: []};
  }

  getData = () => {
    fetch(process.env.REACT_APP_SERVER)
    .then((response) => response.json())
    .then((notes) => {
      this.setState({notes: notes})
    })
    .catch((error) => console.log(error))
  };

  postData = (data) => {
    fetch(process.env.REACT_APP_SERVER, {method: 'POST', body: JSON.stringify(data)})
    .then(() => this.getData())
    .catch((error) => console.log(error))
  };

  deleteData = (id) => {
    fetch(process.env.REACT_APP_SERVER + id, {method: 'DELETE'})
    .then(() => this.getData())
    .catch((error) => console.log(error))
  };

  handleAddData = (value) => {
    this.postData(value);
  }

  handleDeleteData = (id) => {
    this.deleteData(id);
  }

  handleUpdateData = () => {
    this.getData();
  }

  componentDidMount() {
    this.getData();
  }

  render() {
    return (
      <div className="main-page">
        <div className="notes-title">
          <div className="notes-title">Notes</div>
          <button className="notes-update" type="button" onClick={this.handleUpdateData}>⭯</button>
        </div>
        <div className="notes-list">
          {this.state.notes.map((item) => <Card key={item.id} {...item} deleteCard={this.handleDeleteData}/>)}
        </div>
        <Form addNote={this.handleAddData}/>
    </div>
    );
  }
}
