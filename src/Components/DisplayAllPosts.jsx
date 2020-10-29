import React, {useState, useRef } from 'react';
import useDebug from '../hooks/useDebug';
import CreateNewPost from './CreateNewPost';

const DisplayAllPosts = () => {
    const [title, setTitle] = useState("");
    const [content, setContent] = useState("");
    const [allPost, setAllPost] = useState([]);
    const [isCreateNewPost, setIsCreateNewPost] = useState(false);
    
    const getTitle = useRef();
    const getContent = useRef();

   useDebug(title);
   useDebug(content);
   useDebug(allPost);

    const savePostTitleToState = event => {
         setTitle(event.target.value);
    };

    const savePostContentToState = event => {
         setContent(event.target.value);
    };

    const toggleCreateNewPost = () => {
        setIsCreateNewPost(!isCreateNewPost)
    }
      const savePost = event => {
        event.preventDefault();
        const id = Date.now();
        setAllPost([...allPost, { title, content, id }]);
        // console.log(allPosts);
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
    return (
    <React.Fragment>
        <h2>All Posts</h2>
        <br/>
        <br/>
        <button onClick={toggleCreateNewPost}>Create New</button>
    </React.Fragment>
)
};
export default DisplayAllPosts