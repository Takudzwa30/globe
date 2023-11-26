import React from "react";

// Icons
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

// Styles
import Style from "./Like.module.css";

const Like = ({ like, setLike }) => {
  return (
    <div className={Style.favorite} onClick={() => setLike((prev) => !prev)}>
      {" "}
      {!like ? (
        <AiOutlineHeart className={Style.like} />
      ) : (
        <AiFillHeart className={Style.disLike} />
      )}
    </div>
  );
};

export default Like;
