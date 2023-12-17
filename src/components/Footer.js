import React from 'react';

const Footer = (props) => {
    return (
        <footer className="footer">
            <p>&copy; {props.currentYear} {props.text}</p>
            <a href={props.githubLink} target="_blank" rel="noopener noreferrer">
                <img
                    src={process.env.PUBLIC_URL + '/assets/github-logo.svg'}
                    alt="GitHub Logo"
                    width="30"
                    height="30"
                />
            </a>
        </footer>
    );
};


export default Footer;
