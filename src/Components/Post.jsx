import { ListItem, ListItemText } from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import { getTwentyWords } from '../helpers/getWords';



const Post = ({ title, content, editPost, id, deletePost }) => {
    return (
    <ListItem>
    <ListItemText
        primary={title}
        secondary={getTwentyWords(content)}
                
    />

            
          
        <IconButton edge="end" aria-label="edit" onClick = { () => editPost(id)} >
            <EditIcon color="primary" variant="contained" />
            </IconButton>
            
        <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="delete" onClick ={ () => deletePost(id)} >
                <DeleteIcon color="primary" variant="contained" />
            </IconButton>
        </ListItemSecondaryAction>
    </ListItem> 
    );
};
export default Post