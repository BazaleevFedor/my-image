export function sortImagesByTag(imagesArray: {tag: string, image_url: string[]}[]) {
  return imagesArray.reduce((acc, {tag, image_url}) => {
      if (acc.has(tag)) {
        acc.set(tag, [...acc.get(tag), {tag: tag, image_url: image_url}]);
      } else {
        acc.set(tag, [{tag: tag, image_url: image_url}]);
      }

    return acc;
  }, new Map());
}
