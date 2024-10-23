import { motion } from "framer-motion";
import styled from "styled-components";
import { Button } from "../styled/Button";

const StartGame = ({ toggle }) => {
  return (
    <Container
      as={motion.div}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, type: "spring", stiffness: 300 }}
    >
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <img src="/dices.png" alt="Dice" />
      </motion.div>
      <div className="content">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Board Blitz
        </motion.h1>
        <Button
          as={motion.button}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          transition={{ type: "spring", stiffness: 300 }}
          onClick={toggle}
        >
          Play Now
        </Button>
      </div>
    </Container>
  );
};

export default StartGame;

const Container = styled.div`
  max-width: 1180px;
  height: 100vh;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  text-align: center;

  img {
    max-width: 100%;
    height: auto;
  }

  .content {
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
      font-size: 96px;
      white-space: nowrap;
    }
  }

  @media (max-width: 768px) {
    .content {
      h1 {
        font-size: 64px;
      }

      button {
        font-size: 14px;
        padding: 8px 16px;
        min-width: 180px;
      }
    }
  }

  @media (max-width: 480px) {
    .content {
      h1 {
        font-size: 48px;
      }

      button {
        font-size: 12px;
        padding: 6px 14px;
        min-width: 150px;
      }
    }
  }
`;
