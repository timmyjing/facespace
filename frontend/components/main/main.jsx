import React from 'react';
import CreatePostFormContainer from '../post/create_post_form_container';
import MainPostIndexContainer from '../post/main_post_index_container';
import SideNavBar from '../nav_bar/nav_bar';
import SideNewsBar from '../news_bar/news_bar';


class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
  }


  render() {
    return (
      <div className="main-container-home">
        <SideNavBar currentUser={this.props.currentUser} />
        <SideNewsBar />
        <CreatePostFormContainer className="post-form-main" currentUser={this.props.currentUser} user={this.props.currentUser} />
        <MainPostIndexContainer />
      </div>)

  }
}

export default Main;
