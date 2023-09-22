import { useContext, useState } from "react";
import PropTypes from "prop-types";
import { ContextApp } from "../../Context";
import { EditModal } from "../EditModal";
import { SettingIcon, DeleteIcon, EditIcon } from "../Icons";
import "./styles.css";

function ButtonSeting({ id, title, imgSrc }) {
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

  const handleEdit = (id) => {
    setShowModal(true);
    setModalData({ id, title, imgSrc });
  };

  return (
    <div className="options">
      <button
        title="Settings"
        className="btn-options"
        onClick={() => handleOpenOptions(id)}
      >
        <SettingIcon size="25" />
      </button>
      {openOptions === id && (
        <ul className="menu-options">
          <button className="edit" onClick={() => handleEdit(id)}>
            <EditIcon size="25" />
          </button>
          <button className="delete" onClick={() => handleDelete(id)}>
            <DeleteIcon size="25" />
          </button>
        </ul>
      )}
      {showModal && modalData && modalData.id === id && (
        <EditModal data={modalData} />
      )}
    </div>
  );
}

ButtonSeting.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  imgSrc: PropTypes.string,
};

export { ButtonSeting };
