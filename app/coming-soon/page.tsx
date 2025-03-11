// import { motion } from 'framer-motion';
// import { CSSProperties } from 'react'; // Import CSSProperties

// export default function ComingSoon() {
//   return (
//     <div style={styles.container}>
//       <motion.div
//         initial={{ opacity: 0, y: -50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         style={styles.content}
//       >
//         <h1 style={styles.title}>Coming Soon</h1>
//         <p style={styles.subtitle}>We're working on something awesome!</p>
//         <motion.div
//           initial={{ scale: 0 }}
//           animate={{ scale: 1 }}
//           transition={{ delay: 0.5, duration: 0.5 }}
//           style={styles.progressBarContainer}
//         >
//           <div style={styles.progressBar}></div>
//         </motion.div>
//       </motion.div>
//     </div>
//   );
// }

// // Define the type for styles
// const styles: Record<string, CSSProperties> = {
//   container: {
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '100vh',
//     backgroundColor: '#1a1a1a',
//     color: '#fff',
//     fontFamily: 'Arial, sans-serif',
//     textAlign: 'center', // This is now valid
//   },
//   content: {
//     maxWidth: '600px',
//   },
//   title: {
//     fontSize: '3rem',
//     marginBottom: '1rem',
//   },
//   subtitle: {
//     fontSize: '1.5rem',
//     marginBottom: '2rem',
//   },
//   progressBarContainer: {
//     width: '100%',
//     height: '10px',
//     backgroundColor: '#333',
//     borderRadius: '5px',
//     overflow: 'hidden',
//   },
//   progressBar: {
//     width: '60%',
//     height: '100%',
//     backgroundColor: '#00ff88',
//     borderRadius: '5px',
//   },
// };