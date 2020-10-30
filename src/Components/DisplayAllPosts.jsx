import React, {useState, useRef } from 'react';
import useDebug from '../hooks/useDebug';
import CreateNewPost from './CreateNewPost';
import Post from './Post';

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
        setAllPost([...allPost, { title, content}]);
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
        {!allPost.length ? (
          <div> 
            <h3>There is nothing to see here!</h3>
          </div>
        ) : (
          allPost.map(eachPost => {
            return (
              <Post
                id={eachPost.id}
                key={eachPost.id}
                title={eachPost.title}
                content={eachPost.content}
                />
            );
          })
        )}

        <br/>
        <br/>
        <button onClick={toggleCreateNewPost}>Create New</button>
    </React.Fragment>
  )
};
export default DisplayAllPosts