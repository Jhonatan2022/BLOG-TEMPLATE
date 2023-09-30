function themeDark(label, darkMode) {
  if (stylesObject[label]) {
    return darkMode ? stylesObject[label] : {};
  }
}

const stylesObject = {
  NAVBAR: {
    backgroundColor: "var(--nav-dark)",
  },
  LOGO: {
    
  },
  MAIN_CONTAINER: {
    backgroundColor: "var(--main-dark)",
  },
  CONTAINER_CARD: {
    backgroundColor: "var(--container-card-dark)",
    boxShadow: "none",
  },
  CARD: {
    backgroundColor: "var(--card-dark)",
    boxShadow: "var(--box-shadow-cards-dark)",
  },
  BORDER_LABEL: {
    border: "2px solid var(--border-gray-dark)",
    background: "none",
    color: "var(--text-card-dark)",
  },
  CARD_TEXT: {
    color: "var(--white)",
  },
  TEXT_GRAY: {
    color: "var(--text-card-dark)",
  },
  CARD_ICON: "var(--text-card-dark)",
  BUTTON: {
    backgroundColor: "var(--border-gray-dark)",
  },
  BUTTON_CARD: {
    border: "2px solid var(--border-gray-dark)",
  },
  CARD_LEFT:{
    border: "2px solid var(--border-gray-dark)",
    boxShadow: "var(--box-shadow-cards-dark)",
  },
  MODAL_BACKGROUND: {
    backgroundColor: "var(--modal-background-dark)",
  },
};

export { themeDark };
