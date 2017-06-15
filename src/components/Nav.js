import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
import styled from 'styled-components';
import Logout from './Logout';
import Upload from './Upload';

const Div = styled.div`
  background: lightgrey;
  padding: 1em;
  font-size: 1.25em;
  font-weight: bold;
`;

const Span = styled.span`
  float: right;
`;

const WelcomeGreeting = ({ name }) => (
  <p> {name} <Link to="/feed"></Link></p>
);

function Nav({ user }) {
  return (
    <Headroom>
      <Div className="App-header">
        <h2>Tableau</h2>
        <Span><Logout /></Span>
        {user ? <WelcomeGreeting name={user.username} /> : <Redirect to="/" />}
        <Upload user={user}/>
      </Div>
    </Headroom>
  );
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps
)(Nav);
