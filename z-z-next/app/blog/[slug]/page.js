export const dynamicParams = false
import Link from "next/link";
export async function generateMetadata({ params }) {
    const { slug } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    if (!res.ok) {
        return { title: "Post Not Found" };
    }
    const post = await res.json();
    return {
        title: `${post.title} | Eninrac Insights`,
        description: post.body.slice(0, 160),
    };
}

export default async function BlogPost({ params }) {
    const { slug } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${slug}`);
    if (!res.ok) {
        return <div>Post not found</div>;
    }
    const post = await res.json();

    return (
        <div style={{ padding: "2rem" }}>
            <h2 style={{ fontSize: "2rem", marginBottom: "1rem" }}>{post.title}</h2>
            <p style={{ lineHeight: "1.6" }}>{post.body}</p>
            <Link href="/blog">
                <button
                    style={{
                        marginTop: "1rem",
                        padding: "0.5rem 1rem",
                        background: "#0070f3",
                        color: "white",
                        border: "none",
                        borderRadius: "4px",
                        cursor: "pointer"
                    }}
                >
                    Omnicore Infographics
                </button>
            </Link>
        </div>
    );
}
