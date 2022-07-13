// function onScroll() {
//   navigation.classList.add('scroll')
//   if (scrollY == 0) {
//     navigation.classList.remove('scroll')
//   }
// }

// ---Same function written as a if/else statement---

// function showNavOnScroll() {
//   console.log(scrollY)
//   if (scrollY > 0) {
//     navigation.classList.add('scroll')
//     return
//   }
//   navigation.classList.remove('scroll')
// }

window.addEventListener('scroll', onScroll)
onScroll()

function onScroll() {
  showNavOnScroll()
  showBackToTopButton()

  activateMenuAtCurrentSection(home)
  activateMenuAtCurrentSection(services)
  activateMenuAtCurrentSection(about)
  activateMenuAtCurrentSection(contact)
}

console.log()

function activateMenuAtCurrentSection(section) {
  const targetLine = scrollY + innerHeight / 2

  // verificar se a seção passou da linha alvo
  // quais dados são precisos?
  const sectionTop = section.offsetTop
  const sectionHeight = section.offsetHeight

  const sectionTopReachedOrPassedTargetLine = targetLine >= sectionTop

  // verificar se a base está abaixo da linha alvo
  // quais dados são precisos?
  const sectionEndsAt = sectionTop + sectionHeight

  const sectionEndPassedTargetLine = sectionEndsAt <= targetLine

  // limites da seção
  // fim da seção não pode estar acima da target line para determinar
  // que vc ainda está dentro dela, por isso !sectionEndPassedTargetLine
  const sectionBoundaries =
    sectionTopReachedOrPassedTargetLine && !sectionEndPassedTargetLine

  const sectionId = section.getAttribute('id')
  const menuElement = document.querySelector(`.menu a[href*=${sectionId}]`)

  menuElement.classList.remove('active')
  if (sectionBoundaries) {
    menuElement.classList.add('active')
  }
}

function showNavOnScroll() {
  const navigation = document.querySelector('#navigation')

  navigation.classList.add('scroll')
  if (scrollY == 0) {
    navigation.classList.remove('scroll')
  }
}

function showBackToTopButton() {
  const backToTopButton = document.querySelector('#backToTopButton')

  if (scrollY > 550) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

function openMenu() {
  document.body.classList.add('menu-expanded')
}

function closeMenu() {
  document.body.classList.remove('menu-expanded')
}

ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700
}).reveal(`
#home, 
#home img, 
#home .stats, 
#services,
#services header,
#services .card,
#about,
#about header,
#about .content`)
