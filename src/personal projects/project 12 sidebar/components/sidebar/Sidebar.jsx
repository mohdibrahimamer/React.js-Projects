import React from 'react'
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
import { IoMdMenu } from "react-icons/io";

const Sidebar = () => {

    return (
        <>
            <nav>
                <ul>
                    <div className="left-logo">
                        <button type='button'>
                            <IoMdMenu />
                        </button>
                        <p>coding addict</p>
                    </div>
                    <li>
                        <Link to="/">home</Link>
                    </li>

                    <li>
                        <Link to="/Team">Team</Link>
                    </li>

                    <li>
                        <Link to="/Projects">Projects</Link>
                    </li>

                    <li>
                        <Link to="/Calendar">Calendar</Link>
                    </li>

                    <li>
                        <Link to="/Documents">Documents</Link>
                    </li>


                    <div className="right">
                        <div className="socials">
                            <li>
                                <Link to="https://www.facebook.com/" target='blank' >
                                    <FaFacebook />
                                </Link>
                            </li>

                            <li>
                                <Link to="https://www.twitter.com/" target='blank' >
                                    <FaTwitter />
                                </Link>
                            </li>

                            <li>
                                <Link to="https://www.linkedin.com/" target='blank' >
                                    <FaLinkedin />
                                </Link>
                            </li>

                            <li>
                                <Link to="https://www.github.com/" target='blank' >
                                    <FaGithub />
                                </Link>
                            </li>

                        </div>
                    </div>
                </ul>
            </nav>
        </>
    )
}

export default Sidebar