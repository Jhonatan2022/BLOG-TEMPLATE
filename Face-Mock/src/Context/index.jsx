import PropTypes from "prop-types";
import { createContext, useState } from "react";

const ContextApp = createContext();

function ContextProvider({ children }) {
  const [data, setData] = useState(initialState);
  const [open, setOpen] = useState(false);

  return (
    <ContextApp.Provider
      value={{
        data,
        setData,
        open,
        setOpen,
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
  title: "name",
  date: "12/15/2022",
  imgSrc:
    "https://mail.google.com/mail/u/0?ui=2&ik=275fd1c23b&attid=0.1.0.1&permmsgid=msg-f:1777501211860220460&th=18aaf3ef40c13a2c&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ8n8ZCYPMH-qgmQOVKnoWjpUmbc_ALQh8Tw3vKYmeHsylQ_muW9JQPacnjpeq5x-PmjhmPGtRqYZqQ4yfMZVZ49IJW3UZVWJhQ6utiYaBnTTi06-OZb2qT2dRc&disp=emb",
  comments: [
    {
      id: 1,
      userName: "hola de verdad",
      userImage: "https://unavatar.io/github/karla-antonio",
      comment: "hola primera publicacion",
    },
    {
      id: 2,
      userName: "hola 1",
      userImage: "https://unavatar.io/github/stefanone",
      comment: "Comment first card",
    },
  ],
});
initialState.push({
  id: 2,
  title: "name",
  date: "12/15/2022",
  imgSrc:
    "https://mail.google.com/mail/u/0?ui=2&ik=275fd1c23b&attid=0.2.0.1&permmsgid=msg-f:1777501211860220460&th=18aaf3ef40c13a2c&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ9ZQ_Q5MBqYPtznLhaX8hriLdCYjpUgh-zdUorTihQvBADPueuBPaZ4TvpaD0nr37eAXoSWf9Am5Po0WsHhrcIvyz_IkmXTxkXgV049_QXA7m9Drlz1S1FSX_g&disp=emb",
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
  title: "name",
  date: "12/15/2022",
  imgSrc:
    "https://mail.google.com/mail/u/0?ui=2&ik=275fd1c23b&attid=0.3.0.1&permmsgid=msg-f:1777501211860220460&th=18aaf3ef40c13a2c&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_b9b0tK-Bv1Y2VgAT51Jcy74Y0yhRTaREQgQJQQYQYnmZKI3i_UXqk98bOgME9EbnoJ9awGGQSreynIbMzguE6MgMh8OFrWxYTRZbfrIziUvRscOMfqfFhbDg&disp=emb",
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
  title: "name",
  date: "12/15/2022",
  imgSrc:
    "https://mail.google.com/mail/u/0?ui=2&ik=275fd1c23b&attid=0.4.0.1&permmsgid=msg-f:1777501211860220460&th=18aaf3ef40c13a2c&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_o1T9Otemk4-4s_NnwR7BiVBqKroYgzGaFY3gPj4UI_rmWbe2Llr97JQ_h-XzeuMPHbHRMrnvyLaT6E2i3LwKug2MO1ni0nXoS4wMXkxBi00CPMQM4EmbeBLM&disp=emb",
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
  title: "name",
  date: "12/15/2022",
  imgSrc:
    "https://mail.google.com/mail/u/0?ui=2&ik=275fd1c23b&attid=0.5.0.1&permmsgid=msg-f:1777501211860220460&th=18aaf3ef40c13a2c&view=fimg&fur=ip&sz=s0-l75-ft&attbid=ANGjdJ_BvWfcvETP7AH9pFEebvVWvDw26OXx0KFmG4nEBMp7KsbHHR_Fd6lAWAo-iNJNAV4lRqCz52iUrnSGvIV3LdapTj98wvfL9YVDYJCwqLBCsneyeMSMBGVKVgg&disp=emb",
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
