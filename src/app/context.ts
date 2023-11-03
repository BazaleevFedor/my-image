import React from "react";

export const CallbackContext = React.createContext<{
  loadCallback: (tags: string) => void,
  clearCallback: () => void,
  groupCallback: () => void,
  errorCallback: () => void,
}>({
  loadCallback: (tags: string) => {},
  clearCallback: () => {},
  groupCallback: () => {},
  errorCallback: () => {},
})

export const SetInputContext = React.createContext<React.Dispatch<React.SetStateAction<string>>>(() => {});
export const InputContext = React.createContext('');
export const SetErrorContext = React.createContext((err: string) => {});

export const GIPHY_API_KEY = 'tp3vvfIKTxShbyv82inDklJqdBRvA5GW';
export const GIPHY_API_URL = 'https://api.giphy.com/v1/gifs/random';


export const INTERVAL_BETWEEN_REQUESTS = 5000;
export const RANDOM_TAG_MAX_LEN = 10;
