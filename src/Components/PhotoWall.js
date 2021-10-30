import React from "react";
import Photo from "./Photo";
import { Link } from "react-router-dom";

function PhotoWall(props) {
  return (
    <div>
      <Link className="add-icon" to="/add"></Link>
      <div className="photo-grid">
        {props.posts
          .sort((first, second) => second.submitted - first.submitted)
          .map((post, index) => (
            <Photo key={index} post={post} {...props} index={index}/>
          )
        )}
      </div>
    </div>
  );
}

export default PhotoWall;
