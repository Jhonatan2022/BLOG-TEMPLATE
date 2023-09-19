import PropTypes from "prop-types";

function Comment({ item }) {
  return (
    <div className="comments-container">
      <div className="comments">
        {item.comments.map((comment) => (
          <div className="comment" key={comment.id}>
            <picture className="avatar-user">
              <img src={comment.userImage} alt={comment.userName} />
            </picture>
            <span className="comment-user">{comment.userName}</span>
            <span className="comment-text">{comment.comment}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

Comment.propTypes = {
  item: PropTypes.object.isRequired,
};

export { Comment };
