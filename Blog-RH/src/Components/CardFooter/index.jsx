import { useCallback, useContext, useState } from "react";
import PropTypes from "prop-types";
import { ContextApp } from "../../Context";
import { SendIcon } from "../Icons";
import { LazyLoadingImg } from "../../Utils/LazyLoading";
import { themeDark } from "../../Utils/ThemeDark";
import "./styles.css";

function CardFooter({ id, darkMode }) {
  const { handleComment } = useContext(ContextApp);
  const [textComment, setTextComment] = useState("");
  const iconDark = darkMode ? themeDark("CARD_ICON", darkMode) : "";

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleCommentCallback = useCallback(
    (id, textComment) => {
      handleComment(id, textComment);
      setTextComment("");
    },
    [handleComment]
  );

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && textComment.trim()) {
      handleCommentCallback(id, textComment);
    }
  };

  return (
    <div className="add-comment-container">
      <picture className="avatar-user">
        <LazyLoadingImg
          src="https://raw.githubusercontent.com/Jhonatan2022/BLOG-TEMPLATE/main/Blog-RH/Assets/Alejandro.jpg"
          alt="avatar"
          title="avatar"
        />
      </picture>
      <input
        style={themeDark("BORDER_LABEL", darkMode)}
        type="text"
        className={darkMode ? "add-comment-dark" : "add-comment"}
        placeholder="Agrega Un Comentario..."
        value={textComment}
        onChange={handleInput}
        onKeyPress={handleKeyPress}
      />
      <button
        style={themeDark("BUTTON_CARD", darkMode)}
        type="button"
        className={darkMode ? "btn-send-dark" : "btn-send"}
        onClick={() => handleCommentCallback(id, textComment)}
        disabled={!textComment.trim()}
        aria-label="Enviar Comentario"
      >
        <SendIcon color={iconDark} />
      </button>
    </div>
  );
}

CardFooter.propTypes = {
  id: PropTypes.number.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export { CardFooter };
