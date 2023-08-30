// gsap.registerPlugin(ScrollTrigger)

// const locoScroll = new LocomotiveScroll({
//   el: document.querySelector('.main'),
//   smooth: true
// })
// locoScroll.on('scroll', ScrollTrigger.update)

// ScrollTrigger.scrollerProxy('.main', {
//   scrollTop (value) {
//     return arguments.length
//       ? locoScroll.scrollTo(value, 0, 0)
//       : locoScroll.scroll.instance.scroll.y
//   },
//   getBoundingClientRect () {
//     return {
//       top: 0,
//       left: 0,
//       width: window.innerWidth,
//       height: window.innerHeight
//     }
//   },
//   pinType: document.querySelector('.main').style.transform
//     ? 'transform'
//     : 'fixed'
// })

// ScrollTrigger.addEventListener('refresh', () => locoScroll.update())

// ScrollTrigger.refresh()

// var tl = gsap.timeline({
//   scrollTrigger: {
//     trigger: '.hero',
//     scroller: '.main',
//     markers: false,
//     start: 'top 0%',
//     end: 'top 0',
//     scrub: 3
//   }
// })
// tl.to('.buyoption', {
//   width: '90%'
// })
// tl.to('.hero', {
//   width: '90%'
// })

// Play an animation back on second click

// let iconMenu = document.querySelector('.bodymovinanim')

// let animationMenu = bodymovin.loadAnimation({
//   container: iconMenu,
//   renderer: 'svg',
//   loop: false,
//   autoplay: false,
//   path: 'home.json'
// })

// var directionMenu = 1
// iconMenu.addEventListener('click', e => {
//   animationMenu.setDirection(directionMenu)
//   animationMenu.play()
//   directionMenu = -directionMenu
// })

// document.querySelector('#contact-form').addEventListener('submit', e => {
//   e.preventDefault()
//   e.target.elements.name.value = ''
//   e.target.elements.email.value = ''
//   e.target.elements.message.value = ''
// })

const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.navlinks')

burger.addEventListener('click', () => {
  navLinks.classList.toggle('active')
  burger.classList.toggle('active')
})
