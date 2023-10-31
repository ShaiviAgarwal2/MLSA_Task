/**
 * About component
 *
 * Space for you to describe more about yourself.
 */

import React from "react";

/**
 * About background image
 *
 * Below is a sample image. Upload the image of your choice into the "images"
 * directory and import here for use. Then, set imageAltText to string that 
 * represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a image you
 * freely use on your site.
 */
import image from "../images/motion.jpg";

const imageAltText = "blue abstract background";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "ALPHA MLSA || Harvard WeCode Extended Scholar'23 || B.Tech IT'25";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Coding",
  "DevOps",
  "Hackathon",
  "Content Writing",
  "Web Development",
  "Large Language Models(LLMs)",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "I'm a third-year B.Tech student at Banasthali Vidyapith in Jaipur, and I'm all about exploring the exciting world of technology! My biggest interests are Devops, LLMs, Machine Learning, Web development and Content writing. I published my first book at 20 in 2023 called LinkedOut: Navigating the Dark Side of LinkedIn on Amazon.";

const About = () => {
  return (
    <section className="padding" id="about">
      <img className="background" src={image} alt={imageAltText} />
      <div
        style={{
          backgroundColor: "white",
          width: "50%",
          padding: "4rem",
          margin: "3rem auto",
          textAlign: "center",
        }}
      >
        <h2>About Myself</h2>
        <p className="large">{description}</p>
        <hr />
        <ul
          style={{
            textAlign: "left",
            columns: 2,
            fontSize: "1.25rem",
            margin: "2rem 3rem",
            gap: "3rem",
          }}
        >
          {skillsList.map((skill) => (
            <li key={skill}>{skill}</li>
          ))}
        </ul>
        <hr />
        <p style={{ padding: "1rem 3rem 0" }}>{detailOrQuote}</p>
      </div>
    </section>
  );
};

export default About;
