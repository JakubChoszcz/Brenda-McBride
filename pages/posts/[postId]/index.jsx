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

    client.close();

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

    const data = {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        type: 'Life Style',
        description: 'Nulla consectetur do excepteur aliquip fugiat labore aliquip officia labore deserunt nulla. Fugiat officia elit nulla reprehenderit do anim. Non ut pariatur commodo pariatur consectetur ipsum sint sunt mollit excepteur cillum aliqua officia.',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in dolor vitae metus consectetur ullamcorper nec vitae dolor. Praesent non dignissim ligula. Aliquam tincidunt sit amet enim quis finibus. Curabitur mollis molestie orci, eget imperdiet est euismod vitae. Suspendisse ac sollicitudin lectus, non suscipit diam. Phasellus sodales urna sit amet tempus aliquam. Sed ac turpis consequat, luctus leo ut, congue elit. Aliquam varius mi arcu, eu vehicula quam vehicula sed. Vivamus quis sem ultricies, ultrices sem vel, tincidunt tortor. Aliquam at lacus pretium, porttitor arcu non, pretium neque. Fusce tempor auctor elementum.Aenean pretium viverra arcu in feugiat. Nunc vitae sagittis justo. Integer metus ante, tincidunt quis dapibus id, dapibus nec felis. Nulla aliquet nibh eget nisl condimentum tristique. Pellentesque id sollicitudin mauris, bibendum lobortis urna. Etiam tempus dolor ac arcu aliquet varius. Etiam blandit consequat lectus sit amet rhoncus. Proin eu urna quam.",
        image: 'https://images.pexels.com/photos/3817547/pexels-photo-3817547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=375&w=630',
        date: '2022-01-17T11:55:30.222Z'
    }
    
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