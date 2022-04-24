import { createContext } from "react";

let photo = {};

const setPhoto = (selectedPhoto) => {
  photo = selectedPhoto;
};

const galleryContext = createContext({
  photo,
  setPhoto,
});

export default galleryContext;
