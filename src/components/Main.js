import React from 'react'
import '../styles/Main.css'

class Main extends React.Component {
  state = {
    opacity: false,
    slide: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        opacity: true
      })
    }, 50)

    setTimeout(() => {
      this.setState({
        slide: true
      })
    }, 150)
  }

  render() {
    return (
      <main className='home'>
        <div style={this.state.opacity ? { opacity: '1' } : { opacity: '0' }} className="homeWrap">
          <div style={this.state.slide ? { right: '0', opacity: '1', color: 'white' } : { right: '-150%', opacity: '0', color: 'black' }} className='firstDiv'>
            <h2>Strona Główna</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
          <div style={this.state.slide ? { left: '0', opacity: '1', color: 'white' } : { left: '-150%', opacity: '0', color: 'black' }} className='secondDiv'>
            <h2>Główna Sekcja</h2>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
            <h3>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h3>
          </div>
        </div>
      </main>
    )
  }
}

export default Main