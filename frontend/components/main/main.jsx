import React from 'react';
import CreatePostFormContainer from '../post/create_post_form_container';
import MainPostIndexContainer from '../post/main_post_index_container';
import SideNavBar from '../nav_bar/nav_bar';
import SideNewsBar from '../news_bar/news_bar';
import {withRouter} from 'react-router-dom';

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      render: false
    };
  }

  componentDidMount() {
    if (this.props.history.location.pathname !== this.props.match.url) return null;
    this.setState({render: true})
  }


  render() {
    if (!this.state.render) return null;
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
