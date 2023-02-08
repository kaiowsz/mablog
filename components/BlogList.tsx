import React from 'react'
import { urlFor } from '../lib/urlFor';
import ClientSideRoute from './ClientSideRoute';
import Post from './Post';

type Props = {
    posts: Post[];
}

function BlogList({posts}: Props) {

    return (
    <div>
        <hr className="border-[#F7AB0A] mb-10"/>

        <div className="grid grid-cols-1 md:grid-cols-2 px-10 gap-10 gap-y-16 pb-24">
            {posts.map(post => (
                <ClientSideRoute key={post._id} route={`/post/${post.slug.current}`}>

                    <Post post={post}/>

                </ClientSideRoute>
            ))}
        </div>
    </div>
    )
}

export default BlogList

