
let animatedElements = []

const findElements = function () {
  const elements = Array.from(document.querySelectorAll('.js-scroll-fade-up'))
    .map(element => { return { node: element, animation: 'js-scroll-fade-up' }})
  animatedElements = elements;
}

const findElementsOffset = function() {
  animatedElements.forEach(el => {
    console.log(el.node)
    let loopEl = el;
    while (loopEl.node.offsetParent.nodeName !== 'BODY') {
      // do stuff if elements are positioned non-static
    }
    console.log(loopEl)
    el.positionIn = loopEl.node.offsetTop - window.innerHeight + loopEl.node.clientHeight;
  })
  console.log(animatedElements);
}

const handleScroll = function() {
  animatedElements.forEach(el => {
    if (window.pageYOffset > el.positionIn) {
      el.node.classList.add(el.animation  + '--activated')
      console.log(el)
    }
  })
}

const init = function () {
  findElements();
  findElementsOffset();
  window.onscroll = handleScroll
}

window.onload = () => {
  init()
  handleScroll()
}

