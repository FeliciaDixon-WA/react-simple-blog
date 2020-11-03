import React from 'react';

const Post = ({ title, content, editPost, id, deletePost }) => {
    return (
    <React.Fragment>
    <section>
        <h3>{title}</h3>
        <p>{content}</p>
        <button color="primary" variant="contained" onClick = { () => editPost(id)}>Edit</button>
        <button color="primary" variant="contained" onClick ={ () => deletePost(id)}>Delete</button>
    </section>
    </React.Fragment>
    );
};
export default Post