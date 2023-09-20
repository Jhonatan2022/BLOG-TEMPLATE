import PropTypes from "prop-types";
import "./styles.css";

function Comment({ item }) {
  return (
    <div className="comments">
      {item.comments.map((comment) => (
        <div className="comment" key={comment.id}>
          <picture className="avatar-user">
            <img src={comment.userImage} alt={comment.userName} title={comment.userName} />
          </picture>
          <span className="info-comment">
            <span className="name-user">{comment.userName}</span>
            <br />
            <p className="commnet-text">{comment.comment}</p>
          </span>
        </div>
      ))}
    </div>
  );
}

Comment.propTypes = {
  item: PropTypes.object.isRequired,
};

export { Comment };
