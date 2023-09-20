import { SendIcon } from "../Icons";
import "./styles.css";

function CardFooter() {
  return (
    <div className="add-comment-container">
      <picture className="avatar-user">
        <img src="https://robohash.org/stefan-one" alt="user" />
      </picture>
      <input
        type="text"
        className="add-comment"
        placeholder="Add a comment..."
      />
      <button>
        <SendIcon />
      </button>
    </div>
  );
}

export { CardFooter };
