import { useState } from "react";
import styles from "./LikeButton.module.scss";
import { FaHeart, FaRegHeart } from "react-icons/fa";

interface LikeButtonProps {
  like: boolean;
  onClick: () => void;
}

export default function LikeButton({ onClick, like }: LikeButtonProps) {
  const [liked, setLiked] = useState(like);

  const handleLikeClick = () => {
    setLiked(!liked);
    onClick();
  };

  return (
    <>
      <button
        type="button"
        className={styles.likeButton}
        onClick={handleLikeClick}
      >
        {liked ? (
          <FaHeart className={styles.redHeartIcon} />
        ) : (
          <FaRegHeart className={styles.heartIcon} />
        )}
      </button>
    </>
  );
}
