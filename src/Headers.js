import React from "react";
import { HiMail } from "react-icons/hi"
import { AiFillLinkedin } from "react-icons/ai";
import './App.css';
import profile from "./profile.jpg";

export default function Header(){
    return (
        <div className="container-1">
            <img src={profile} className="profile" alt="profile" />
            <h1 className="name">Satish Daraboina</h1>
            <h2 className="working">Student</h2>
            <h2 className="college">Pragati Engineering College</h2>
            {/* <button className="email"><HiMail /> Email</button> */}
            <button>
                <a href="https://mail.google.com/mail/u/0/#inbox?compose=new" target="_blank" rel="noopener noreferrer"
                className="email"><HiMail />Email
                </a>
            </button>
            <button className="button-1">
                <a href="https://www.linkedin.com/feed/" target="_blank" rel="noopener noreferrer"
                className="linked"><AiFillLinkedin /> LinkedIn
                </a>
            </button>
        </div>
    )
}