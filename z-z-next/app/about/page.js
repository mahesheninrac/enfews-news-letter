// app/about/page.js
import Team from './components/Team';
import Mission from './components/Mission';

export default function AboutPage() {
    return (
        <div>
            <h1>About Us</h1>
            <Mission />
            <Team />
        </div>
    );
}
