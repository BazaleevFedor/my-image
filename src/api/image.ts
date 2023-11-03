import {GIPHY_API_KEY, GIPHY_API_URL} from "@/app/context";

export async function getImages(tagString: string) {
  const tags = tagString.split(', ');

  const imgPromises = tags.map(tag => {
    const url = `${GIPHY_API_URL}?api_key=${GIPHY_API_KEY}&tag=${tag}`;
    return fetch(url)
      .then(response => {
        if (response.status !== 200) {
          throw new Error('Произошла http ошибка');
        }
        return response.json()
      }).then(data => {
        if (!data.data.images) {
          throw new Error('По тегу ничего не найдено');
        }
        return data.data.images.original.url;
      }).catch((error) => {
        throw error;
      });
  });

  try {
    return {tag: tagString, image_url: await Promise.all(imgPromises)};
  } catch (error) {
    throw error;
  }
}