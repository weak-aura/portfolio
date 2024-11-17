import React from 'react';
import styles from "./HamburgerButton.module.scss";

type HamburgerButtonProps = {
  isOpen: boolean,
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const HamburgerButton: React.FC<HamburgerButtonProps> = ({isOpen, setIsOpen}) => {
  return (
    <button className={styles.hamburger_button}
            onClick={() => setIsOpen((a) => !a)}
    >
      <span className={isOpen ? styles.open : undefined}/>
      <span className={isOpen ? styles.open : undefined}/>
      <span className={isOpen ? styles.open : undefined}/>
      <span className={isOpen ? styles.open : undefined}/>
    </button>
  );
};

