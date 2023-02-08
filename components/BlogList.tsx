import React from 'react'

type Props = {
    posts: Post[];
}

function BlogList({posts}: Props) {

    console.log(posts.length)

    return (
    <div>
        <hr className="border-[#F7AB0A] mb-10"/>
    </div>
    )
}

export default BlogList