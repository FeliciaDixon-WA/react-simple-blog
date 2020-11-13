import { Button } from "@material-ui/core";
import React from "react";
import CancelIcon from '@material-ui/icons/Cancel';
import IconButton from '@material-ui/core/IconButton';
import { ListItem, ListItemText } from '@material-ui/core';

const CreateNewPost = props => {
  return (
    <ListItem>
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

        <IconButton edge="end" aria-label="cancel" >
            <CancelIcon color="primary" variant="contained" />
        </IconButton>

      </form>
    </ListItem>
  );
};

export default CreateNewPost;
