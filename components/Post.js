import React from 'react';
import style from '../styles/post.module.css';
const Post = ({post}) => {

    return (
        <a href={'/post/'+post.id} className ={style.post+' p-2 m-4 col-sm-12 col-lg-3 col-md-offset-1'}>
            <div className='d-flex justify-content-center'>
            <img className={style.postImage} src={'https://picsum.photos/200?random='+Math.random()}/>
            </div>
            <div style={{textAlign:"center"}} className="d-flex justify-content-center">
            <p>{post.title}</p>
            </div>
        </a>
    );
}

export default Post;