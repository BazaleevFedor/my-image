import {RANDOM_TAG_MAX_LEN} from "@/app/context";

export function randomTag(): string {
  const length = Math.floor(Math.random() * RANDOM_TAG_MAX_LEN) + 1;
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
  let result = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}