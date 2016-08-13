import React, { Component } from 'react';
import { connect } from 'react-redux';
import { DropdownButton, MenuItem } from 'react-bootstrap';

import { dueToday } from '../actions/todo_actions';

class TodoActions extends Component {
  render() {
    return(
      <span className="pull-right">
        <DropdownButton
          bsStyle={"link"}
          title="Actions"
          id={`button-${this.props.id}`}
          onSelect={this.handleChange.bind(this)}
        >
          <MenuItem eventKey="today">Due today</MenuItem>
          <MenuItem eventKey="2">Due tomorrow</MenuItem>
          <MenuItem eventKey="3">Edit</MenuItem>
          <MenuItem divider />
          <MenuItem eventKey="4">Archive</MenuItem>
          <MenuItem eventKey="5">Delete</MenuItem>
        </DropdownButton>
      </span>
    )
  }

  handleChange(action) {
    switch(action) {
        case "today": this.props.dueToday(this.props.todo)
    }
  }
}

export default connect(null, { dueToday })(TodoActions)