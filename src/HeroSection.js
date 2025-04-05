import React from "react";
import { Helmet } from "react-helmet";
import { ReactTyped as Typed } from "react-typed"; // Correctly import react-typed
import "./HeroSection.css";
import profilePhoto from "./data/propic.jpg"; // Replace with your profile photo path
import resume from "./data/BhagyaEkanayake.pdf"; // Replace with your resume file path


function HeroSection() {
  return (
    
    <>
      <Helmet>
        <title>Bhagya Ekanayake | Portfolio</title>
        <meta
          name="description"
          content="Welcome to Bhagya Ekanayake's developer portfolio. Explore projects, skills, and resume."
        />
        <meta
          name="keywords"
          content="Bhagya Ekanayake, Software Developer, Portfolio, Full Stack Developer, Internship"
        />
        <meta name="author" content="Bhagya Ekanayake" />

        {/* Social media preview (Open Graph) */}
        <meta property="og:title" content="Bhagya Ekanayake | Portfolio" />
        <meta
          property="og:description"
          content="Explore Bhagya's work, resume, and technical skills."
        />
        <meta
          property="og:image"
          content="https://bhagyaekanayake.me/propic2.jpg"
        />
        <meta property="og:url" content="https://bhagyaekanayake.me/" />
        <meta property="og:type" content="website" />

        {/* Twitter Cards */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Bhagya Ekanayake | Portfolio" />
        <meta
          name="twitter:description"
          content="Explore Bhagya's work, resume, and technical skills."
        />
        <meta
          name="twitter:image"
          content="https://bhagyaekanayake.me/propic2.jpg"
        />
      </Helmet>

    <section className="hero">
      <div className="hero-content">
      <h1 className="inter-hello">Hello, I'm</h1>
        <h2>
          <span className="highlight">Bhagya</span> Ekanayake
        </h2>
        <h3 className="inter-interested">Who is interested in</h3>
        <Typed
        className="inter-animation-text"
          strings={[
            "UI/UX",
            "Networking",
            "Cloud Computing",
            "AI",
            "Front-End Development",
            "Full Stack Development",
            "QA",
            "Cyber Security",
            "Machine Learning",
          ]}
          typeSpeed={50}
          backSpeed={30}
          loop
        />
        <div className="resume-btn-container">
          <a href={resume} download="Bhagya_Ekanayake_Resume.pdf" className="btn">
            Resume
          </a>
        </div>
        
      </div>
      <div className="hero-image">
        <img src={profilePhoto} alt="Bhagya Ekanayake" />
      </div>
    </section>
  </>
    
  );
}

export default HeroSection;
