import React, { Component } from "react";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route, Switch, Link } from "react-router-dom";

class Main extends Component {
  render() {
    return (
      <div>
        <h1>
          <Link to="/"> PhotoWall </Link>
        </h1>
        <Switch>
          <Route path="/add" render={({history}) => (
            <AddPhoto {...this.props} history={history}/>
          )}/>

          <Route
            exactpath="/"
            render={() => (
              <div>
                <PhotoWall {...this.props}/>
              </div>
            )}
          ></Route>
        </Switch>
      </div>
    );
  }
}

export default Main;
