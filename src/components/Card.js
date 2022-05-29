import React from 'react';

export default class Card extends React.Component {
  render() {
    return (
      <div className="note-container">
        <div className="note-header">
          <button className="note-remove" type="button" onClick={() => this.props.deleteCard(this.props.id)}>X</button>
        </div>
        <div className='note-content'>{this.props.text}</div>
      </div>
    )
  }
}