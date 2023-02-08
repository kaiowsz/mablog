import React from 'react'
import { urlFor } from '../lib/urlFor'

type Props = {
    post: Post;
}

function Post({post}: Props) {
  return (
    <div className="group cursor-pointer flex flex-col rounded-lg">
        <div className="relative w-full h-80 drop-shadow-xl group-hover:scale-105 transition-transform duration-200 ease-out">
            <img src={urlFor(post.mainImage).url()} alt={post.author.name} className="object-cover object-left lg:object-center w-full h-full" />
            <div className="absolute bottom-0 w-full bg-opacity-20 bg-black backdrop-blur-lg rounded drop-shadow-lg text-white p-5 flex justify-between">
                <div>
                    <p className="font-bold">{post.title}</p>
                    <p>{new Date(post._createdAt).toLocaleDateString("en-US", {
                        day: "numeric",
                        month: "short",
                        year: "numeric"
                    })}</p>
                </div>

                <div className="flex flex-col md:flex-row gap-y-2 md:gap-x-2 items-center">
                    {post.categories.map(category => (
                        <div className="bg-[#F7AB0A] text-center text-black px-3 py-1 rounded-full text-sm font-semibold">
                            <p>{category.title}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>

        <div className="mt-5 flex-1">
            <p className="underline text-lg font-bold">{post.title}</p>
            <p className="text-gray-500 line-clamp-2">{post.description}</p>
        </div>

        <p className="mt-5 font-bold flex items-center group-hover:underline">
            Read Post
        </p>

    </div>
  )
}

export default Post