import Navbar from '../src/components/Navbar.jsx';
import Hero from "./components/Hero.jsx";
import About from "./components/About.jsx";
import Technologies from "./components/Technologies.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import Contact from "./components/Contact.jsx";
import YouTube from "react-youtube";
import Vimeo from '@u-wave/react-vimeo';

const App = () => {
    return (
        <div className="overflow-x-hidden antialiased selection:bg-cyan-300 selection:text-cyan-900 text-neutral-300">
            <div className="fixed top-0 -z-10 w-full h-full">
                <div
                    className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
            </div>
            <div className="container mx-auto px-8">
                <Navbar/>
                <Hero/>
                <About/>
                <Technologies/>
                <Experience/>
                <Projects/>
                <Contact/>
                <YouTube className="flex justify-center items-center mb-10 rounded" videoId={"NCsnbvv1thc"} />
                <div className="flex justify-center items-center mb-10 rounded">
                    <Vimeo
                        video={347119375}
                        autoplay
                    />
                </div>
            </div>
        </div>
    )
}

export default App;