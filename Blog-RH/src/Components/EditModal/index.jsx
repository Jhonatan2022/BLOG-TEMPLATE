import { useCallback, useContext, useState } from "react";
import { ContextApp } from "../../Context";
import Icons from "../Icons";
import { themeDark } from "../../Utils/themeDark";
import "./styles.css";

function EditModal({ setShowModal, data, darkMode }) {
  const { handleEditPost, setOpenOptions } = useContext(ContextApp);
  const { CancelIcon } = Icons();
  const [valueTitle, setValueTitle] = useState(data.title);
  const [valueImgSrc, setValueImgSrc] = useState(data.imgSrc);
  const iconDark = darkMode ? themeDark("CARD_ICON", darkMode) : "";

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
    <div
      className="modal-container"
      style={themeDark("MODAL_BACKGROUND", darkMode)}
    >
      <div className="modal" style={themeDark("CARD", darkMode)}>
        <div className="header-modal">
          <h2 className="title-modal" style={themeDark("CARD_TEXT", darkMode)}>
            Editar Publicación
          </h2>
          <button className="close-button" onClick={() => setShowModal(false)}>
            <CancelIcon color={iconDark} />
          </button>
        </div>
        <form className="form" encType="multipart/form-data">
          <input
            style={themeDark("BORDER_LABEL", darkMode)}
            className="add-comment-container"
            type="text"
            defaultValue={valueTitle}
            onChange={handleTitle}
          />
          <input
            style={themeDark("BORDER_LABEL", darkMode)}
            className="add-comment-container"
            type="text"
            defaultValue={valueImgSrc}
            onChange={handleImgSrc}
          />
          <button
            style={themeDark("BUTTON_CARD", darkMode)}
            type="button"
            className={darkMode ? "btn-save-dark" : "btn-save"}
            disabled={!valueTitle.trim() || !valueImgSrc.trim()}
            onClick={() =>
              handleEditPostCallback(data.id, valueTitle, valueImgSrc)
            }
            aria-label="Guardar Cambios"
          >
            Guardar Cambios
          </button>
        </form>
      </div>
    </div>
  );
}

// export { EditModal };
export default EditModal;
