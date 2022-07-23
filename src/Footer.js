import React from "react";
import { AiFillTwitterSquare } from "react-icons/ai";
// import { MdEmail } from "react-icons/md";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa"
import './App.css';

export default function Footer() {
    return (
        <div className="container-3">
            <AiFillTwitterSquare className="twitter"/>
            <FaFacebookSquare className="facebook"/>
            <FaInstagramSquare className="instagram"/>
            <FaGithubSquare className="github"/>
        </div>
    )
}