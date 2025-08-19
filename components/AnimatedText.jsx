"use client"
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const AnimatedText = ({ text, className = '', customVariants, triggerOnce = true, threshold = 0.1 }) => {
  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce, // Controla si la animación solo debe ocurrir una vez
    threshold, // Define cuánto del elemento debe estar visible
  });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const defaultVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const variants = customVariants || defaultVariants;

  return (
    <motion.p
      className={`text-2xl py-16 lg:py-20 ${className}`}
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={variants}
    >
      {text}
    </motion.p>
  );
};

export default AnimatedText;
