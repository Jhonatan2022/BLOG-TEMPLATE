import "./styles.css";

function LoadingSkeleton() {
  return (
    <div className="card loading">
      <div className="card-header loading-bar">
        <h2 className="card-title loading"></h2>
        <div className="options">
          <button title="settings" className="btn-options loading"></button>
        </div>
        <span className="card-date loading"></span>
      </div>
      <div className=""></div>
      <figure className="img-container">
        <div className="img loading"></div>
      </figure>
      <div className="card-content">
        <button className="icon-container loading">
          <span>
            <div className="icon-heart loading"></div>
          </span>
          <span className="count-item loading"></span>
        </button>
      </div>

      <div className="comments-container loading">
        <div className="loading-bar"></div>
        <div className="comments loading">
          <div className="comment loading">
            <picture className="avatar-user">
              <img className="loading" />
            </picture>
            <span className="info-comment">
              <span className="name-user loading"></span>
              <br />
              <p className="comment-text loading"></p>
            </span>
          </div>
        </div>
      </div>
      <div className="add-comment-container loading">
        <picture className="avatar-user">
          <img src="../../../Assets/Alejandro.jpg" alt="user" />
        </picture>
        <input
          type="text"
          className="add-comment loading"
          placeholder="Add a comment..."
        />
        <button type="button" className="btn-send loading"></button>
      </div>
    </div>
  );
}

export { LoadingSkeleton };
