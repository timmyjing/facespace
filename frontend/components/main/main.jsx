import React from 'react';
import CreatePostFormContainer from '../post/create_post_form_container';
import MainPostIndexContainer from '../post/main_post_index_container';


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
      <div className="main-container-home">
        <CreatePostFormContainer className="post-form-main" currentUser={this.props.currentUser} user={this.props.currentUser} />
        <MainPostIndexContainer />
      </div>)

  }
}

export default Main;
