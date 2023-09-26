import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import { formattedDate } from '../Utils/currentDate';

const ContextApp = createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState(initialState);
  const [open, setOpen] = useState(false);
  const [openOptions, setOpenOptions] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [searchData, setSearchData] = useState(""); // Valor input search
  const [filterData, setFilterData] = useState(data); // Publicaciones filtradas
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      const filtered = data.filter((item) => {
        return item.title.toLowerCase().includes(searchData.toLowerCase());
      });
      setFilterData(filtered); // Actualiza el estado de las publicaciones filtradas
    }, 300); // 300 milisegundos

    // Limpia el temporizador anterior en cada cambio de searchData
    return () => clearTimeout(timer);
  }, [data, searchData]);

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
          date: formattedDate,
          userName: "Alejandro Sighinolfi",
          userImage: "../../Assets/Alejandro.jpg",
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
    loading,
    searchData,
    filterData, // Publicaciones filtradas para el contexto
    darkMode,
  };

  const statesModifiers = {
    setData,
    setOpen,
    setOpenOptions,
    setShowModal,
    setLoading,
    setSearchData,
    setDarkMode,
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

const initialState = [
  {
    id: 1,
    isLiked: false,
    likes: 5,
    title: "Mejore su salud y su bienestar",
    date: "12/15/2022",
    imgSrc: "../../Assets/1.png",
    comments: [
      {
        id: 1,
        date: "12/15/2022",
        userName: "Rocio Hernández Kopp",
        userImage: "../../Assets/Rocio.jpg",
        comment: "Gracias por la inforación",
      },
    ],
  },
  {
    id: 2,
    isLiked: false,
    likes: 1,
    title: "Analista de inventarios área administración DAAS y activos",
    date: "12/15/2022",
    imgSrc: "../../Assets/2.png",
    comments: [
      {
        id: 1,
        date: "12/15/2022",
        userName: "Andres Ardila",
        userImage: "../../Assets/Andres.jpg",
        comment: "Gracias por la inforación",
      },
      {
        id: 2,
        date: "12/15/2022",
        userName: "Rocio Hernández Kopp",
        userImage: "../../Assets/Rocio.jpg",
        comment: "Maravillosa Oferta",
      },
    ],
  },
  {
    id: 3,
    isLiked: false,
    likes: 2,
    title: "Cierres viales los días 25 al 29 de septiembre",
    date: "12/15/2022",
    imgSrc: "../../Assets/3.png",
    comments: [
      {
        id: 1,
        date: "12/15/2022",
        userName: "Andres Ardila",
        userImage: "../../Assets/Andres.jpg",
        comment: "Gracias por la inforación",
      },
      {
        id: 2,
        date: "12/15/2022",
        userName: "Rocio Hernández Kopp",
        userImage: "../../Assets/Rocio.jpg",
        comment: "Importante!!",
      },
    ],
  },
  {
    id: 4,
    isLiked: false,
    likes: 2,
    title: "Feliz día del amor y la amistad",
    date: "12/15/2022",
    imgSrc: "../../Assets/4.png",
    comments: [
      {
        id: 1,
        date: "12/15/2022",
        userName: "Andres Ardila",
        userImage: "../../Assets/Andres.jpg",
        comment: "Gracias por la inforación",
      },
      {
        id: 2,
        date: "12/15/2022",
        userName: "Rocio Hernández Kopp",
        userImage: "../../Assets/Rocio.jpg",
        comment: "Feliz día para todos",
      },
    ],
  },
  {
    id: 5,
    isLiked: false,
    likes: 2,
    title: "Inconvenientes de movilidad debido al día del carro",
    date: "12/15/2022",
    imgSrc: "../../Assets/5.png",
    comments: [
      {
        id: 1,
        date: "12/15/2022",
        userName: "Andres Ardila",
        userImage: "../../Assets/Andres.jpg",
        comment: "Gracias por la inforación",
      },
      {
        id: 2,
        date: "12/15/2022",
        userName: "Rocio Hernández Kopp",
        userImage: "../../Assets/Rocio.jpg",
        comment: "Importante!!",
      },
    ],
  },
];