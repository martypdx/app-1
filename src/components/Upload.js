import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { request } from '../api/request';
import { connect } from 'react-redux';
import { uploadPost } from '../actions';
import styled from 'styled-components';

const P = styled.p`
  font-size: .75em;
`;

class Upload extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(file) {
    if (file == null) alert('No file selected.');
    this.props.uploadPost(file);
  }

  render() {

    return (
      <div >
        <P id="status">Add an image</P>
        <form onSubmit={(e) => {
          e.preventDefault();
          this.handleSubmit(e.target['file-input'].files[0]);
          e.target.reset();
        }}>
          <input type="file" accept="image/*" id="file-input" />
          <input type="submit" />
        </form>
      </div >
    );
  }
}

export default connect(
  null,
  dispatch => ({ 
    uploadPost(file) {
      dispatch(uploadPost(file));
    }
  })
)(Upload);
