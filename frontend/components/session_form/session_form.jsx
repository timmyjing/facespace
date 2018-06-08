import React from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import errorModal from '../modal_errors/modal_error';

class SessionForm extends React.Component {
  constructor(props){
    super(props);
    this.state = {email: "", password: ""};

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return (e) => this.setState({[field]: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  displayErrors() {
    const { error } = this.props;
    return <ErrorModal errorMsg={error[0]} />;
  }

  render() {

    const errorModal = (this.props.errors[0] !== undefined) ? (<div><div className="modal-error"><p>{this.props.errors[0]}</p></div><div className="modal-error-triangle"></div></div>) : "";

    return (
      <div className="session-form">
        <form className="flex-container" onSubmit={this.handleSubmit}>
          <div>
          <label>Email or Phone:
            <br />
            {errorModal}
            <input className="session-input" type="text" value={this.state.email} onChange={this.handleInput('email')}/>
          </label>
          </div>
          <div>
            <label>Password:
              <br />
              <input className="session-input" type="password" value={this.state.password} onChange={this.handleInput('password')}/>
            </label>
              <br />
            <Link to="/"><span className="light-grey">{'Forgot account?'}</span></Link>
          </div>
          <div>
            <br />
            <button className='login-button' type="submit">Log In</button>
          </div>
        </form>
    </div>);
  }
}


export default withRouter(SessionForm);
