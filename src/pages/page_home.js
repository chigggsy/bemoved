// import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import SplitType from 'split-type'
import gsap from 'gsap'

const pageHome = () => {
  const testimonialMain = document.querySelector('.testimonial-main')
  const testimonialList = document.querySelector('.testimonial-list')
  const testimonialListParent = testimonialList.parentNode

  window.addEventListener('resize', () => {
    if (window.innerWidth < 992) {
      testimonialMainMobile()
    } else if (window.innerWidth >= 992) {
      testimonialMainDesktop()
    }
  })

  const testimonialMainMobile = () => {
    testimonialListParent.insertBefore(testimonialMain, testimonialList)
  }
  const testimonialMainDesktop = () => {
    testimonialListParent.insertBefore(testimonialList, testimonialMain)
  }

  // Animation
  const tl_hero = gsap.timeline()
  tl_hero
    .from(
      '.hero-plug.is-left',
      { x: -100, rotate: 5, opacity: 0, duration: 1.25, ease: 'power3.out' },
      0.11
    )
    .from(
      '.hero-plug.is-right',
      { x: 100, rotate: -5, opacity: 0, duration: 1.25, ease: 'power3.out' },
      0.115
    )
}

export default pageHome
