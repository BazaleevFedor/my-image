import {FunctionComponent} from "react";
import styles from './styles.module.css'

interface CompositeImageProps {
  image_url: string[];
}

export const CompositeImage: FunctionComponent<CompositeImageProps> = ({
  image_url
}) => {
  return (
      <div className={styles.container}>
        {image_url.map((url, index) => (
          <img
            key={index}
            src={url}
            alt={`Image ${index}`}
            className={styles.container__img}
          />
        ))}
      </div>
  )
}