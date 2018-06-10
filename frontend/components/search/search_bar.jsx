import React from 'react';
import UserIndex from './user_index';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };

    this.handleInput = this.handleInput.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.renderUserIndex = this.renderUserIndex.bind(this);
  }

  handleInput(e) {
    this.setState({query: e.target.value}, this.fetchUsers);
  }

  fetchUsers() {
    this.props.searchUsers(this.state);
  }

  renderUserIndex() {
    const {users} = this.props;
    if (users) {
      return <UserIndex users={users} />;
    } else {
      return null;
    }
  }


  render() {
    return (
      <div className="search-container">
          <input className="type-letters-here" type="text" value={this.state.query}
            onChange={this.handleInput} placeholder="Type letters into here until it does things..." />
          {this.renderUserIndex()}
      </div>
    );
  }

}


export default SearchBar;
