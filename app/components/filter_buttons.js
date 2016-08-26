import React, { Component, PropTypes } from 'react';
import { ButtonGroup, DropdownButton, MenuItem } from 'react-bootstrap';

import { ALL, SHOW_UNARCHIVED, SHOW_ARCHIVED, BY_CONTEXT, BY_PROJECT } from '../constants';

export default class FilterButtons extends Component {
  static contextTypes = {
    router: PropTypes.object
  };

  getShowTitle() {
    return (this.props.show === SHOW_UNARCHIVED) ? "Unarchived" : "Archived"
  }

  getGroupTitle() {
    switch(this.props.group) {
      case ALL: return "No grouping";
      case BY_CONTEXT: return "By context";
      case BY_PROJECT: return "By Project";
    }
  }

  handleChangeShow(show) {
    const { group, due } = this.props;
    this.context.router.push(`/${show}/${due}/${group}`)
  }

  handleChangeGroup(group) {
    const { show, due } = this.props;
    this.context.router.push(`/${show}/${due}/${group}`)
  }

  render() {
    return(
      <ButtonGroup>
        <DropdownButton
          bsSize="small"
          title={this.getShowTitle()}
          onSelect={this.handleChangeShow.bind(this)}
          id="show-dropdown"
        >
          <MenuItem eventKey={ SHOW_UNARCHIVED }>Unarchived</MenuItem>
          <MenuItem eventKey={ SHOW_ARCHIVED }>Archived</MenuItem>
        </DropdownButton>
        <DropdownButton
          bsSize="small"
          title={this.getGroupTitle()}
          id="context-dropdown"
          onSelect={this.handleChangeGroup.bind(this)}
        >
          <MenuItem eventKey={ ALL }>No grouping</MenuItem>
          <MenuItem eventKey={ BY_CONTEXT }>By Context</MenuItem>
          <MenuItem eventKey={ BY_PROJECT }>By Project</MenuItem>
        </DropdownButton>
      </ButtonGroup>
    )
  }
}
