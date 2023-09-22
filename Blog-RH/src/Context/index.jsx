import PropTypes from "prop-types";
import { createContext, useState } from "react";

const ContextApp = createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState(initialState);
  const [open, setOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleLike = (id) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        item.isLiked = !item.isLiked;
        item.isLiked ? item.likes++ : item.likes--;
      }
      return item;
    });
    setData(newData);
  };

  const idCommentImprovised = (id) => {
    return id + 1;
  };

  const handleComment = (id, comment) => {
    const newData = data.map((item) => {
      const comments = item.comments.length;
      if (item.id === id) {
        item.comments.push({
          id: idCommentImprovised(comments),
          userName: "Manuel Hernandez",
          userImage: "https://unavatar.io/github/jhonatan2022",
          comment: comment,
        });
      }
      return item;
    });
    setData(newData);
  };

  const handleEditPost = (id, title, imgSrc) => {
    const newData = data.map((item) => {
      if (item.id === id) {
        item.title = title;
        item.imgSrc = imgSrc;
      }
      return item;
    });
    setData(newData);
  };

  const states = {
    data,
    open,
    openOptions,
    showModal,
  };

  const statesModifiers = {
    setData,
    setOpen,
    setOpenOptions,
    setShowModal,
  };

  const actions = {
    handleLike,
    handleComment,
    handleEditPost,
  };

  return (
    <ContextApp.Provider
      value={{
        ...states,
        ...statesModifiers,
        ...actions,
      }}
    >
      {children}
    </ContextApp.Provider>
  );
}

ContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ContextProvider, ContextApp };

const initialState = [];
initialState.push({
  id: 1,
  isLiked: false,
  likes: 5,
  title: "name",
  date: "12/15/2022",
  imgSrc: "../../Assets/1.png",
  comments: [],
});
initialState.push({
  id: 2,
  isLiked: false,
  likes: 0,
  title: "name",
  date: "12/15/2022",
  imgSrc: "../../Assets/2.png",
  comments: [
    {
      id: 1,
      userName: "hola 2",
      userImage: "https://unavatar.io/github/stefanone",
      comment: "second card",
    },
    {
      id: 2,
      userName: "hola2",
      userImage: "https://unavatar.io/github/juanpablogdl",
      comment: "second card",
    },
  ],
});
initialState.push({
  id: 3,
  isLiked: false,
  likes: 0,
  title: "name",
  date: "12/15/2022",
  imgSrc: "../../Assets/3.png",
  comments: [
    {
      id: 1,
      userName: "hola 3",
      userImage: "https://unavatar.io/github/jhonatan2022",
      comment: "tercera publicacion",
    },
    {
      id: 2,
      userName: "hola 3",
      userImage: "https://unavatar.io/github/manuelduarte077",
      comment: "Comment 2",
    },
  ],
});
initialState.push({
  id: 4,
  isLiked: false,
  title: "name",
  date: "12/15/2022",
  imgSrc: "../../Assets/4.png",
  comments: [
    {
      id: 1,
      userName: "hola 3",
      userImage: "https://unavatar.io/github/jhonatan2022",
      comment: "tercera publicacion",
    },
    {
      id: 2,
      userName: "hola 3",
      userImage: "https://unavatar.io/github/manuelduarte077",
      comment: "Comment 2",
    },
  ],
});
initialState.push({
  id: 5,
  isLiked: false,
  title: "name",
  date: "12/15/2022",
  imgSrc: "../../Assets/5.png",
  comments: [
    {
      id: 1,
      userName: "hola 3",
      userImage: "https://unavatar.io/github/jhonatan2022",
      comment: "tercera publicacion",
    },
    {
      id: 2,
      userName: "hola 3",
      userImage: "https://unavatar.io/github/manuelduarte077",
      comment: "Comment 2",
    },
  ],
});
