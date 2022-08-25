import { AiOutlineLinkedin, AiOutlineGithub } from 'react-icons/ai';

function Footer() {
    const logo = "</Alex-Ball\\>"
    
    return (
        <footer className="Footer">
            <h2>{logo}</h2>
            <h3>Frontend Web Developer <span>Portfolio</span></h3>
            <p>Made by <span>{logo}</span> to show my work as a Developer.</p>
            <ul className="social-links_Container">
                <li><a href="https://www.linkedin.com/in/alexball03/"><AiOutlineLinkedin />|LinkedIn</a></li>
                <li><a href="https://github.com/AlexBall03"><AiOutlineGithub />|GitHub</a></li>
            </ul>
        </footer>
    );
}

export default Footer;