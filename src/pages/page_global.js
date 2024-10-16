import gsap from 'gsap'

const pageGlobal = () => {
  const navbar = () => {
    // Declaring variables
    const navHamburger = document.querySelector('.nav-hamburger')
    const navIconMenu = document.querySelector('.nav-icon-menu')
    const navIconClose = document.querySelector('.nav-icon-close')
    const navItemsMobile = document.querySelector('.nav-items-mobile')
    const currentSlug = window.location.pathname.split('/').pop() || 'home'
    const activeNavItemList = document.querySelectorAll(
      `[data-page="${currentSlug}"]`
    )

    // Functions
    const toggleNav = () => {
      navIconMenu.classList.toggle('nav-icon-inactive')
      navIconClose.classList.toggle('nav-icon-inactive')
      navItemsMobile.classList.toggle('nav-mobile-open')
    }

    activeNavItemList.forEach((activeNavItem) => {
      if (activeNavItem) {
        const highlight = activeNavItem.querySelector('.nav-item--highlight')

        if (highlight) {
          highlight.style.opacity = 1
        }
      }
    })

    // Events
    navHamburger.addEventListener('click', toggleNav)
  }

  const reviewCarousel = () => {
    const carouselWrapper = document.querySelector('.review-list-wrapper')

    if (carouselWrapper) {
      const carousel = document.querySelector('.review-list')
      const reviews = gsap.utils.toArray('.review')

      const totalWidth = reviews.reduce(
        (acc, review) => acc + review.offsetWidth,
        0
      )

      const cloneCount = Math.ceil(carouselWrapper.offsetWidth / totalWidth) + 1
      for (let i = 0; i < cloneCount; i++) {
        reviews.forEach((review) => {
          carousel.appendChild(review.cloneNode(true))
        })
      }

      // Animation
      gsap.set(carousel, { width: totalWidth * (cloneCount + 1) })

      gsap.to(carousel, {
        x: -totalWidth,
        ease: 'none',
        duration: reviews.length * 8, // Adjust the speed
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x) => parseFloat(x) % totalWidth),
        },
      })
    }
  }
  navbar()
  reviewCarousel()
}

export default pageGlobal
