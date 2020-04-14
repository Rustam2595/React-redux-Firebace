import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import { signUp } from '../../../store/actions/authActions'
import './registration.css'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  render() {
    const { auth, authError } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className='container'>
          <div className='lf'><p className='pLF'>LF</p></div>
          <div className='text'><p className='vText'>Вход</p><p className='rText'>Регистрация</p></div>
        <form onSubmit={this.handleSubmit}>
          <div>
              <p className='photo'>Фото</p><span className='circle'></span>
          </div>
          <div>
            <label className='email' htmlFor="email">Email</label>
            <div className='line1'> <input className='emailText' type="email" id='email' onChange={this.handleChange} /></div>
          </div>
          <div>
            <label  className='password' htmlFor="password">Password</label>
              <div className='line2'><input className='passwordText' type="password" id='password' onChange={this.handleChange} /></div>
          </div>
          <div>
              <span>
                  <input className='checkbox' type='checkbox' id='checkbox'/> <span className='checkText'>Я согласен с <a href="https://vk.com" target="_blank" rel="noopener noreferrer">Политикой Конфиденциальности</a></span>
              </span>
          </div>
          <div >
              <button className='btn'><p className='btn-text'>Регистрация</p></button>
            <div className='err'>
              { authError ? <p>{authError}</p> : null }
            </div>
          </div>
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}

const mapDispatchToProps = (dispatch)=> {
  return {
    signUp: (creds) => dispatch(signUp(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
