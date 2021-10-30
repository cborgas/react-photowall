import React, { Component } from "react";
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import { Route, Switch } from "react-router-dom";
import { now } from "../Utilities/Time";

class Main extends Component {
  constructor() {
    super();
    this.state = {
      posts: [],
      screen: "photos", // photos, add
    };
    this.removePhoto = this.removePhoto.bind(this);
    this.addPhoto = this.addPhoto.bind(this);
  }

  removePhoto(postRemoved) {
    this.setState((state) => ({
      posts: state.posts.filter((post) => post !== postRemoved),
    }));
  }

  addPhoto(postSubmitted) {
    this.setState((state) => ({
      posts: state.posts.concat([postSubmitted])
    }));
  }

  componentDidMount() {
    this.setState({ posts: getPosts() });
  }

  render() {
    return (
      <Switch>
        <Route path="/add" render={({history}) => (
          <AddPhoto onAddPhoto={(addedPost) => {
            this.addPhoto(addedPost);
            // Go back to home
            history.push('/');
          }}/>
        )}/>

        <Route
          exactpath="/"
          render={() => (
            <div>
              <Title title={"Photowall"} />
              <PhotoWall
                posts={this.state.posts}
                onRemovePhoto={this.removePhoto}
              />
            </div>
          )}
        ></Route>
      </Switch>
    );
  }
}

function getPosts() {
  return [
    {
      id: "0",
      description: "beautiful landscape",
      imageLink:
        "https://image.jimcdn.com/app/cms/image/transf/none/path/sa6549607c78f5c11/image/i4eeacaa2dbf12d6d/version/1490299332/most-beautiful-landscapes-in-europe-lofoten-european-best-destinations-copyright-iakov-kalinin.jpg" +
        "3919321_1443393332_n.jpg",
      submitted: now(),
    },
    {
      id: "1",
      description: "Aliens???",
      imageLink: "https://s3.india.com/wp-content/uploads/2017/12/rocket.jpg",
      submitted: now(),
    },
    {
      id: "2",
      description: "On a vacation!",
      imageLink:
        "https://fm.cnbc.com/applications/cnbc.com/resources/img/editorial/2017/08/24/104670887-VacationExplainsTHUMBWEB.1910x1000.jpg",
      submitted: now(),
    },
  ];
}

export default Main;
