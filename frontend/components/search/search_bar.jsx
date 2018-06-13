import React from 'react';
import UserIndex from './user_index';

class SearchBar extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      query: "",
      loading: false
    };

    this.handleInput = this.handleInput.bind(this);
    this.fetchUsers = this.fetchUsers.bind(this);
    this.renderUserIndex = this.renderUserIndex.bind(this);
  }

  handleInput(e) {
    this.setState({query: e.target.value, loading: true});
  }

  fetchUsers() {
    this.props.searchUsers(this.state).then( () => this.setState({loading: false}));
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
    if (this.state.loading === true) this.fetchUsers();
    return (
      <div className="search-container">
          <input className="type-letters-here" type="text" value={this.state.query}
            onChange={this.handleInput} placeholder="Type letters into here until it does things..." />
          {this.state.loading === false || this.state.query !== "" ? this.renderUserIndex() : null }
      </div>
    );
  }

}


export default SearchBar;
