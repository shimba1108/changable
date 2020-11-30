import React from "react";
import "./ImageArea.css";

const ImagePreview = (props) => {
  return (
    <div className="img-preview" onClick={() => props.delete(props.id)}>
      <img alt="" src={props.path} />
    </div>
  );
};

export default ImagePreview;
