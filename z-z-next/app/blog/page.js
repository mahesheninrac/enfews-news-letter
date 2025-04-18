// app/blog/page.js

import Link from 'next/link';

async function getAllPost() {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=10")
    return res.json();
}

export default async function BlogList() {
    const posts = await getAllPost()

    return (
        <div>
            <h1>Blog List</h1>
            <ul>
                {posts.map(post => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            <Link href={`/about`}>
                <button>Go back to about page</button>
            </Link>
        </div>
    );
}
