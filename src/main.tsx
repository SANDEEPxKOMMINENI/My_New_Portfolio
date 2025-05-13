
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { initEmailJS } from './lib/emailjs.ts'

// Initialize EmailJS with your public key
initEmailJS('aYlE2Ptd6BxBu1qDa')

createRoot(document.getElementById("root")!).render(<App />);
