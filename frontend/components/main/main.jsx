import React from 'react';
import CreatePostFormContainer from '../post/create_post_form_container';


// REQUEST CURRENT USER TEMPORARILY USED UNTIL FETCH FEED IS MADE

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestCurrentUser(this.props.currentUser.id);
  }


  render() {
    return (
      <div>
        <CreatePostFormContainer className="post-form-main" currentUser={this.props.currentUser} user={this.props.currentUser} />
      </div>)

  }
}

export default Main;
