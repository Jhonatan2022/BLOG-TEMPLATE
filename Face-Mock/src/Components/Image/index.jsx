// import { useState } from "react";
import { useContext } from "react";
import { ContextApp } from "../../Context";
import { Comment } from "../Comment";
import { ButtonsCard } from "../ButtonsCard";

function Image() {
  const { data, open } = useContext(ContextApp);
  // const [open, setOpen] = useState(false);
  // const [openOptions, setOpenOptions] = useState(false);

  // const handleOpenOptions = (id) => {
  //   setOpenOptions(openOptions === id ? false : id);
  // };

  // const handleOpen = (id) => {
  //   setOpen(open === id ? false : id);
  // };

  // const handleDelete = (id) => {
  //   setData(data.filter((item) => item.id !== id));
  // };

  return (
    <section className="main-section">
      {data.length === 0 && <h1 className="no-data">No hay datos</h1>}
      {data.map((item) => (
        <div className="card" key={item.id}>
          <h2 className="card-title">{item.title}</h2>
          <figure className="img-container">
            <img src={item.imgSrc} alt={item.title} title={item.title} />
          </figure>
          {/* <div className="card-content">
            <span className="card-date">{item.date}</span>
            <button
              className="btn-comments"
              onClick={() => handleOpen(item.id)}
            >
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
                  <button
                    className="delete"
                    onClick={() => handleDelete(item.id)}
                  >
                    Eliminar
                  </button>
                </ul>
              )}
            </div>
          </div> */}
          <ButtonsCard item={item} />
          {open === item.id && <Comment item={item} />}

          <div className="add-comment-container">
            <picture className="avatar-user">
              <img src="https://robohash.org/stefan-one" alt="user" />
            </picture>
            <input
              type="text"
              className="add-comment"
              placeholder="Add a comment..."
            />
            <button className="btn-add-comment">⏩</button>
          </div>
        </div>
      ))}
    </section>
  );
}

export { Image };
