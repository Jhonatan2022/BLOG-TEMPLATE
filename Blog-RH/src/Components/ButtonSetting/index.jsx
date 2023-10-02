import { useContext, useState, lazy, Suspense } from "react";
import { ContextApp } from "../../Context";
import Icons from "../Icons";
import { themeDark } from "../../Utils/themeDark";
import "./styles.css";
const EditModal = lazy(() => import("../EditModal"));

function ButtonSeting({ id, title, imgSrc, darkMode }) {
  const {
    data,
    setData,
    setOpenOptions,
    openOptions,
    showModal,
    setShowModal,
  } = useContext(ContextApp);
  const { DeleteIcon, EditIcon, SettingIcon } = Icons();
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
        <ul
          className="menu-options"
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
        <Suspense fallback={<h1>Loading...</h1>}>
          <EditModal
            darkMode={darkMode}
            setShowModal={setShowModal}
            data={modalData}
          />
        </Suspense>
      )}
    </div>
  );
}

// export { ButtonSeting };
export default ButtonSeting;
