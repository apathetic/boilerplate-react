import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as siteActions from 'store/actions/site';
import * as userActions from 'store/actions/user';

import { Link } from 'react-router-dom';
import './SecondPage.css';

class SecondPage extends Component {
  componentWillMount() {
    this.props.siteActions.fetchSites();
  };

  renderSites() {
    return this.props.site.list.map((post, index) => {
      return (
        <article key={post.sys.id}>
          <h3>{post.fields.title}</h3>
          <p>{post.fields.description}</p>
          date
          URL
          keywords
        </article>
      );
    });
  };

  render() {
    return (
      <div className='bold'>
        <h2>Second Page</h2>
        { this.renderSites() }
        <Link to={'/'}>First</Link>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  site: state.site
});

const mapDispatchToProps = (dispatch) => ({
  userActions: bindActionCreators(userActions, dispatch),
  siteActions: bindActionCreators(siteActions, dispatch)
});


export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SecondPage);
