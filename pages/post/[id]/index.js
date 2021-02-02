import React from 'react';

const SinglePost = ({post}) => {
    return (
        <div style={{ marginTop:'20px'}}>
            <div className='container'>
                <div className='d-flex justify-content-center'>
                <img style={{borderRadius:'50%'}}  src='https://picsum.photos/400'/>
                </div>
                <h3 style={{textAlign:'center'}} className='d-flex justify-content-center'>
                {post.title}
            </h3>
                <hr/>
                <p style={{textAlign:'center'}}>
                    {post.body}
                </p>
            </div>

        </div>
    );
};

export const getServerSideProps = async(context)=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/'+context.params.id);
    const post = await res.json();
    return{
        props:{
            post:post
        }
    }
}

export default SinglePost;