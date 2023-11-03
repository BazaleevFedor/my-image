import {FunctionComponent, useContext} from "react";
import styles from './styles.module.css'
import {InputContext, SetInputContext} from "@/app/context";

export const Input: FunctionComponent = () => {
  const setInputContext = useContext(SetInputContext);
  const inputContext = useContext(InputContext);

  return (
    <input
      value={inputContext}
      type="text"
      className={styles.input}
      placeholder={'tag'}
      onChange={e => setInputContext(e.target.value)}
      autoFocus={true}
    />
  )
}