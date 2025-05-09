import BackButton from "@/components/BackButton";
import Link from "next/link";


export default async function WorkPage() {
    const data = await fetch('https://api.vercel.app/blog')
    const posts = await data.json();
    if (!posts) {
        <div>Loading....</div>
    }
    return (
        <div>
            <h2>
                WorkPagepage
            </h2>
            <div>
                <ul>
                    {posts.map((post) => (
                        <li key={post.id}>
                            <Link href={`/work/${encodeURIComponent(post.title.toLowerCase().replace(/\s+/g, '-'))}`}>
                                {post.title}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            <BackButton url={"/"} title={"back to Home page"} />
        </div>
    )
}