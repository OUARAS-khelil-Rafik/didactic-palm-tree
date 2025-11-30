import React from "react";
/**
 * Education component
 *
 * Space to detail your education background. Include the
 * institution, degree obtained, and dates attended.
 */
const Education = () => {
  return (
    <section className="light" id="education">
      <h2>Education</h2>
      <div>
        <h3>University of Learning</h3>
        <p>Bachelor of Science in Computer Science</p>
        <p>September 2015 - June 2019</p>
      </div>
      <div>
        <h3>Online Course: Full Stack Web Development</h3>
        <p>
          Completed a comprehensive online course covering front-end and back-end web development.
        </p>
        <p>January 2020 - June 2020</p>
      </div>
    </section>
  );
};

export default Education;
