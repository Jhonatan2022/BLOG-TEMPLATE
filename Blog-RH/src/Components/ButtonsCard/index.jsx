import PropTypes from "prop-types";
import { useCallback, useContext, useState } from "react";
import { ContextApp } from "../../Context";
import { CommentIcon, HeartIcon } from "../Icons";
import { themeDark } from "../../Utils/themeDark";
import "./styles.css";

function ButtonsCard({ item }) {
  const { setOpen, open, handleLike, darkMode } = useContext(ContextApp);
  const [isAnimated, setIsAnimated] = useState(false);

  const likes = item.likes === 0 ? "" : item.likes;
  const iconDark = darkMode ? themeDark("CARD_ICON", darkMode) : "";
  const comments =
    item.comments.length === 0 ? (
      ""
    ) : (
      <button className="icon-container" onClick={() => handleOpen(item.id)}>
        <CommentIcon color={iconDark} size="25"  />
        <span className="count-item" style={themeDark('CARD_TEXT', darkMode)}>{item.comments.length}</span>
      </button>
    );

  const handleOpen = (id) => {
    setOpen(open === id ? false : id);
  };

  const handleLikeCallback = useCallback(
    (id) => {
      setIsAnimated(true);

      setTimeout(() => {
        setIsAnimated(false);
        handleLike(id);
      }, 220);
    },
    [handleLike]
  );

  const classIsLiked = item.isLiked ? "isLiked" : "icon-heart ";

  return (
    <div className="card-content">
      <div className="card-buttons">
        <button className="icon-container">
          <span
            className={classIsLiked}
            onClick={() => handleLikeCallback(item.id)}
          >
            <HeartIcon
            color={iconDark}
              size="25"
              animation={isAnimated ? "icon-animation" : ""}
            />
          </span>
          <span className="count-item" style={themeDark('CARD_TEXT', darkMode)}>{likes}</span>
        </button>
        {comments}
      </div>
    </div>
  );
}

ButtonsCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export { ButtonsCard };
