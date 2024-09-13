import styled from "styled-components";
import { motion } from "framer-motion";

const TotalScore = ({ score }) => {
  return (
    <ScoreContainer
      as={motion.div}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h1
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
      >
        {score}
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Total Score
      </motion.p>
    </ScoreContainer>
  );
};

export default TotalScore;

const ScoreContainer = styled.div`
  max-width: 200px;
  text-align: center;

  h1 {
    font-size: 100px;
    line-height: 100px;
  }

  p {
    font-size: 24px;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    h1 {
      font-size: 80px;
      line-height: 80px;
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    h1 {
      font-size: 60px;
      line-height: 60px;
    }

    p {
      font-size: 16px;
    }
  }
`;

