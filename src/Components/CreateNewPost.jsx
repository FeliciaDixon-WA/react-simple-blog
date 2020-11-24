import { Button, makeStyles } from "@material-ui/core";
import React from "react";
import { ListItem } from "@material-ui/core";

const useStyle = makeStyles((theme) => {
  return {
    button: {
      margin: 8,
    },
    backgroundColor: "#ccc",
  };
});

const CreateNewPost = (props) => {
  const classes = useStyle();
  return (
    <ListItem>
      <form className={classes.backgroundColor} onSubmit={props.savePost}>
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
        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={props.onCancel}
        >
          Cancel
        </Button>

        <Button
          className={classes.button}
          color="primary"
          variant="contained"
          onClick={props.savePost}
        >
          Save Post
        </Button>
      </form>
    </ListItem>
  );
};

export default CreateNewPost;
