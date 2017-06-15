import React from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Headroom from 'react-headroom';
import styled from 'styled-components';
import Logout from './Logout';
import Upload from './Upload';

const H2 = styled.h2`
  font-size: 2em;
`;

const Div = styled.div`
  background: #eee;
  padding: 1em;
  font-size: 1.25em;
  font-weight: bold;
`;

const SignoutWrapper = styled.div`
  float: right;
`;

const WelcomeGreeting = ({ name }) => (
  <p> {name} <Link to="/feed"></Link></p>
);

function Nav({ user }) {
  return (
    <Headroom>
      <Div className="App-header">
        <H2>Tableau</H2>
        <SignoutWrapper>
        {user ? <WelcomeGreeting name={user.username} /> : <Redirect to="/" />}
        <Logout />
        </SignoutWrapper>
        <Upload user={user}/>
      </Div>
    </Headroom>
  );
}

const mapStateToProps = state => ({ user: state.user });

export default connect(
  mapStateToProps
)(Nav);
