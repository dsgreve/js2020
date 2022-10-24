function scrollToAccept() {
  const terms = document.querySelector('.terms-and-conditions');
  const watch = document.querySelector('.watch');
  const button = document.querySelector('.accept');
  if (!terms) {
    return; // quit this there aren't terms on the page
  }
  
  // intersection observer
  function obCallback(payload) {
    if (payload[0].intersectionRatio === 1) {
      button.disabled = false;
      // stop observing to prevent unessary cpu usage
      // ob.unobserve(terms.lastElementChild);
    } else {
      button.disabled = true;
    }
  }
  const ob = new IntersectionObserver(obCallback, {
    root: terms,
    threshold: 1,
  });

  ob.observe(terms.lastElementChild);

}

scrollToAccept();