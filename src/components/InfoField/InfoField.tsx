import {FunctionComponent, useContext} from "react";
import styles from './styles.module.css';
import {CallbackContext} from "@/app/context";

interface InfoFieldProps {
  error: string,
}

export const InfoField: FunctionComponent<InfoFieldProps> = ({
  error,
}) => {
  let {errorCallback}:{errorCallback: () => void} = useContext(CallbackContext);


  return (
    <div className={styles.info_block} onClick={errorCallback}>
      { error }
    </div>
  )
}