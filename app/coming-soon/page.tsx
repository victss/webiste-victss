'use client'; // Add this directive for client-side rendering

import { motion } from 'framer-motion'; // For animations
import { FaRocket, FaEnvelope, FaLinkedin, FaGithub } from 'react-icons/fa'; // Icons

export default function ComingSoon() {
  return (
    <div style={styles.container}>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        style={styles.content}
      >
        {/* Rocket icon with animation */}
        <motion.div
          initial={{ scale: 0, rotate: 0 }}
          animate={{ scale: 1, rotate: 360 }}
          transition={{ delay: 0.5, duration: 1 }}
          style={styles.iconContainer}
        >
          <FaRocket size={60} color="#00ff88" />
        </motion.div>

        <h1 style={styles.title}>Coming Soon</h1>
        <p style={styles.subtitle}>We're working on something awesome!</p>

        {/* Progress bar with animation */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 1, duration: 0.5 }}
          style={styles.progressBarContainer}
        >
          <div style={styles.progressBar}></div>
        </motion.div>

        {/* Social icons with hover animations */}
        <motion.div
          style={styles.socialIcons}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          <motion.a
            href="mailto:your-email@example.com"
            whileHover={{ scale: 1.2, y: -5 }}
            style={styles.iconLink}
          >
            <FaEnvelope size={30} color="#fff" />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            style={styles.iconLink}
          >
            <FaLinkedin size={30} color="#fff" />
          </motion.a>
          <motion.a
            href="https://github.com/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, y: -5 }}
            style={styles.iconLink}
          >
            <FaGithub size={30} color="#fff" />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#1a1a1a',
    color: '#fff',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
  },
  content: {
    maxWidth: '600px',
  },
  iconContainer: {
    marginBottom: '2rem',
  },
  title: {
    fontSize: '3rem',
    marginBottom: '1rem',
  },
  subtitle: {
    fontSize: '1.5rem',
    marginBottom: '2rem',
  },
  progressBarContainer: {
    width: '100%',
    height: '10px',
    backgroundColor: '#333',
    borderRadius: '5px',
    overflow: 'hidden',
    marginBottom: '2rem',
  },
  progressBar: {
    width: '60%',
    height: '100%',
    backgroundColor: '#00ff88',
    borderRadius: '5px',
  },
  socialIcons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '1.5rem',
  },
  iconLink: {
    cursor: 'pointer',
    transition: 'transform 0.2s ease',
  },
};