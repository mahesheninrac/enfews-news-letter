"use client"
import { useRouter } from "next/navigation";

export default function BackButton({ url, title }) {
    const router = useRouter(); 
    return <button onClick={() => router.push(`/${url || ""}`)}>{title}</button>
}