// app/blog/[slug]/page.js

import { use } from "react";
import Link from "next/link";

export async function generateMetadata({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
    const post = await res.json();

    return {
        title: `${post.title} | Eninrac Insights`,
        description: post.body.slice(0, 160),
    };
}

export default async function BlogPost({ params }) {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${params.slug}`);
    const post = await res.json();

    return (
        <div>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
            <Link href="/blog">
                <button>Back to blog list</button>
            </Link>
        </div>
    );
}
