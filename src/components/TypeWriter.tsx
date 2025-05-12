
import { useState, useEffect, useRef } from "react";

interface TypeWriterProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  delayBetween?: number;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetween = 1500,
}) => {
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingDelay, setTypingDelay] = useState(typingSpeed);
  
  const currentTextRef = useRef("");
  const currentIndexRef = useRef(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      const i = loopNum % texts.length;
      const fullText = texts[i];
      
      if (isDeleting) {
        currentTextRef.current = fullText.substring(0, currentIndexRef.current - 1);
        setTypingDelay(deletingSpeed);
      } else {
        currentTextRef.current = fullText.substring(0, currentIndexRef.current + 1);
        setTypingDelay(typingSpeed);
      }
      
      setText(currentTextRef.current);
      
      if (!isDeleting) {
        currentIndexRef.current++;
      } else {
        currentIndexRef.current--;
      }
      
      if (!isDeleting && currentIndexRef.current === fullText.length + 1) {
        setIsDeleting(true);
        currentIndexRef.current = fullText.length;
        setTypingDelay(delayBetween);
      }
      
      if (isDeleting && currentIndexRef.current === 0) {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingDelay(500);
      }
    }, typingDelay);
    
    return () => clearTimeout(timer);
  }, [text, typingSpeed, deletingSpeed, delayBetween, isDeleting, loopNum, texts]);
  
  return (
    <span className="relative">
      {text}
      <span className="absolute right-[-4px] top-0 h-full w-[2px] bg-primary animate-blink-caret"></span>
    </span>
  );
};

export default TypeWriter;
