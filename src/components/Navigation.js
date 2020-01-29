import React from 'react'
import $ from 'jquery'
import { NavLink } from 'react-router-dom'
import '../styles/Navigation.css'
import kyoImg from '../IMG/kyo.png'

class Navigations extends React.Component {
  state = {
    navActive: false,
    opacityArrow: false,
    color: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.scrollForArrow)

    this.colorChange()
  }

  colorChange = () => {
    setInterval(() => {
      this.setState({
        color: !this.state.color
      })
    }, 12000)
  }

  scrollForArrow = () => {
    let scrollHeight = window.scrollY

    if (scrollHeight > 500) {
      this.setState({
        opacityArrow: true
      })
    } else {
      this.setState({
        opacityArrow: false
      })
    }
  }

  handleClickArrowUp = () => {
    $('html').animate({
      scrollTop: 0
    }, 1000)
  }

  handleClickActiveNav = () => {
    this.setState({
      navActive: !this.state.navActive
    })
  }

  handleNavLinkClick = () => {
    this.setState({
      navActive: false,
    })
  }

  handleArrowMenuClick = () => {
    this.setState({
      navActive: false,
    })
  }


  render() {
    let classes = ['nav']
    if (this.state.navActive) classes.push('navActive')
    if (!this.state.navActive) classes = ['nav']

    let classesNavLink = []
    if (this.state.color) classesNavLink.push('colorWhite')
    if (this.state.color === false) {
      classesNavLink.slice(0, 1);
      classesNavLink.push('colorBlack')
    }

    return (
      <>
        <div style={this.state.color ? { backgroundColor: 'black' } : { backgroundColor: 'white' }} className={classes.join(' ')}>
          <nav>
            <ul>
              <li>
                <img className='kyo' src={kyoImg} alt="kyo" /><NavLink className={classesNavLink.join(" ")} onClick={this.handleNavLinkClick} exact to="/">Start</NavLink></li>
              <li><img className='kyo' src={kyoImg} alt="kyo" /><NavLink className={classesNavLink.join(" ")} onClick={this.handleNavLinkClick} to="treningi">Treningi</NavLink></li>
              <li><img className='kyo' src={kyoImg} alt="kyo" /><NavLink className={classesNavLink.join(" ")} onClick={this.handleNavLinkClick} to="kyokushin">Kyokushin</NavLink></li>
              <li><img className='kyo' src={kyoImg} alt="kyo" /><NavLink className={classesNavLink.join(" ")} onClick={this.handleNavLinkClick} to="egzamin">Egzamin</NavLink></li>
              <li><img className='kyo' src={kyoImg} alt="kyo" /><NavLink className={classesNavLink.join(" ")} onClick={this.handleNavLinkClick} to="galeria">Galeria</NavLink></li>
              <li><img className='kyo' src={kyoImg} alt="kyo" /><NavLink className={classesNavLink.join(" ")} onClick={this.handleNavLinkClick} to="kontakt">Kontakt</NavLink></li>
            </ul>
          </nav>
          <div className='arrowMenu'><i onClick={this.handleArrowMenuClick} className="fas fa-arrow-circle-up"></i></div>
        </div>
        <div onClick={this.handleClickActiveNav} style={this.state.navActive ? { transform: 'rotate(90deg)' } : { transform: 'rotate(0deg)' }} className='burgerWhite'>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div onClick={this.handleClickArrowUp} style={this.state.opacityArrow ? { opacity: '1' } : { opacity: '0' }} className='arrowUp' ><i className="fas fa-arrow-circle-up"></i></div>
      </>
    )
  }
}

export default Navigations