import Image from "next/image";

// app/about/components/Team.js
export default function Team() {
    return (
        <section>
            <h2>Our Team</h2>
            <p>Meet the amazing folks behind our company.</p>
            <Image
                src="/banner.jpg" 
                alt="Banner" 
                fill               
                style={{ objectFit: "cover" }} 
                sizes="(max-width: 768px)" 
            /> 
        </section> 
    );
}
