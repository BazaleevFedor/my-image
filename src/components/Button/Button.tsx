import {FunctionComponent} from "react";
import styles from './styles.module.css'

interface ButtonProps {
    text: string,
    callback: () => void,
    isLocked: boolean,
}

export const Button: FunctionComponent<ButtonProps> = ({
  text,
  callback,
  isLocked
}) => {
  return (
    <button
      onClick={ callback }
      className={`${isLocked ? styles.locked : styles.unlocked} ${styles.button}`}
      disabled={isLocked}
    > {text} </button>
  )
}
