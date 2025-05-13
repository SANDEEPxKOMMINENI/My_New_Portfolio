
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initEmailJS } from './lib/emailjs.ts'

// Initialize EmailJS with your user ID
initEmailJS('service_ezxa8w9')

createRoot(document.getElementById("root")!).render(<App />);
