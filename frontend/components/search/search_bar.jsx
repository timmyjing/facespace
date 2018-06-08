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
  }

  //
  // componentDidMount() {
  //   this.props.requestUsers();
  // }

  handleInput(e) {
    this.setState({query: e.target.value});
    setTimeout( this.fetchUsers, 200);
  }

  fetchUsers() {
    this.props.searchUsers(this.state);
  }

  componentWillReceive(newProps) {
    console.log(newProps);
  }


  render() {

    const {users} = this.props;

    return (
      <div className="search-container">
          <input className="type-letters-here" type="text" value={this.state.query} onChange={this.handleInput} placeholder="Type letters into here until it does things..." />
          <UserIndex users={users} />
      </div>
    )
  }

}


export default SearchBar;
