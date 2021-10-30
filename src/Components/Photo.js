import React from "react";

function Photo({ post, onRemovePhoto }) {
  return (
    <figure className="figure" data-submittd={post.submitted}>
      <img className="photo" src={post.imageLink} alt={post.description} />
      <figcaption>
        <p> {post.description} </p>
      </figcaption>
      <div className="button-container">
        <button className="remove-button" onClick={() => {onRemovePhoto(post)}} > Remove </button>
      </div>
    </figure>
  );
}

export default Photo;
