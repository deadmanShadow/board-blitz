import { motion } from "framer-motion";
import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        How to play dice game
      </motion.h2>
      <motion.div
        className="text"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>
          After clicking on the dice, if the selected number matches the dice number,
          you will get the same number of points as the dice.
        </p>
        <p>If you guess wrong, 2 points will be deducted.</p>
      </motion.div>
    </RulesContainer>
  );
};

export default Rules;

const RulesContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  background-color: #fbf1f1;
  padding: 20px;
  margin-top: 40px;
  border-radius: 10px;

  h2 {
    font-size: 24px;
    margin-bottom: 16px;
  }

  .text {
    p {
      margin-bottom: 12px;
      font-size: 18px;
    }
  }

  @media (max-width: 768px) {
    padding: 16px;

    h2 {
      font-size: 20px;
      margin-bottom: 12px;
    }

    .text {
      p {
        font-size: 16px;
        margin-bottom: 10px;
      }
    }
  }

  @media (max-width: 480px) {
    padding: 12px;

    h2 {
      font-size: 18px;
      margin-bottom: 10px;
    }

    .text {
      p {
        font-size: 14px;
        margin-bottom: 8px;
      }
    }
  }
`;
