import React from 'react';
import Post from "./Post";
const PostList = ({ posts })=> {

return (
    <div style={{marginTop:"30px"}} className='container'>
        <div className="row">
            {posts.posts.map((post) => (
                <Post key={post.id} post={post}/>
            ))}
        </div>
    </div>
    )
}

// This function gets called at build time on server-side.
// It won't be called on client-side, so you can even do
// direct database queries. See the "Technical details" section.


export default PostList