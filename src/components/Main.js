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
            <h3>Oficjalna strona Radomskiego Klubu Kyokushin Karate</h3>
            <p>Klub posiada licencję Polskiego Związku Karate.
            Prowadzimy treningi dla dzieci, młodzieży oraz dorosłych. Nad prawidłowym rozwojem i bezpieczeństwem ćwiczących czuwają doświadczeni instruktorzy, w tym Sensei Jan Gruba IV DAN - wielokrotny Mistrz Polski oraz Mistrz Europy. Zachęcamy do obejrzenia
            naszej strony i serdecznie zapraszamy na treningi!</p>
          </div>
          <div style={this.state.slide ? { left: '0', opacity: '1', color: 'white' } : { left: '-150%', opacity: '0', color: 'black' }} className='secondDiv'>
            <h2>W sezonie 2018/19 zapisy i treningi rozpoczynamy w ŚR, 5.IX.2018 </h2>
            <h3>1. gr. Dzieci - PN, ŚR, PT - 18.30,</h3>
            <h3>2. gr. Młodzież, Dorośli PN, ŚR, PT- 19.45</h3>
          </div>
        </div>
      </main>
    )
  }
}

export default Main