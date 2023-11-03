'use client'

import {FunctionComponent, useContext} from "react";
import styles from './styles.module.css'
import {SetInputContext} from "@/app/context";
import {CompositeImage} from "@/components/CompositeImage/CompositeImage";

interface ImagesProps {
  imagesArray: {tag: string, image_url: string[]}[];
  tag: string;
}

export const Images: FunctionComponent<ImagesProps> = ({
  imagesArray,
  tag,
}) => {
  const setInputContext = useContext(SetInputContext);

  return (
    <div>
      {tag && <div className={styles.tag}> {tag} </div>}
      <div className={styles.images}>
        {imagesArray.map((image, index) => (
          <div key={ index } onClick={() => setInputContext(image.tag)}>
            {image.image_url.length === 1 ? <img key={ index } src={ image.image_url[0] } alt={`Image ${ index }`} className={styles.images__item}/> : <CompositeImage image_url={image.image_url}/> }
          </div>
        ))}
      </div>
      {tag && <div style={{ backgroundColor: 'rgba(108, 111, 114, 0.42)', height: '2px', width: '100%'}}></div>}
    </div>
  )
}