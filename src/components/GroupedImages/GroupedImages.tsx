import {FunctionComponent} from "react";
import {Images} from "@/components/Images/Images";
import {sortImagesByTag} from "@/utils/sort";

interface GroupedImagesProps {
  imagesArray: {tag: string, image_url: string[]}[];
}

export const GroupedImages: FunctionComponent<GroupedImagesProps> = ({
 imagesArray,
}) => {
  let sortImages = sortImagesByTag(imagesArray);

  return (
    <>
      {Array.from(sortImages.keys()).map(tag => (
        <Images key={tag} imagesArray={sortImages.get(tag)} tag={tag} />
      ))}
    </>
  )
}