import PropTypes from "prop-types";
import { useCallback, useContext, useState } from "react";
import { ContextApp } from "../../Context";
import { CommentIcon, HeartIcon } from "../Icons";
import "./styles.css";

function ButtonsCard({ item }) {
  const { setOpen, open, handleLike } = useContext(ContextApp);
  const [isAnimated, setIsAnimated] = useState(false);

  const likes = item.likes === 0 ? "" : item.likes;

  const handleOpen = (id) => {
    setOpen(open === id ? false : id);
  };

  const handleLikeCallback = useCallback((id)=> {
    setIsAnimated(true);

    setTimeout(() => {
      setIsAnimated(false);
      handleLike(id);
    }, 300);
  }, [handleLike])

  const classIsLiked = item.isLiked ? "isLiked" : "icon-heart ";

  return (
    <div className="card-content">
      <button className="icon-container">
        <span
          className={classIsLiked}
          onClick={() => handleLikeCallback(item.id)}
        >
          <HeartIcon size="25" animation={isAnimated ? "icon-animation" : ""} />
        </span>
        <span className="count-item">{likes}</span>
      </button>
      <button className="icon-container" onClick={() => handleOpen(item.id)}>
        <span className="count-item two">{item.comments.length}</span>
        <CommentIcon size="25" />
      </button>
    </div>
  );
}

ButtonsCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export { ButtonsCard };
