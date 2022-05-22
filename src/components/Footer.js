import React from "react";
import GithubIcon from "../img/github.png"

export default function Footer() {

    return (
        <footer>
            <p className="footer-para">Created By DragostinH</p>
            <a href="https://github.com/DragostinH/cv-new-build" className="github-link">
                <img className="github-icon" src={GithubIcon} alt="github icon" />
            </a>
        </footer>
    );
}