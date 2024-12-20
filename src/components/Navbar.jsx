import logo from '../assets/kevinRushLogo.png';
import {FaLinkedin} from 'react-icons/fa';
import {FaGithub} from 'react-icons/fa';
import {FaTwitter} from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className="mb-20 flex items-center justify-between py-6">
            <div className="flex flex-shrink-0 items-center">
                <img className="mx-2 w-10" src={logo} alt={"logo"}/>
            </div>
            <div className="m-8 flex items-center justify-center gap-4 text-2xl cursor-pointer">
                <a href={"https://www.linkedin.com/"} target={"_blank"}><FaLinkedin/></a>
                <a href={"https://github.com/"} target={"_blank"}><FaGithub/></a>
                <a href={"https://x.com/"} target={"_blank"}><FaTwitter/></a>
                <a href={"https://www.instagram.com/"} target={"_blank"}><FaInstagram/></a>
            </div>
        </nav>
    )
}

export default Navbar;