import React, { useCallback } from "react";
import { IconButton, makeStyles } from "@material-ui/core";
import AddAPhotoIcon from "@material-ui/icons/AddAPhoto";
import { storage } from "../../firebase";
import ImagePreview from "./ImagePreview";
import "./ImageArea.css";

const useStyles = makeStyles({
  icon: {
    // height: 45,
    // width: 45,
  },
});

const ImageArea = (props) => {
  const classes = useStyles();

  const deleteImage = useCallback(
    async (id) => {
      const ret = window.confirm("画像を削除しますか？");
      if (!ret) {
        return false;
      } else {
        const newImage = props.images.filter((image) => image.id !== id);
        props.setImages(newImage);
        return storage.ref("images").child(id).delete();
      }
    },
    [props.images]
  );

  const uploadImage = useCallback(
    (event) => {
      const file = event.target.files;
      let blob = new Blob(file, { type: "image/jpeg" });

      const S =
        "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTYVWXYZ0123456789";
      const N = 16;
      const fileName = Array.from(crypto.getRandomValues(new Uint32Array(N)))
        .map((n) => S[n % S.length])
        .join("");

      const uploadRef = storage.ref("images").child(fileName);
      const uploadTask = uploadRef.put(blob);

      uploadTask.then(() => {
        uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
          const newImage = { id: fileName, path: downloadURL };
          props.setImages((prevState) => [...prevState, newImage]);
        });
      });
    },
    [props.setImages]
  );

  return (
    <div className="image-area">
      <div className="image-preview">
        {props.images.length > 0 &&
          props.images.map((image) => (
            <ImagePreview
              delete={deleteImage}
              id={image.id}
              path={image.path}
              key={image.id}
            />
          ))}
      </div>
      <div className="image-fn">
        <label>
          <AddAPhotoIcon className="photo" />
          <input
            className="u-display-none"
            type="file"
            id="image"
            onChange={(event) => uploadImage(event)}
          />
        </label>
      </div>
    </div>
  );
};

export default ImageArea;
