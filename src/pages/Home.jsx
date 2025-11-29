import { motion } from "framer-motion";
import jeimsImg from "../assets/MyPic.jpg";

const Home = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      style={{
        minHeight: "90vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      <h1
        style={{
          fontSize: "3.5rem",
          marginBottom: "1rem",
          color: "var(--beige)",
        }}
      >
        Hey, I'm Jeims Molina
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          maxWidth: "600px",
          color: "var(--accent)",
          marginBottom: "2rem",
        }}
      >
        Student athlete, passionate about the world of technology and
        programming.
      </p>

      <img
        src={jeimsImg}
        alt="Jeims Molina"
        style={{
          width: "720px",
          height: "500px",
          borderRadius: "50px",
          boxShadow: "0 8px 20px rgba(0,0,0,0.5)",
          border: "2px solid var(--accent)",
        }}
      />
    </motion.section>
  );
};

export default Home;
