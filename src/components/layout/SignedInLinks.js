import React from 'react';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authActions'

const SignedInLinks = (props) => {
  return ( 
    <ul className="right">
      <li><NavLink to='/'>Profile</NavLink></li>
      <li><NavLink to='/'>Job Applications</NavLink></li>
      <li><NavLink to='/'>{props.profile.firstname}</NavLink></li>
      <li><a onClick={props.signOut}>Sign Out</a></li>
    </ul>
   );
}

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
 
export default connect(null, mapDispatchToProps) (SignedInLinks);