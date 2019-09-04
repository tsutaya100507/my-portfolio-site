// titleのfadeinアニメーション
let showTitle = function () {
  let title = document.getElementById('title')
  title.classList.add('title-active');
}

// self-descriptionアニメーション
let showDescription = function () {
  let desc = document.getElementById('self-description')
  desc.classList.add('desc-active');
}

let scrollFadeIn = function () {
  let element = document.getElementsByClassName('js-fadein')
  if (!element) return

  let fadeTiming = window.innerHeight > 768 ? 200 : 40
  let scrollY    = window.pageYOffset
  let windowH    = window.innerHeight

  for (let i=0;i<element.length;i++) {
    let elmClientRect = element[i].getBoundingClientRect()
    let elemY = scrollY + elmClientRect.top
    if(scrollY + windowH - fadeTiming > elemY) {
      element[i].classList.add('is-show')
    }
  }
}
// scrollFadeIn()
window.addEventListener('scroll', scrollFadeIn)


window.onload = function() {
  console.log('bbbb')
  setTimeout(showDescription, 1500)
  setTimeout(showTitle, 2000)
}
