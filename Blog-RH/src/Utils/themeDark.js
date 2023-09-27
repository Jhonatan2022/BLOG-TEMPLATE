function themeDark(label, darkMode) {
  if (stylesObject[label]) {
    return darkMode ? stylesObject[label] : {};
  }
}



const stylesObject = {
  CARD: {
    backgroundColor: "var(--dark-card)",
  },
  CARD_TEXT: {
    color: "var(--white)",
  },
  CARD_ICON: "var(--white)",
};

export { themeDark };