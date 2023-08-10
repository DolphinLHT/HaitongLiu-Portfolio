import Image from "next/image";

const Hero = () => {
  return (
    <div className="hero-container">
      <Image src='selfie.png' className="profile-img" width={300} height={300} alt="Haitong's personal headshot" />
      <div className="hero-text">
        <h1>Hey, I'm Haitong Liu</h1>
        <p>
          I'm a software developer. My objective is to use my professional knowledge and enthusiasm in software development to create constructive and explorative solutions in a forward-thinking company. I'm excited to constantly learning new knowledge and adapt to the working environment.
        </p>
        <div className="social-icons">
          <a
            href="https://twitter.com/haitongliu"
            aria-label="Twitter"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-twitter"></i>
          </a>
          <a
            href="https://github.com/DolphinLHT"
            aria-label="GitHub"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/haitongliu/"
            aria-label="LinkedIn"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Hero;