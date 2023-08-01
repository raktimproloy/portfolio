const sectionHandler = (id) => {
  console.log(id)
    const element  = document.getElementById(id)
    if (element) {
        // 👇 Will scroll smoothly to the top of the next section
        element.scrollIntoView({ behavior: 'smooth' });
      }
}

export default sectionHandler;