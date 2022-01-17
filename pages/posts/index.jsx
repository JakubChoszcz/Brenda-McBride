// http://localhost:3000/posts

import Head from "next/head";
import PostsList from "../../components/Posts/PostsList";

const DUMMY_POSTS_DATA = [
    {
        id: 1,
        title: 'Lorem ipsum dolor sit amet',
        type: 'Life Style',
        description: 'Nulla consectetur do excepteur aliquip fugiat labore aliquip officia labore deserunt nulla. Fugiat officia elit nulla reprehenderit do anim. Non ut pariatur commodo pariatur consectetur ipsum sint sunt mollit excepteur cillum aliqua officia.',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in dolor vitae metus consectetur ullamcorper nec vitae dolor. Praesent non dignissim ligula. Aliquam tincidunt sit amet enim quis finibus. Curabitur mollis molestie orci, eget imperdiet est euismod vitae. Suspendisse ac sollicitudin lectus, non suscipit diam. Phasellus sodales urna sit amet tempus aliquam. Sed ac turpis consequat, luctus leo ut, congue elit. Aliquam varius mi arcu, eu vehicula quam vehicula sed. Vivamus quis sem ultricies, ultrices sem vel, tincidunt tortor. Aliquam at lacus pretium, porttitor arcu non, pretium neque. Fusce tempor auctor elementum.Aenean pretium viverra arcu in feugiat. Nunc vitae sagittis justo. Integer metus ante, tincidunt quis dapibus id, dapibus nec felis. Nulla aliquet nibh eget nisl condimentum tristique. Pellentesque id sollicitudin mauris, bibendum lobortis urna. Etiam tempus dolor ac arcu aliquet varius. Etiam blandit consequat lectus sit amet rhoncus. Proin eu urna quam.",
        image: 'https://images.pexels.com/photos/4177735/pexels-photo-4177735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        date: '2022-01-17T11:55:30.222Z'
    },
    {
        id: 2,
        title: 'Lorem ipsum dolor sit amet',
        type: 'Life Style',
        description: 'Nulla consectetur do excepteur aliquip fugiat labore aliquip officia labore deserunt nulla. Fugiat officia elit nulla reprehenderit do anim. Non ut pariatur commodo pariatur consectetur ipsum sint sunt mollit excepteur cillum aliqua officia.',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in dolor vitae metus consectetur ullamcorper nec vitae dolor. Praesent non dignissim ligula. Aliquam tincidunt sit amet enim quis finibus. Curabitur mollis molestie orci, eget imperdiet est euismod vitae. Suspendisse ac sollicitudin lectus, non suscipit diam. Phasellus sodales urna sit amet tempus aliquam. Sed ac turpis consequat, luctus leo ut, congue elit. Aliquam varius mi arcu, eu vehicula quam vehicula sed. Vivamus quis sem ultricies, ultrices sem vel, tincidunt tortor. Aliquam at lacus pretium, porttitor arcu non, pretium neque. Fusce tempor auctor elementum.Aenean pretium viverra arcu in feugiat. Nunc vitae sagittis justo. Integer metus ante, tincidunt quis dapibus id, dapibus nec felis. Nulla aliquet nibh eget nisl condimentum tristique. Pellentesque id sollicitudin mauris, bibendum lobortis urna. Etiam tempus dolor ac arcu aliquet varius. Etiam blandit consequat lectus sit amet rhoncus. Proin eu urna quam.",
        image: 'https://images.pexels.com/photos/4177735/pexels-photo-4177735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        date: '2022-01-17T11:55:30.222Z'
    },
    {
        id: 3,
        title: 'Lorem ipsum dolor sit amet',
        type: 'Life Style',
        description: 'Nulla consectetur do excepteur aliquip fugiat labore aliquip officia labore deserunt nulla. Fugiat officia elit nulla reprehenderit do anim. Non ut pariatur commodo pariatur consectetur ipsum sint sunt mollit excepteur cillum aliqua officia.',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in dolor vitae metus consectetur ullamcorper nec vitae dolor. Praesent non dignissim ligula. Aliquam tincidunt sit amet enim quis finibus. Curabitur mollis molestie orci, eget imperdiet est euismod vitae. Suspendisse ac sollicitudin lectus, non suscipit diam. Phasellus sodales urna sit amet tempus aliquam. Sed ac turpis consequat, luctus leo ut, congue elit. Aliquam varius mi arcu, eu vehicula quam vehicula sed. Vivamus quis sem ultricies, ultrices sem vel, tincidunt tortor. Aliquam at lacus pretium, porttitor arcu non, pretium neque. Fusce tempor auctor elementum.Aenean pretium viverra arcu in feugiat. Nunc vitae sagittis justo. Integer metus ante, tincidunt quis dapibus id, dapibus nec felis. Nulla aliquet nibh eget nisl condimentum tristique. Pellentesque id sollicitudin mauris, bibendum lobortis urna. Etiam tempus dolor ac arcu aliquet varius. Etiam blandit consequat lectus sit amet rhoncus. Proin eu urna quam.",
        image: 'https://images.pexels.com/photos/4177735/pexels-photo-4177735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        date: '2022-01-17T11:55:30.222Z'
    },
    {
        id: 4,
        title: 'Lorem ipsum dolor sit amet',
        type: 'Life Style',
        description: 'Nulla consectetur do excepteur aliquip fugiat labore aliquip officia labore deserunt nulla. Fugiat officia elit nulla reprehenderit do anim. Non ut pariatur commodo pariatur consectetur ipsum sint sunt mollit excepteur cillum aliqua officia.',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in dolor vitae metus consectetur ullamcorper nec vitae dolor. Praesent non dignissim ligula. Aliquam tincidunt sit amet enim quis finibus. Curabitur mollis molestie orci, eget imperdiet est euismod vitae. Suspendisse ac sollicitudin lectus, non suscipit diam. Phasellus sodales urna sit amet tempus aliquam. Sed ac turpis consequat, luctus leo ut, congue elit. Aliquam varius mi arcu, eu vehicula quam vehicula sed. Vivamus quis sem ultricies, ultrices sem vel, tincidunt tortor. Aliquam at lacus pretium, porttitor arcu non, pretium neque. Fusce tempor auctor elementum.Aenean pretium viverra arcu in feugiat. Nunc vitae sagittis justo. Integer metus ante, tincidunt quis dapibus id, dapibus nec felis. Nulla aliquet nibh eget nisl condimentum tristique. Pellentesque id sollicitudin mauris, bibendum lobortis urna. Etiam tempus dolor ac arcu aliquet varius. Etiam blandit consequat lectus sit amet rhoncus. Proin eu urna quam.",
        image: 'https://images.pexels.com/photos/4177735/pexels-photo-4177735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        date: '2022-01-17T11:55:30.222Z'
    },
    {
        id: 5,
        title: 'Lorem ipsum dolor sit amet',
        type: 'Life Style',
        description: 'Nulla consectetur do excepteur aliquip fugiat labore aliquip officia labore deserunt nulla. Fugiat officia elit nulla reprehenderit do anim. Non ut pariatur commodo pariatur consectetur ipsum sint sunt mollit excepteur cillum aliqua officia.',
        content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse in dolor vitae metus consectetur ullamcorper nec vitae dolor. Praesent non dignissim ligula. Aliquam tincidunt sit amet enim quis finibus. Curabitur mollis molestie orci, eget imperdiet est euismod vitae. Suspendisse ac sollicitudin lectus, non suscipit diam. Phasellus sodales urna sit amet tempus aliquam. Sed ac turpis consequat, luctus leo ut, congue elit. Aliquam varius mi arcu, eu vehicula quam vehicula sed. Vivamus quis sem ultricies, ultrices sem vel, tincidunt tortor. Aliquam at lacus pretium, porttitor arcu non, pretium neque. Fusce tempor auctor elementum.Aenean pretium viverra arcu in feugiat. Nunc vitae sagittis justo. Integer metus ante, tincidunt quis dapibus id, dapibus nec felis. Nulla aliquet nibh eget nisl condimentum tristique. Pellentesque id sollicitudin mauris, bibendum lobortis urna. Etiam tempus dolor ac arcu aliquet varius. Etiam blandit consequat lectus sit amet rhoncus. Proin eu urna quam.",
        image: 'https://images.pexels.com/photos/4177735/pexels-photo-4177735.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        date: '2022-01-17T11:55:30.222Z'
    },
]

const Posts = () => {
    return (
        <>
            <Head>
                <title>Brenda McBride - Posts</title>
            </Head>
            <PostsList postsData={DUMMY_POSTS_DATA}/>
        </>
    )
}

export default Posts;