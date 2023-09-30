import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ContextApp } from "../../Context";
import { EditModal } from "../EditModal";
import { SettingIcon, DeleteIcon, EditIcon } from "../Icons";
import { themeDark } from "../../Utils/ThemeDark";
import "./styles.css";

function ButtonSeting({ id, title, imgSrc, darkMode }) {
  const {
    data,
    setData,
    setOpenOptions,
    openOptions,
    showModal,
    setShowModal,
  } = useContext(ContextApp);
  const [modalData, setModalData] = useState(null);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const handleOpenOptions = (id) => {
    setOpenOptions(openOptions === id ? false : id);
  };

  // Convertimos handleEdir en una función asíncrona
  const handleEdit = (id) => {
    setShowModal(true);
    setModalData({ id, title, imgSrc });
  };

  const iconDark = darkMode ? themeDark("CARD_ICON", darkMode) : "";

  return (
    <div className="options">
      <button
        title="Settings"
        className="btn-options"
        onClick={() => handleOpenOptions(id)}
      >
        <SettingIcon color={iconDark} size="25" />
      </button>
      {openOptions === id && (
        <ul className="menu-options"
          style={themeDark("CONTAINER_CARD", darkMode)}
        >
          <button className="edit" onClick={() => handleEdit(id)}>
            <EditIcon color={iconDark} size="25" />
          </button>
          <button className="delete" onClick={() => handleDelete(id)}>
            <DeleteIcon color={iconDark} size="25" />
          </button>
        </ul>
      )}
      {showModal && modalData && modalData.id === id && (
        <EditModal data={modalData} darkMode={darkMode} />
      )}
    </div>
  );
}

ButtonSeting.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  imgSrc: PropTypes.string,
  darkMode: PropTypes.bool,
};

export { ButtonSeting };
