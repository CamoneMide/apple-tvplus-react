import { motion } from "framer-motion";

const FadeIn = ({ children }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ margin: "90% 0px -200px 0px" }}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
