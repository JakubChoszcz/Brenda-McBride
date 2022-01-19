// http://localhost:3000/posts

import Head from "next/head";

import { useState } from "react";

import PostsList from "../../components/Posts/PostsList";

import { connectToDatabase } from "../../lib/mongodb";

export const getServerSideProps = async () => {
    const { client, db } = await connectToDatabase();

    const getPosts = await db
        .collection("posts")
        .find({})
        .limit(6)
        .toArray();

    const data = JSON.parse(JSON.stringify(getPosts));

    return {
        props: {
            data
        }
    }
}

const Posts = ({ data }) => {
    const [posts, setPosts] = useState(data)

    const [skip, setSkip] = useState(6);
    const [limit, setLimit] = useState(6);

    const getMorePosts = async () => {
        const res = await fetch(`/api/posts/getMorePosts?skip=${skip}&limit=${limit}`, {
            method: 'GET'
        })

        const NewPosts = await res.json();

        setPosts([ ...posts, ...NewPosts ]);

        setSkip(skip + limit)
    }

    return (
        <>
            <Head>
                <title>Brenda McBride - Posts</title>
            </Head>
            <PostsList postsData={posts} getMorePosts={getMorePosts}/>
        </>
    )
}

export default Posts;