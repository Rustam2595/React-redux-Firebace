import React from 'react'
import SignedInLinks from './SignedInLinks'
import { connect } from 'react-redux'

const Navbar = (props) => {
  const { auth } = props;
  const links = auth.uid ? <SignedInLinks  /> : null;

  return (
      <div>
        {links}
      </div>
  )
}

const mapStateToProps = (state) => {
  return{
    auth: state.firebase.auth,
  }
}

export default connect(mapStateToProps)(Navbar)
