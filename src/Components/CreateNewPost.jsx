import { Button } from "@material-ui/core";
import React from "react";

const CreateNewPost = props => {
  return (
    <React.Fragment>
      <form onSubmit={props.savePost}>
        <h1>Create New Post</h1>
        <input
          type="text"
          onChange={props.savePostTitleToState}
          placeholder="title"
          size="39"
          required
          ref={props.getTitle}
        ></input>
        <br />
        <br />
        <textarea
          onChange={props.savePostContentToState}
          placeholder="contents"
          rows="8"
          cols="41"
          required
          ref={props.getContent}
        ></textarea>
        <br />
        <br />
        <Button color="primary" variant="contained" onClick={props.savePost}>Save Post</Button>
      </form>
    </React.Fragment>
  );
};

export default CreateNewPost;
