// app/about/components/Mission.js
"use client"
import BackButton from '@/components/BackButton';
import { useRouter } from 'next/navigation';
export default function Mission() {

    const router = useRouter()
    return (
        <section>
            <h2>Our Mission</h2>
            <BackButton url={"blog"} title={"Go to Blog Page"} />
            <p>We're here to change the world with code 💻✨</p>
        </section>
    );
}
