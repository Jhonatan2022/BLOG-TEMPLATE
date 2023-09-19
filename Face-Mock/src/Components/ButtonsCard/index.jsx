import PropTypes from "prop-types";
import { useState } from "react";
import { useContext } from "react";
import { ContextApp } from "../../Context";

function ButtonsCard({ item }) {
  const { data, setData, setOpen, open } = useContext(ContextApp);
  const [openOptions, setOpenOptions] = useState(false);

  const handleOpenOptions = (id) => {
    setOpenOptions(openOptions === id ? false : id);
  };

  const handleOpen = (id) => {
    setOpen(open === id ? false : id);
  };

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  return (
    <div className="card-content">
      <span className="card-date">{item.date}</span>
      <button className="btn-comments" onClick={() => handleOpen(item.id)}>
        📧
      </button>
      <div className="options">
        <button
          className="btn-options"
          onClick={() => handleOpenOptions(item.id)}
        >
          ⚙️
        </button>
        {openOptions === item.id && (
          <ul className="menu-options">
            <button className="edit">Editar</button>
            <button className="delete" onClick={() => handleDelete(item.id)}>
              Eliminar
            </button>
          </ul>
        )}
      </div>
    </div>
  );
}

ButtonsCard.propTypes = {
  item: PropTypes.object.isRequired,
};

export { ButtonsCard };
