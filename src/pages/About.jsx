import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      initial={{ opacity: 0, x: 60 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.8 }}
      className="about-container"
      style={{
        maxWidth: "900px",
        margin: "0 auto",
        padding: "2rem",
        color: "var(--beige)",
      }}
    >
      <h1 style={{ fontSize: "2.5rem", marginBottom: "1rem" }}>About Me</h1>

      <p
        style={{
          fontSize: "1.1rem",
          marginBottom: "1.5rem",
          lineHeight: "1.7",
        }}
      >
        I’m Jeims Molina, a Computer Science student and NCAA Division I athlete
        currently based in the United States. Originally from Costa Rica, I
        moved here on an athletic scholarship and learned quickly how to balance
        high-performance athletics with demanding technical coursework.
      </p>

      <p
        style={{ fontSize: "1.1rem", marginBottom: "2rem", lineHeight: "1.7" }}
      >
        That experience shaped how I approach software engineering: with
        discipline, consistency, and a strong focus on execution. I enjoy
        building real, usable applications—whether that’s responsive React apps,
        full-stack systems, or desktop software—and continuously improving both
        my technical skills and myself.
      </p>

      {/* Skills */}
      <h2
        style={{
          fontSize: "1.8rem",
          marginBottom: "1rem",
          color: "var(--accent)",
        }}
      >
        Technical Skills
      </h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "0.8rem",
          marginBottom: "2.5rem",
        }}
      >
        {[
          "React",
          "JavaScript",
          "Node.js",
          "Express",
          "Firebase",
          "MongoDB",
          "MySQL",
          "C#",
          "WPF",
          ".NET",
          "C++",
          "Java",
          "Docker",
          "Git/GitHub",
        ].map((skill, i) => (
          <span
            key={i}
            style={{
              padding: "0.45rem 1rem",
              backgroundColor: "var(--accent)",
              color: "var(--black)",
              borderRadius: "25px",
              fontWeight: "600",
              fontSize: "0.9rem",
            }}
          >
            {skill}
          </span>
        ))}
      </div>

      {/* Education */}
      <h2
        style={{
          fontSize: "1.8rem",
          marginBottom: "1rem",
          color: "var(--accent)",
        }}
      >
        Education
      </h2>
      <p style={{ marginBottom: "1rem" }}>
        🎓 <strong>Weber State University</strong> — B.S. in Computer Science & Minor in Data Analytics{" "}
        <br />
        Expected Graduation: Spring 2027 | GPA: 3.5
      </p>
      <p style={{ fontSize: "0.95rem", opacity: 0.9, marginBottom: "2rem" }}>
        Relevant Coursework: Data Structures & Algorithms, Operating Systems,
        Advanced Database Systems, Software Engineering, Web & Front-End
        Development, Database Design and Management
      </p>

      {/* Experience */}
      <h2
        style={{
          fontSize: "1.8rem",
          marginBottom: "1rem",
          color: "var(--accent)",
        }}
      >
        Experience & Background
      </h2>
      <ul style={{ listStyle: "none", paddingLeft: 0, marginBottom: "3rem" }}>
        <li style={{ marginBottom: "1rem" }}>
          <strong>NCAA Division I Track & Field Athlete (3 Years)</strong> —
          Developed discipline, leadership, time management, and performance
          under pressure while competing at a high level.
        </li>

        <li>
          <strong>Software Projects (Academic & Personal)</strong> — Built
          full-stack web apps, database-driven systems, and desktop applications
          using React, Node.js, Firebase, MongoDB, C#, and WPF with a strong
          focus on clean architecture and usability.
        </li>
      </ul>

      {/* LinkedIn Button */}
      <motion.a
        href="https://linkedin.com/in/jeims-molina-322212264"
        target="_blank"
        rel="noopener noreferrer"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        style={{
          display: "inline-block",
          padding: "0.75rem 1.6rem",
          backgroundColor: "var(--accent)",
          color: "var(--black)",
          borderRadius: "30px",
          fontWeight: "700",
          textDecoration: "none",
          fontSize: "1rem",
        }}
      >
        Go to my LinkedIn →
      </motion.a>
      {/* Download buttons for Resume and Portfolio */}
      <div
        style={{
          marginTop: "1rem",
          display: "flex",
          gap: "0.75rem",
          flexWrap: "wrap",
        }}
      >
        <motion.a
          href="/Jeims_Molina_Resume.pdf"
          download="Jeims_Molina_Resume.pdf"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: "inline-block",
            padding: "0.6rem 1.2rem",
            backgroundColor: "transparent",
            color: "var(--beige)",
            borderRadius: "24px",
            border: "2px solid var(--accent)",
            fontWeight: "700",
            textDecoration: "none",
            fontSize: "0.95rem",
          }}
        >
          Download Resume
        </motion.a>

        <motion.a
          href="/Coverletter.pdf"
          download="Coverletter.pdf"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: "inline-block",
            padding: "0.6rem 1.2rem",
            backgroundColor: "transparent",
            color: "var(--beige)",
            borderRadius: "24px",
            border: "2px solid var(--accent)",
            fontWeight: "700",
            textDecoration: "none",
            fontSize: "0.95rem",
          }}
        >
          Download Cover Letter
        </motion.a>

        <motion.a
          href="/References.pdf"
          download="References.pdf"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: "inline-block",
            padding: "0.6rem 1.2rem",
            backgroundColor: "transparent",
            color: "var(--beige)",
            borderRadius: "24px",
            border: "2px solid var(--accent)",
            fontWeight: "700",
            textDecoration: "none",
            fontSize: "0.95rem",
          }}
        >
          Download References
        </motion.a>

          <motion.a
          href="/LoR.pdf"
          download="LoR.pdf"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          style={{
            display: "inline-block",
            padding: "0.6rem 1.2rem",
            backgroundColor: "transparent",
            color: "var(--beige)",
            borderRadius: "24px",
            border: "2px solid var(--accent)",
            fontWeight: "700",
            textDecoration: "none",
            fontSize: "0.95rem",
          }}
        >
          Download Letter of Recommendation
        </motion.a>
      </div>
    </motion.section>
  );
};

export default About;
