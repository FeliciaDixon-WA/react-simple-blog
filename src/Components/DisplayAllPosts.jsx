import React, {useState, useRef } from 'react';
import useDebug from '../hooks/useDebug';
import CreateNewPost from './CreateNewPost';
import Post from './Post';
import ModifyPost from './ModifyPost';
import { Button } from '@material-ui/core';
// import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     maxWidth: '36ch',
//     backgroundColor: theme.palette.background.paper,
//   },
//   inline: {
//     display: 'inline',
//   },
// }));

const DisplayAllPosts = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [allPost, setAllPost] = useState([]);
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);
    const [isModifyPost, setIsModifyPost] = useState(false);
    const [editPostId, setEditPostId] = useState("");
    
    const getTitle = useRef();
    const getContent = useRef();

   useDebug(title);
   useDebug(content);
   useDebug(allPost);
   useDebug(editPostId);

    const savePostTitleToState = event => {
         setTitle(event.target.value);
    };

    const savePostContentToState = event => {
         setContent(event.target.value);
    };

    const toggleCreateNewPost = () => {
        setIsCreateNewPost(!isCreateNewPost)
    }

    const toggleModifyPostComponent = () => {
      setIsModifyPost(!isModifyPost)
    }

    const editPost = id => {
      setEditPostId(id);
      toggleModifyPostComponent();
    };

    const deletePost = id => {
      const modifiedPost = allPost.filter(eachPost => {
        return eachPost.id!== id;
      });
      setAllPost(modifiedPost);
    };

    const updatePost = (event) => {
      event.preventDefault();
      const updatePost = allPost.map(eachPost => {
        if(eachPost.id === editPostId) {
          return {
            ...eachPost,
            title: title || eachPost.title,
            content: content || eachPost.content
          };
        }
        return eachPost;
      });
      setAllPost(updatePost);
      toggleModifyPostComponent();
    }

      const savePost = event => {
        event.preventDefault();
        const id = Date.now();
        setAllPost([...allPost, { title, content, id}]); 
        setTitle("");
        setContent("");
        getTitle.current.value = "";
        getContent.current.value = "";
        toggleCreateNewPost()
      };
    if(isCreateNewPost){
      return (
        <React.Fragment>
          <CreateNewPost
            savePostTitleToState={savePostTitleToState}
            savePostContentToState={savePostContentToState}
            getTitle={getTitle}
            getContent={getContent}
            savePost={savePost}
          />
        </React.Fragment>
      );
    }
    else if (isModifyPost){
      const post = allPost.find(post => {
        return post.id === editPostId;
      });
      return (
        <ModifyPost 
          title={post.title}
          content={post.content}
          updatePost={updatePost}
          savePostTitleToState={savePostTitleToState}
          savePostContentToState={savePostContentToState}
        />
      );
    }
    return (
    <React.Fragment>
        <h2>All Posts</h2>
        {!allPost.length ? (
          <div> 
            <h3>There is nothing to see here!</h3>
          </div>
        ) : (
            <List>
              {allPost.map(eachPost => {
                return (
                  <Post
                    id={eachPost.id}
                    key={eachPost.id}
                    title={eachPost.title}
                    content={eachPost.content}
                    editPost={editPost}
                    deletePost={deletePost}
                  />);
              })
              }
            </List>
          
            
        )}

        <br/>
        <br/>
        <Button color="primary" variant="contained" onClick={toggleCreateNewPost}>Create New</Button>
    </React.Fragment>
  )
};
export default DisplayAllPosts