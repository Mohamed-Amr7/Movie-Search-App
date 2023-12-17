import React from 'react';

const Footer = (props) => {
    return (
        <footer className="footer">
            <a href={props.githubLink} target="_blank" rel="noopener noreferrer" >
                <img
                    src={process.env.PUBLIC_URL + '/assets/github-logo-white.svg'}
                    alt="GitHub Logo"
                />
            </a>
            <p>&copy; {props.currentYear} {props.text}</p>
        </footer>
    );
};


export default Footer;
