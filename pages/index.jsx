// http://localhost:3000/

import Head from 'next/head'
import AboutContainer from '../components/Home/AboutContainer/AboutContainer';
import LatestPosts from '../components/Home/LatestPosts/LastestPosts';
import PostsListHome from '../components/Home/PostsListHome/PostsListHome';

import { connectToDatabase } from '../lib/mongodb';

export const getStaticProps = async () => {
  const { client, db } = await connectToDatabase();

  const getPosts = await db
    .collection('posts')
    .find({})
    .limit(5)
    .toArray();

  const posts = JSON.parse(JSON.stringify(getPosts));

  return {
    props: {
      posts
    }
  }
}

const Home = ({ posts }) => {
  const latesPostsData = posts.slice(0, 2);
  const postsListHomeData = posts.slice(2);

  return (
    <>
    <Head>
      <title>Brenda McBride</title>
    </Head>
      <AboutContainer/>
      <LatestPosts data={latesPostsData}/>
      <PostsListHome data={postsListHomeData}/>
    </>
  ) 
}

export default Home;