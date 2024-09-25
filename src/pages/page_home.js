// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import gsap from 'gsap'
import SplitType from 'split-type'

const pageHome = () => {
  const st_hero = new SplitType('.section.is-hero p')

  const tl_hero = gsap.timeline()
  tl_hero.from(st_hero.lines, {
    y: 15,
    opacity: 0,
    duration: 0.75,
    stagger: 0.1,
  })
}

export default pageHome
