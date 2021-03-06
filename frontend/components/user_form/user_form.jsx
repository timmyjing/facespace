import React from 'react';
import Input from './input';

class UserForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      first_name: "",
      last_name: "",
      birth_date: "1993-06-03",
      gender: "",
      password: ""
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleInput(field) {
    return (e) => {
      this.setState({[field]: e.target.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.submit(this.state);
  }

  render() {

    const {errors} = this.props;
    const genderInputWarnings = errors.gender ? "warning" : "";

    return (
      <div className="create-user-form">
        <h1 className="important-text">Sign Up</h1>
        <h2 className="light-text">It's free and always will be.</h2>
        <form>
          <div className="flex-container">
            <Input errorMsg={errors.first} className="input-short" type="text" placeholder="First name" value={this.state.first_name} onChange={this.handleInput('first_name')}/>
            <Input errorMsg={errors.last} className="input-short" type="text" placeholder="Last name" value={this.state.last_name} onChange={this.handleInput('last_name')}/>
          </div>
            <Input errorMsg={errors.email} className="input-long" type="text" placeholder="Email" value={this.state.email} onChange={this.handleInput('email')}/>
            <Input errorMsg={errors.pw} className="input-long" type="password" placeholder="New password" value={this.state.password} onChange={this.handleInput('password')}/>
            <br />
            <label>Birthday</label>
          <div className="flex-container">
            <div>
              <Input errorMsg={errors.birth} type="date" value={this.state.birth_date} onChange={this.handleInput('birth_date')}/>
            </div>
            <p className="splash-link">{'Why do I need to provide my birthday?'}</p>
          </div>

          <form className="flex-container">
              <div className={`gender-input ${genderInputWarnings}`}>
                <Input errorMsg={errors.gender} type="radio" name="gender" value="female" onChange={this.handleInput('gender')} />
                <label for="gender-female">Female</label>
              </div>

              <div className={`gender-input ${genderInputWarnings}`}>
                <Input errorMsg={errors.gender} type="radio" name="gender" value="male" onChange={this.handleInput('gender')} />
                <label for="gender-male">Male</label>
              </div>
          </form>


          <p className="splash-policy">By clicking Sign Up, you agree to our <span className="splash-link">Terms, Data Policy</span> and <span className="splash-link">Cookies Policy</span>. You may receive SMS Notifications from us and can opt out any time.</p>

          <button id="sign-up-button" onClick={this.handleSubmit} type="submit">Sign Up</button>
        </form>
      </div>
    );
  }
}

export default UserForm;
