// http://localhost:3000/

import Head from 'next/head'
import AboutContainer from '../components/Home/AboutContainer/AboutContainer';
import LatestPosts from '../components/Home/LatestPosts/LastestPosts';
import PostsListHome from '../components/Home/PostsListHome/PostsListHome';

const Home = () => {
  return (
    <>
    <Head>
      <title>Brenda McBride</title>
    </Head>
      <AboutContainer/>
      <LatestPosts/>
      <PostsListHome/>
    </>
  ) 
}

export default Home;