import PropTypes from "prop-types";
import { useContext } from "react";
import { ContextApp } from "../../Context";
import { CancelIcon } from "../Icons";
import "./styles.css";

function EditModal({ data }) {
  const { setShowModal } = useContext(ContextApp);

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="header-modal">
          <h2>Edit Post</h2>
          <button className="close-button" onClick={() => setShowModal(false)}>
            <CancelIcon />  
          </button>
        </div>
        <form className="form">
          <input className="add-comment-container" type="text" defaultValue={data.title} />
          <input className="add-comment-container" type="text" defaultValue={data.imgSrc} />
          <button>Save</button>
        </form>
      </div>
    </div>
  );
}

EditModal.propTypes = {
  data: PropTypes.object,
};

export { EditModal };
