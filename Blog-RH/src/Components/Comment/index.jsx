import PropTypes from "prop-types";
import { themeDark } from "../../Utils/ThemeDark";
import "./styles.css";

function Comment({ item, darkMode }) {
  return (
    <div className="comments-container">
      <div className="comments">
        {item.comments.map((comment) => (
          <div className="comment" 
            style={themeDark("CONTAINER_CARD", darkMode)}
            key={comment.id}>
            <picture className="avatar-user">
              <img
                src={comment.userImage}
                alt={comment.userName}
                title={comment.userName}
              />
            </picture>
            <span className="info-comment">
              <div className="name-date">
                <p className="name-user">{comment.userName}</p>
                <p className="date">{comment.date}</p>
              </div>
              <p className="comment-text">{comment.comment}</p>
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

Comment.propTypes = {
  item: PropTypes.object.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export { Comment };
