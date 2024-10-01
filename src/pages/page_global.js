const pageGlobal = () => {
  const navbar = () => {
    const navHamburger = document.querySelector('.nav-hamburger')
    const navMobileMenu = document.querySelector('.nav-item-list.is-mobile')
    const navIconMenu = document.querySelector('.nav-icon-menu')
    const navIconClose = document.querySelector('.nav-icon-close')
    navHamburger.addEventListener('click', toggleNav)

    function toggleNav() {
      navMobileMenu.classList.toggle('is-open')
      navIconMenu.classList.toggle('nav-icon-inactive')
      navIconClose.classList.toggle('nav-icon-inactive')
    }
  }
  navbar()
}

export default pageGlobal
