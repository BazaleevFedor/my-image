'use client'
import {Header} from '@/components/Header/Header';
import {Images} from '@/components/Images/Images';
import styles from './styles.module.css'
import {GroupedImages} from "@/components/GroupedImages/GroupedImages";
import React, {useCallback, useState} from "react";
import {getImages} from "@/api/image";
import {CallbackContext, InputContext, SetErrorContext, SetInputContext} from "@/app/context"
import {createPortal} from "react-dom";
import {InfoField} from "@/components/InfoField/InfoField";

export default function Home() {
  const [images, setImages] = useState<{tag: string, image_url: string[]}[]>([]);
  const [isGrouped, setIsGrouped] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [inputValue, setInputValue] = useState('');


  const loadPush = useCallback((tags: string)=> {
    setError('');
    setIsLoading(true);
    getImages(tags).then(res => {
      setImages((curImages) => [...curImages, { tag: res.tag, image_url: res.image_url }]);
      setIsLoading(false);
    }).catch((err) => {
      setError(err.message);
      setIsLoading(false);
    });
  }, []);

  const clearPush = useCallback(()=> {
    setImages([]);
  }, []);

  const groupPush = useCallback(()=> {
    setIsGrouped(curState => !curState);
  }, []);

  const errorPush = useCallback(()=> {
    setError('');
  }, []);


  return (
    <CallbackContext.Provider value={{loadCallback: loadPush, clearCallback: clearPush, groupCallback: groupPush, errorCallback: errorPush}}>
      <InputContext.Provider value={inputValue}>
        <SetInputContext.Provider value={setInputValue}>
          <SetErrorContext.Provider value={setError}>
            <Header clearLocked={!images.length} groupLocked={isGrouped} loadLocked={isLoading}/>
          </SetErrorContext.Provider>
          <div className={styles.main}>
            <div style={{ backgroundColor: 'rgba(108, 111, 114, 0.42)'}}></div>
            {isGrouped ? <GroupedImages imagesArray={images}/> : <Images imagesArray={images} tag={''}/>}
          </div>
        </SetInputContext.Provider>
      </InputContext.Provider>
      { error && createPortal(<InfoField error={error}/>, document.body)}
    </CallbackContext.Provider>
)
}
