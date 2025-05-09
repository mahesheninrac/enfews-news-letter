import BackButton from "./BackButton";

// components/Header.js
export default function Header() {
    return (
        <header className="p-4 bg-blue-600 text-white">
            <h1>My Awesome App</h1>
            <BackButton url={"blog"} title={"Blog Page"} />
            <BackButton url={"contact"} title={"Contact Page"} />
            <BackButton url={"about"} title={"About Page"} />
            <BackButton url={"work"} title={"Work Page"} />
        </header>
    );
}
