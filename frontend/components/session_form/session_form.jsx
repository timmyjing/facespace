import React from 'react';
import {withRouter} from 'react-router';
import {Link} from 'react-router-dom';
import errorModal from '../modal_errors/modal_error';
import Input from '../user_form/input.jsx'

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


  render() {
    const errorMsg = this.props.errors === undefined ?  null : this.props.errors[0];
    console.log(errorMsg);
    console.log(this.props.errors);
    return (
      <div className="session-form">
        <form className="flex-container" onSubmit={this.handleSubmit}>
          <div className="session-form-div">
          <label>Email or Phone:
             <br />
             <Input errorMsg={errorMsg} className="session-input" type="text" value={this.state.email} onChange={this.handleInput('email')}/>
          </label>
          </div>
          <div className="session-form-div">
            <label>Password:
              <br />
              <Input errorMsg={errorMsg} className="session-input" type="password" value={this.state.password} onChange={this.handleInput('password')}/>
            </label>
              <br />
            <Link to="/"><span className="light-grey">{'Forgot account?'}</span></Link>
          </div>
          <div className="session-form-div">
            <br />
            <button className='login-button' type="submit">Log In</button>
          </div>
        </form>
    </div>);
  }
}


export default withRouter(SessionForm);
