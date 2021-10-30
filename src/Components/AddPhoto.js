import React, { Component } from "react";
import { now } from "../Utilities/Time";

class AddPhoto extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        const link = event.target.elements.link.value;
        const description = event.target.elements.description.value;
        const post = {
            id: String(Math.random()),
            description: description,
            imageLink: link,
            submitted: now(),
        }

        if (link && description) {
            this.props.onAddPhoto(post)
        }
    }

    render() {
        return (
            <div>
                <h1> Add a photo </h1>
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link" />
                        <input type="text" placeholder="Description" name="description" />
                        <button> Post </button>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddPhoto;
