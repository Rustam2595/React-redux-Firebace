import React from 'react'
import { connect } from 'react-redux'
import { signOut } from '../../store/actions/authActions'
import MapContainer from  './GoogleMap'
import './index.css'

const SignedInLinks = (props) => {
  return (
    <div className="container1">
        <div className="top1">
            <p className='lf1'>LF</p>
            <p className='bz1'>Будем знакомы!</p>
            <p className='hear1'>Вы здесь</p>
        </div>
        <div className="googleMap1">
            <MapContainer/>
        </div>
        <div className="bottom1">
            <button className="btn1" onClick={props.signOut}><p className='text1'>Понятно, я пойду!</p></button>
        </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}

export default connect(null, mapDispatchToProps)(SignedInLinks)
