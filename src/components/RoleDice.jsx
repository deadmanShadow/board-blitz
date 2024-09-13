import styled from "styled-components";
import { motion } from "framer-motion";

const RoleDice = ({ roleDice, currentDice }) => {
  const imagePath = `/dices/dice_${currentDice}.png`; 

  return (
    <DiceContainer
      as={motion.div}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="dice"
        onClick={roleDice}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <img src={imagePath} alt={`dice ${currentDice}`} />
      </motion.div>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3 }}
      >
        Click on Dice to roll
      </motion.p>
    </DiceContainer>
  );
};

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }

  @media (max-width: 768px) {
    margin-top: 40px;

    .dice {
      img {
        width: 80px;
        height: 80px;
      }
    }

    p {
      font-size: 20px;
    }
  }

  @media (max-width: 480px) {
    margin-top: 30px;

    .dice {
      img {
        width: 60px;
        height: 60px;
      }
    }

    p {
      font-size: 18px;
    }
  }
`;
