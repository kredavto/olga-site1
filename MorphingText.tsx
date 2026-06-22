import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface MorphingTextProps {
  words: string[];
  interval?: number;
  className?: string;
}

/**
 * Cycles through a list of words with a blur/scale "morph" transition.
 * Used for the animated accent in the hero headline.
 */
const MorphingText = ({ words, interval = 2600, className = "" }: MorphingTextProps) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % words.length), interval);
    return () => clearInterval(id);
  }, [words.length, interval]);

  return (
    <span className={`relative inline-block align-baseline ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={words[index]}
          initial={{ opacity: 0, filter: "blur(12px)", y: 14, scale: 0.96 }}
          animate={{ opacity: 1, filter: "blur(0px)", y: 0, scale: 1 }}
          exit={{ opacity: 0, filter: "blur(12px)", y: -14, scale: 1.04 }}
          transition={{ duration: 0.55, ease: "easeOut" }}
          className="inline-block"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
};

export default MorphingText;
