import PostList from "../components/PostList";
import React from 'react';

const Home = (posts) => {

    return (
        <div>
            <PostList posts={posts}/>
        </div>
    );
};

export default Home;
export async function getStaticProps() {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=6')
    const posts = await res.json()

    return {
        props: {
            posts,
        },
    }
}