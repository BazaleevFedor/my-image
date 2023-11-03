import React, {FunctionComponent, useCallback, useContext, useEffect, useState} from "react";
import styles from './styles.module.css'
import {Input} from "@/components/Input/Input";
import {Button} from "@/components/Button/Button";
import {
  CallbackContext,
  InputContext,
  INTERVAL_BETWEEN_REQUESTS,
  SetErrorContext,
  SetInputContext
} from "@/app/context";
import {randomTag} from "@/utils/randomTag";
import {validation} from "@/utils/validation";
import {getImages} from "@/api/image";

let interval: NodeJS.Timeout;
let intervalHas: boolean = false;

interface HeaderProps {
  loadLocked: boolean;
  clearLocked: boolean;
  groupLocked: boolean;
}

export const Header: FunctionComponent<HeaderProps> = ({
  loadLocked,
  clearLocked,
  groupLocked,
}) => {
  const {loadCallback, clearCallback, groupCallback}:{loadCallback: (tag: string) => void, clearCallback: () => void, groupCallback: () => void} = useContext(CallbackContext);
  const inputValue = useContext(InputContext);
  const setInputValue = useContext(SetInputContext);
  const setErrorContext = useContext(SetErrorContext);

  useEffect(() => {
    const foo = () => {
      loadCallback(randomTag());
      interval = setTimeout(foo, INTERVAL_BETWEEN_REQUESTS);
      intervalHas = true;
    }

    if (inputValue === 'delay') {
      if (!intervalHas) foo();
    } else {
      clearTimeout(interval);
      intervalHas = false;
    }

    return () => {
      clearTimeout(interval);
      intervalHas = false;
    }
  }, [inputValue, loadCallback]);

  const loadPush = useCallback((tags: string)=> {
    if (tags) {
      if (validation(tags)) {
        loadCallback(tags);
      } else {
        setErrorContext('Ввод символов кроме букв латинского алфавита и \',\' запрещен');
      }
    } else {
      setErrorContext('Заполните поле \'tag\'');
    }
  }, []);

  return (
    <>
      <div className={styles.header}>
        <Input />

        <Button text={loadLocked ? 'Загрузка...' : 'Загрузить'} callback={() => loadPush(inputValue)} isLocked={loadLocked}/>
        <Button text={'Отчистить'} callback={ () => {clearCallback(); setInputValue('')} } isLocked={clearLocked}/>
        <Button text={groupLocked ? 'Разгруппировать' : 'Сгруппировать'} callback={groupCallback} isLocked={clearLocked}/>
      </div>
    </>
  )
}