import React from 'react'
import '../styles/Galeria.css'

class Galeria extends React.Component {
  state = {
    container: false
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        container: true
      })
    }, 250)
  }

  render() {
    return (
      <main className='galeria'>
        <h2>Galeria</h2>
        <div style={this.state.container ? { left: '0' } : { left: '-100%' }} className="container">

          <div className="top">
            <ul>
              <h3>XXXVII Wschodnioeuropejski Letni Obóz Kyokushin Karate, Kraków 2010</h3>
              <li><a href="#img_1"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/1.jpg" /></a></li>
              <li><a href="#img_2"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/4.jpg" /></a></li>
              <li><a href="#img_3"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/4.jpg" /></a></li>
              <li><a href="#img_4"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/21.jpg" /></a></li>
              <li><a href="#img_5"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/16.jpg" /></a></li>
              <li><a href="#img_6"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/17.jpg" /></a></li>
              <li><a href="#img_7"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/18.jpg" /></a></li>
              <li><a href="#img_8"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/23.jpg" /></a></li>
              <li><a href="#img_9"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/20.jpg" /></a></li>
              <li><a href="#img_10"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/3.jpg" /></a></li>
              <li><a href="#img_11"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/19.jpg" /></a></li>
              <li><a href="#img_12"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/14.jpg" /></a></li>
              <li><a href="#img_13"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/8.jpg" /></a></li>
              <li><a href="#img_14"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/6.jpg" /></a></li>
              <li><a href="#img_15"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/9.jpg" /></a></li>
              <li><a href="#img_16"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/7.jpg" /></a></li>
            </ul>

            <a href="#_1" className="lightbox trans" id="img_1"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/1.jpg" /></a>
            <a href="#_2" className="lightbox trans" id="img_2"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/4.jpg" /></a>
            <a href="#_3" className="lightbox trans" id="img_3"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/4.jpg" /></a>
            <a href="#_4" className="lightbox trans" id="img_4"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/21.jpg" /></a>
            <a href="#_5" className="lightbox trans" id="img_5"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/16.jpg" /></a>
            <a href="#_6" className="lightbox trans" id="img_6"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/17.jpg" /></a>
            <a href="#_7" className="lightbox trans" id="img_7"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/18.jpg" /></a>
            <a href="#_8" className="lightbox trans" id="img_8"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/23.jpg" /></a>
            <a href="#_9" className="lightbox trans" id="img_9"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/20.jpg" /></a>
            <a href="#_10" className="lightbox trans" id="img_10"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/3.jpg" /></a>
            <a href="#_11" className="lightbox trans" id="img_11"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/19.jpg" /></a>
            <a href="#_12" className="lightbox trans" id="img_12"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/14.jpg" /></a>
            <a href="#_13" className="lightbox trans" id="img_13"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/8.jpg" /></a>
            <a href="#_14" className="lightbox trans" id="img_14"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/6.jpg" /></a>
            <a href="#_15" className="lightbox trans" id="img_15"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/9.jpg" /></a>
            <a href="#_16" className="lightbox trans" id="img_16"><img src="http://www.kyokushin.warszawa.pl/img/galeria/oboz_krakow_2010/7.jpg" /></a>
          </div>
        </div>
      </main>
    )
  }
}

export default Galeria