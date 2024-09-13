import { storage } from "../firebase/firebase";

export const uploadImageToFireBase = async (name, path) => {
  console.log("uploading...");
  const imageRef = await storage
    .ref(`/images/${name}`)
    .put(path)
    .then(async (e) => {
      return await storage
        .ref("images")
        .child(name)
        .getDownloadURL()
        .then((url) => url);
    });
  return imageRef;
};
