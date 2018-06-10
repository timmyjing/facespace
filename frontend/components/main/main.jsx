import React from 'react';

class Main extends React.Component {


  componentDidMount() {
    this.props.fetchFeed();
  }


  render() {
    return (<div>HI</div>)
  }
}

export default Main;
