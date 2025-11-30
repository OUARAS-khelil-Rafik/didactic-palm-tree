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
import image from "../images/hanna-lazar-Cf5G0y0PR7E-unsplash.jpg";

const imageAltText = "person typing on laptop keyboard with coffee cup nearby";

/**
 * Sort description that expands on your title on the Home component.
 */
const description =
  "I am a data science and analytics enthusiast with a strong passion for uncovering insights from complex datasets. With a background in statistics and computer science, I specialize in machine learning, data visualization, and predictive modeling. I enjoy collaborating on projects that leverage data to drive informed decision-making and solve real-world problems.";

/**
 * List of some of skills or technologies you work on, are learning,
 * passionate about, or enjoy,
 */
const skillsList = [
  "Data Analysis",
  "Machine Learning",
  "Statistical Modeling",
  "Data Visualization",
  "Python & R Programming",
  "SQL & NoSQL Databases",
  "Big Data Technologies",
  "Cloud Computing",
];

/**
 * Use this to give more information about what you are passionate about,
 * how you best work, or even a quote. This will help someone learn more
 * about you on a professional level.
 */
const detailOrQuote =
  "“Data is the new oil.” I believe that data has the power to transform businesses and societies. My goal is to harness this power to create meaningful impact through data-driven solutions.";

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
