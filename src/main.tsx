
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initEmailJS } from './lib/emailjs.ts'

// Initialize EmailJS with your user ID
// Replace 'YOUR_USER_ID' with your actual EmailJS user ID
initEmailJS('YOUR_USER_ID')

createRoot(document.getElementById("root")!).render(<App />);
