/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/mushrooms-9946579_1280.jpg";

const imageAltText = "desk with laptop, notebook, coffee cup, plant, and lamp";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "10 Things To Know About Azure Static Web Apps 🎉",
    description:
      "Collaboration to create a beginner friendly article to help explain Azure Static Web Apps and tooling to get started.",
    url: "https://dev.to/azure/10-things-to-know-about-azure-static-web-apps-3n4i",
  },
  {
    title: "Web Development for Beginners",
    description:
      "Contributed sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/web-dev-for-beginners",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/microsoft/workshop-library/tree/main/full/build-resume-website",
  },
  {
    title: "GitHub Codespaces and github.dev",
    description:
      "Video interview to explain when to use GitHub.dev versus GitHub Codespaces, and how best to use each tool.",
    url: "https://www.youtube.com/watch?v=c3hHhRME_XI",
  },
  {
    title: "Introduction to GitHub",
    description:
      "Created sketch note imagery to accompany each lesson. These help provide visual representation of what is being taught.",
    url: "https://github.com/microsoft/introduction-to-github",
  },
  {
    title: "Open Source Contributions",
    description:
      "Made various contributions to open source projects including documentation fixes, bug fixes, and feature additions.",
    url: "https://github.com/microsoft",
  },
  {
    title: "Technical Writing Articles",
    description:
      "Authored multiple articles on technical topics including cloud computing, web development, and open source best practices.",
    url: "https://dev.to/microsoft",
  },
  {
    title: "UI/UX Design Projects",
    description:
      "Designed user interfaces and experiences for various applications, focusing on accessibility and user-centered design principles.",
    url: "https://www.behance.net/microsoft",
  },
  {
    title: "Mobile App Designs",
    description:
      "Created designs for mobile applications, ensuring responsive layouts and intuitive navigation for enhanced user experience.",
    url: "https://dribbble.com/microsoft",
  },
  {
    title: "Graphic Design Work",
    description:
      "Produced graphic design materials including logos, marketing collateral, and social media graphics to support branding efforts.",
    url: "https://www.linkedin.com/in/microsoft",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            className="slide-in-left"
            style={{
              height: "90%",
              width: "100%",
              objectFit: "cover",
              animation: "1s ease-out 0s 1 slideInLeft",
            }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
