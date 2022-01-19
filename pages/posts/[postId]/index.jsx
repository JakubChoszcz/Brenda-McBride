// http://localhost:3000/posts/[postId]

import { ObjectId } from "mongodb";
import Head from "next/head"
import SelectedPost from "../../../components/Post/SelectedPost";

import { connectToDatabase } from "../../../lib/mongodb";

export const getStaticPaths = async () => {
    const { client, db } = await connectToDatabase();

    const getPosts = await db
        .collection('posts')
        .find({})
        .toArray();

    const posts = JSON.parse(JSON.stringify(getPosts))

    const paths = [];

    posts.map((post) => paths.push({ params: { postId: ObjectId(post._id).toString() } }));

    return {
        paths: paths,
        fallback: false
    }
}

export const getStaticProps = async ({ params }) => {
    const { postId } = params;
    const { client, db } = await connectToDatabase();

    const getPost = await db
        .collection('posts')
        .findOne({ _id: ObjectId(postId) });
    
    const post = JSON.parse(JSON.stringify(getPost));
    
    return {
        props: {
            post
        }
    }
}

const Post = ({ post }) => {
    return (
        <>
            <Head>
                <title>{`Brenda McBride - ${post.title}`}</title>
            </Head>
            <SelectedPost data={post} />
        </>
    )
}

export default Post;
