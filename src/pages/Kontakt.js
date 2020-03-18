import React from 'react'
import '../styles/Kontakt.css'

class Kontakt extends React.Component {
  state = {
    opacity: false,
    opacity1: false,
    opacity2: false,
    opacity3: false,
    opacity4: false,
    opacity5: false,
    move: false,
    move1: false,
    move2: false,
    move3: false,
    margin: false,

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        opacity: true
      })
    }, 50)

    setTimeout(() => {
      this.setState({
        opacity1: true,
        opacity2: true,
        opacity3: true,
        opacity4: true,
        opacity5: true,
      })
    }, 150)

    setTimeout(() => {
      this.setState({
        move: true
      })
    }, 250)

    setTimeout(() => {
      this.setState({
        move1: true
      })
    }, 250)

    setTimeout(() => {
      this.setState({
        move2: true
      })
    }, 250)

    setTimeout(() => {
      this.setState({
        move3: true
      })
    }, 250)
  }

  render() {
    const classes = ['slide']
    if (this.state.opacity2) classes.push('opacity')
    if (this.state.move) classes.push('move')


    const classes1 = ['slide']
    if (this.state.opacity3) classes1.push('opacity')
    if (this.state.move1) classes1.push('move1')


    const classes2 = ['slide']
    if (this.state.opacity3) classes2.push('opacity')
    if (this.state.move2) classes2.push('move2')


    const classes3 = ['slide']
    if (this.state.opacity3) classes3.push('opacity')
    if (this.state.move3) classes3.push('move3')



    return (
      <main className='contact'>
        <h2>Kontakt</h2>
        <div style={this.state.opacity ? { opacity: '1' } : { opacity: '0' }} className="contactWrap">
          <h3 style={this.state.opacity1 ? { opacity: '1' } : { opacity: '0' }} className='slide'>Akademia Kyokushin Karate</h3>
          <div className={classes.join(' ')}>
            <h4>Dojo Operator</h4>
            <h3>John Doe</h3>
            <h4>Instruktor Kyokushin</h4>
            <h4>Karate 2 DAN</h4>
          </div>
          <div className={classes1.join(' ')}>
            <h3>Kontakt</h3>
            <h4>Tel. 000 000 000</h4>
            <h4>e-mail: johnDoe@johnDoe.com</h4>
          </div>
          <div className={classes2.join(' ')}>
            <h3>Lorem Ipsum nr 17</h3>
            <h4> ul. loremIpsum 15</h4>
            <ul style={{ listStyle: 'none' }}>
              <li>Poniedziałek 15-18</li>
              <li>Środa 15-18</li>
              <li>Piątek 15-18</li>
            </ul>
          </div>
          <div className={classes3.join(' ')}>
            <h3>Lorem Ipsum nr 25</h3>
            <h4> ul. LoremIpsum 5</h4>
            <ul style={{ listStyle: 'none' }}>
              <li>Wtorek 15:30 - 18:30</li>
              <li>Czwartek 15:30 - 19:30</li>
            </ul>
          </div>
        </div>
      </main>
    )
  }
}

export default Kontakt