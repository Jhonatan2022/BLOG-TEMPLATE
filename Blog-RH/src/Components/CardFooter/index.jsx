import { useCallback, useContext, useState } from "react";
import PropTypes from "prop-types";
import { ContextApp } from "../../Context";
import { SendIcon } from "../Icons";
import "./styles.css";

function CardFooter({ id }) {
  const { handleComment, setOpen, open } = useContext(ContextApp);
  const [textComment, setTextComment] = useState("");

  const handleInput = (e) => {
    setTextComment(e.target.value);
  };

  const handleCommentCallback = useCallback(
    (id, textComment) => {
      handleComment(id, textComment);
      setTextComment("");
      setOpen(open === id ? false : id);
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
        <img src="https://media.licdn.com/dms/image/C4E03AQGOb2QbOyDZMA/profile-displayphoto-shrink_800_800/0/1553644732460?e=1700697600&v=beta&t=dqcrf50Obbs18ICzgwN1TDahp9ISwTKk8eEUqQIpmQY" alt="user" />
      </picture>
      <input
        type="text"
        className="add-comment"
        placeholder="Add a comment..."
        value={textComment}
        onChange={handleInput}
        onKeyPress={handleKeyPress}
      />
      <button
        type="button"
        className="btn-send"
        onClick={() => handleCommentCallback(id, textComment)}
        disabled={!textComment.trim()}
      >
        <SendIcon />
      </button>
    </div>
  );
}

CardFooter.propTypes = {
  id: PropTypes.number.isRequired,
};

export { CardFooter };
