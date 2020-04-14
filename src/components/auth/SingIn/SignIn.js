import React, { Component } from 'react'
import { connect } from 'react-redux'
import { signIn } from '../../../store/actions/authActions'
import { NavLink, Redirect } from 'react-router-dom'
import './index.css'

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state)
  }
  render() {
    const { authError, auth } = this.props;
    if (auth.uid) return <Redirect to='/' /> 
    return (
      <div className='container'>
        <div className='lf'><p className='pLF'>LF</p></div>
        <div>
            <div><p className='vhText'>Вход</p><p className='regText'>Регистрация</p></div>
            <form onSubmit={this.handleSubmit} className='form' >
                <div>
                    <label className='emailVh' htmlFor="email">Email</label>
                    <div className='line1Vh'><input className='emailTextVh' type="email" id='email' onChange={this.handleChange} /></div>
                </div>
                <div >
                    <label className='passwordVh' htmlFor="password">Пароль</label>
                    <div className='line2Vh'><input className='passwordTextVh' type="password" id='password' onChange={this.handleChange} /></div>
                </div>
                <div><p className='reg'>Ещё не зарегистрированы?</p>
                    <NavLink to='/signUp'><p className='registration'>Регистрация</p></NavLink>
                </div>
                <div >
                    <button className='btnVh'><p className='btn-textVh'>Войти</p></button>
                    <div className='err'>
                        { authError ? <p>{authError}</p> : null }
                    </div>
                </div>

            </form>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return{
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (creds) => dispatch(signIn(creds))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
