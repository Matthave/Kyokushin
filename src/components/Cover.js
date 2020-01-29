import React from 'react'
import '../styles/Cover.css'
import kyo from '../IMG/kyo.png'

class Cover extends React.Component {
  state = {
    positionKyo: false,
    opacityImg: true,
    displayImg: false,
    catDiv: false,
    cover: false,
    cover1: false,
    mouseDown: false,
  }

  componentDidMount() {
    document.querySelector('.kyolog').addEventListener('mouseup', this.handleMouseDown)

    setTimeout(() => {
      this.setState({
        positionKyo: true
      })
    }, 50);
  }

  handleMouseDown = () => {
    console.log('ok')
    this.setState({
      mouseDown: true
    })
  }

  handleClickImg = () => {
    this.setState({
      opacityImg: false
    })

    setTimeout(() => {
      this.setState({
        displayImg: true,
      })
    }, 500)

    setTimeout(() => {
      this.cut()
    }, 500)
  }

  cut = () => {
    this.setState({
      cutDiv: true,
    })

    setTimeout(() => {
      this.setState({
        cover: true,
        cover1: true
      })
    }, 250)

  }

  render() {
    const classesImg = ['kyolog']
    if (this.state.positionKyo) classesImg.push('active')
    if (this.state.mouseDown) classesImg.push('pressed')
    if (this.state.opacityImg === false) classesImg.push('nonOpacity')
    if (this.state.displayImg) classesImg.push('display')

    const classesCut = ['one']
    if (this.state.cutDiv) classesCut.push('active')

    const classesCut1 = ['two']
    if (this.state.cutDiv) classesCut1.push('active')

    const classesCover = ['cover']
    if (this.state.cover) classesCover.push('out')

    const classesCover1 = ['cover1']
    if (this.state.cover) classesCover1.push('out')

    return (
      <div className='coverWrap'>
        <img
          onClick={this.handleClickImg}
          className={classesImg.join(" ")}
          src={kyo} alt="kyoLogo"
        />
        <div className={classesCover.join(" ")}></div>

        <div className={classesCover1.join(" ")}>
          <div className={classesCut.join(" ")}></div>
          <div className={classesCut1.join(" ")}></div>
        </div>

      </div>
    )
  }
}

export default Cover