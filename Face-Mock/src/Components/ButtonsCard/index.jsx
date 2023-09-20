import PropTypes from "prop-types";
import { useContext } from "react";
import { ContextApp } from "../../Context";
import { CommentIcon, HeartIcon } from "../Icons";
import "./styles.css";

function ButtonsCard({ item }) {
  const { setOpen, open, handleLike } = useContext(ContextApp);

  const likes = item.likes === 0 ? "" : item.likes;

  const handleOpen = (id) => {
    setOpen(open === id ? false : id);
  };

  return (
    <div className="card-content">
      <button className="icon-container">
        <span className="icon-heart" onClick={() => handleLike(item.id)}>
          <HeartIcon size="25" />
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
