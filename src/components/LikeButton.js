import React, { useState } from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";

const LikeButton = () => {
  const [likes, setLikes] = useState([]);
  const [like, setLike] = useState(0);

  const addLike = () => setLike(like + 1);

  const removeLike = () => {
    setLike({ like: like - 1 });
  };

  return (
    <div className="like-button">
      <p>{like}</p>
      <button onClick={addLike}>
        <FavoriteBorderIcon />
      </button>
    </div>
  );
};

export default LikeButton;
