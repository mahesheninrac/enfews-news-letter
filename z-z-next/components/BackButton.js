"use client"
import { useRouter } from "next/navigation";

export default function BackButton({ url, title }) {
    const router = useRouter(); 
    return <button className="backbutton" onClick={() => router.push(`/${url || ""}`)}>{title}</button>
}