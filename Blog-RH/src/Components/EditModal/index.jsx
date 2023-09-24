import PropTypes from "prop-types";
import { useCallback, useContext, useState } from "react";
import { ContextApp } from "../../Context";
import { CancelIcon } from "../Icons";
import "./styles.css";

function EditModal({ data }) {
  const { setShowModal, handleEditPost, setOpenOptions } = useContext(ContextApp);
  const [valueTitle, setValueTitle] = useState(data.title);
  const [valueImgSrc, setValueImgSrc] = useState(data.imgSrc);

  const handleEditPostCallback = useCallback(
    (id, title, imgSrc) => {
      handleEditPost(id, title, imgSrc);
      setShowModal(false);
      setOpenOptions(false);
    },
    [handleEditPost, setShowModal, setOpenOptions]
  );

  const handleTitle = (e) => {
    setValueTitle(e.target.value);
  };

  const handleImgSrc = (e) => {
    setValueImgSrc(e.target.value);
  };

  return (
    <div className="modal-container">
      <div className="modal">
        <div className="header-modal">
          <h2>Editar Publicación</h2>
          <button className="close-button" onClick={() => setShowModal(false)}>
            <CancelIcon />
          </button>
        </div>
        <form className="form">
          <input
            className="add-comment-container"
            type="text"
            defaultValue={valueTitle}
            onChange={handleTitle}
          />
          <input
            className="add-comment-container"
            type="text"
            defaultValue={valueImgSrc}
            onChange={handleImgSrc}
          />
          <button
            type="button"
            disabled={!valueTitle.trim() || !valueImgSrc.trim()}
            onClick={() =>
              handleEditPostCallback(data.id, valueTitle, valueImgSrc)
            }
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
}

EditModal.propTypes = {
  data: PropTypes.object,
};

export { EditModal };
