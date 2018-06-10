import React from 'react';


// REQUEST CURRENT USER TEMPORARILY USED UNTIL FETCH FEED IS MADE

class Main extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.requestCurrentUser(this.props.currentUser.id);
  }


  render() {
    return (<div>HI</div>)
  }
}

export default Main;
