import React from 'react';
import { Route, Switch, withRouter, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';

import Layout from './hoc/Layout/Layout';

import Welcome from './containers/Welcome/Welcome';
import Auth from './containers/Auth/Auth';
import Users from './containers/Users/Users';
import Albums from './containers/Albums/Albums';
import Photos from './containers/Photos/Photos';
import Logout from './containers/Auth/Logout/Logout';
import * as actions from './store/actions/index';


class App extends React.Component {

  componentDidMount () {
    this.props.onTryAutoSignup();
  }



  render(){

    let routes = (
      <Switch>
        <Route path="/auth" component={Auth} />
        <Route path="/" exact component={Welcome} />
        <Redirect to="/" />
      </Switch>
    );
  
    if (this.props.isAuth ) {
      routes = (
        <Switch>
          <Route path="/users" component={Users} />
          <Route path="/albums" component={Albums} />
          <Route path="/photos" component={Photos} />
          <Route path="/logout" component={Logout} />
          <Route path="/auth" component={Auth} />
          <Route path="/" exact component={Welcome} />
          <Redirect to="/" />
        </Switch>
      );
    }

      return (
        <div className="App">
          <Layout>
             {routes}
          </Layout>
        </div>
      )
  }

}

const mapStateToProps = state => {
  return {
    isAuth: state.auth.token !== null
  };
};


const mapDispatchToProps = dispatch => {
  return {
    onTryAutoSignup: () => dispatch( actions.authCheckState() )
  };
};

export default withRouter( connect( mapStateToProps, mapDispatchToProps )( App ) );
