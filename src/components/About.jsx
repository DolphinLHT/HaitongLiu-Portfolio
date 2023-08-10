import Image from "next/image";

const About = () => {
    return (
        <div className="about-container">
            <h2>About Me</h2>
            <div className="flex-about">
                <div className="about-text">
                    <p>
                        I have always been fascinated about developing beautiful and practical answers to challenging issues. My background in software development is solid, with a particular emphasis on web technologies like HTML, CSS, and JavaScript. I like working on the front-end as well as the back-end of apps, and I'm constantly searching for methods to boost efficiency, enhance the user experience, and guarantee the greatest possible code quality.
                    </p>
                    <p>I have worked on a variety of projects during my career, from straightforward static websites to intricate enterprise-level systems. React, Angular, Vue.js, Node.js, and Laravel are just a few of the development technologies and frameworks I have worked with. I am continually looking for opportunities to expand my knowledge and abilities, and I am keen to learn about and experiment with new technologies.
                    </p>
                </div>
                <div className="about-img">
                    <Image src='/images/about.jpg' className="profile-img" width={300} height={500} />
                </div>
            </div>
        </div>
    )
}

export default About;