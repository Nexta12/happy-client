export const handleScrollIntoView = (id) => {
  const itemToScroll = document.getElementById(id);

  if (itemToScroll) {
    itemToScroll.scrollIntoView({ behavior: "smooth" });
  } else {
    console.log("Id not found");
  }
};

export const handleScrollToTop = () => {
  window.scrollTo(0, 0);
};
