import { Button, makeStyles } from "@material-ui/core";
import React from "react";

const useStyle = makeStyles((theme) => {
  return {
    root: {
      backgroundColor: "red",
      padding: theme.spacing(2)
    }
  }
})

const ModifyPost = props => {
  const classes = useStyle();
  return (
    <React.Fragment>
      <form className={classes.root}>
        <h1>Modify Post</h1>
        <input
          defaultValue={props.title}
          onChange={props.savePostTitleToState}
          placeholder="title"
          size="39"
        ></input>
        <br />
        <br />
        <textarea
          defaultValue={props.content}
          placeholder="contents"
          onChange={props.savePostContentToState}
          rows="8"
          cols="41"
        ></textarea>
        <br />
        <br />
        <Button color="primary" variant="outlined" onClick ={props.updatePost}>Update Post</Button>
      </form>
    </React.Fragment>
  );
};
export default ModifyPost;
