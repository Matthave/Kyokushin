import React from 'react'
import $ from 'jquery'
import TreningiComponent from '../pages/TreningiComponent'
import '../styles/Treningi.css'
import img6 from '../IMG/TreningiZdj6.jpg'

// style={this.state.slide ? { left: '0', color: 'white' } : { left: '-150%', color: 'black' }}

const trainingTexts = [
  { id: 0, title: 'STANOWCZOŚĆ I OPANOWANIE', description: 'Najpierw młody karateka staje twarzą w twarz z przeciwnikiem. Nowi uczniowie ustawiają się w parach i jeden ćwiczy opanowanie, podczas gdy drugi trenuje tradycyjny okrzyk bojowy i z bezpiecznego dystansu markuje uderzenie w kierunku twarzy partnera. iększość początkujących jest wtedy spięta. Wzdragają się przy każdym okrzyku. W miarę jak mijają tygodnie, uczą się stać spokojnie w obliczu takiego "zagrożenia". Jest to znane jako zachowanie spokoju podczas burzy. Sztuki walki są praktycznym kursem w treningu stanowczości.' },
  { id: 1, title: 'OSIĄGANIE CELÓW', description: 'Rodzice odkryją, że karate przyczynia się do rozwoju umiejętności zdobywania celów. Dobre dojo (klub) jest środowiskiem pozytywnych wzorców zachowań. Uczniowie pracują, by poprawić swoje umiejętności jak najlepiej potrafią. Znajdziesz tam dzieci w wieku sześciu, siedmiu lat, które zapamiętały setki ruchów. Albo matkę, która, przełamując stereotyp, trenuje razem z córką, lub też ważnego prawnika, który zrzuca swój trzyczęściowy garnitur i wkłada kimono, aby zgubić kilka kilogramów. Jest też fizycznie upośledzony karateka, który poprzez trening sztuk walki pokonuje całe lub część swojego inwalidztwa. Sale sztuk walki są miejscami, gdzie zwyczajni ludzie stają się nadzwyczajni poprzez nadzwyczajną determinację. Dzieci obcujące z tego typu uporem w dążeniu do celu mają większą szansę ukształtowania tej cechy swojej osobowości.' },
  { id: 2, title: 'POTRZEBA PRZYNALEŻNOŚCI', description: 'Wyraźną przewagą karate nad grami zespołowymi jest to, że każde dziecko może brać czynny udział w zajęciach, w przeciwieństwie do gier zespołowych, gdzie młodzieniec nie może się przebić lub kończy na ławce rezerwowych. Karate pozwala każdemu występować na najwyższym poziomie. Jest to sport wyraźnie indywidualny. A jednak może spełniać dziecięcą potrzebę przynależności do grupy. U uczniów rozwija się specjalne przywiązanie, które jest wzmocnione poprzez mistykę, która otacza karate. To sprzyja poczuciu bycia wyjątkowym i stanowienia części czegoś niezwykłego. Do poczucia, że należą do grupy praktykującej sztukę walki, dochodzi zabezpieczenie przeciwko wdaniu się dziecka w czynności negatywne.' },
  { id: 3, title: 'KONCENTRACJA I NAUKA', description: 'Treningi karate mogą pomóc dzieciom uczyć się. "Oceny mojego syna uległy wspaniałej poprawie - mówi jedna z mate - myślę, że karate było czynnikiem pomagającym mu skoncentrować się w szkole". Koncentracja jest niewątpliwie produktem ubocznym karate. "Tradycyjne kata jest lekcją samokontroli - powiada instruktor - kontrola fizyczna i psychiczna jest trudna ze względu na intensywność wymaganego skupienia. Utrzymywanie niskiej pozycji, pamiętanie każdego skomplikowanego ruchu i wykonywanie go z siłą wymaga wysiłku".' },
  { id: 4, title: 'STAWANIE SIĘ DOROSŁYM', description: '"Karate oferuje jasne oceny rozwoju, których brakuje w innych nowoczesnych zajęciach - zauważa dr Ann Iryine z Instytutu Psychologii Nort Columbia - myślę, że rozpoczęcie treningu jest ważną częścią stawania się dorosłym. Karate ma oczywiste poziomy zaawansowania". Odmiennie niż Mała Liga Baseballu czy liga piłki nożnej ten sukces może być osiągnięty na drodze indywidualnej pracy. Każde dziecko widzi rezultat swojego wysiłku. Nie jest on podkreślany ani osłabiany grupowym wysiłkiem. Wyższe stopnie są przyznawane w drodze zdawania formalnego testu przeprowadzanego w określonych odstępach czasu.' },
  { id: 5, title: 'MEDYTACJA W RUCHU', description: 'Po dwóch lub trzech latach treningu dzieci mogą już wchodzić w stan medytacji podczas wykonywania kata. Chociaż uczą się ruchów tych form świadomie, w wyższych stadiach treningu kata są wykonywane podświadomie. To stwierdzenie odpowiada temu, co naukowcy uważają za przełączenie funkcji lewej na prawą półkulę mózgową. Mówi się, że lewa półkula mózgu jest odpowiedzialna za logiczną, świadomość "biurokratyczną stronę", podczas gdy prawa jest uważana za bardziej twórczą i płynną. To może tłumaczyć tradycyjne powiązanie pomiędzy medytacją zen i sztukami walki. Karate na wyższym poziomie można więc porównać z medytacją w ruchu.' },
  { id: 6, title: 'KORZYŚCI FIZYCZNE', description: 'Karate jest podobne do baletu ze względu na podobne wymagania względem koordynacji ruchowej. Zarówno górna jak i dolna część ciała musi wykonywać zawiłe, skoordynowane ruchy. "Zacząłem uczyć moje dziecko sztuk walki, gdy miało niecałe cztery lata -mówi psychiatra dr Jilbert Lewis - Rozwój neurologiczny w tym wieku jeszcze występuje i czuję, że lekcje karate, gimnastyki lub tańca są pomocne. " Brak koordynacji ruchowej u dzieci może znaleźć najlepsze lekarstwo dla rozwinięcia równowagi i płynności ruchów właśnie w sztukach walki. Pojemność płuc jest również powiększana poprzez trening sztuk walki. Tętno w treningu kata w karate są porównywalne do występującego przy bieganiu. Maksymalne wartości tętna mogą być osiągnięte podczas walk treningowych.' },
  { id: 7, title: 'NAPASTNICY', description: 'Osobnik znęcający się nad słabszymi z reguły ma niską samoocenę i potrzeba czucia się silnym powoduje, że szuka ona słabszych od siebie. Wyczuwa odznaki słabości jak niechęć do spojrzenia w oczy, zgarbiona postawa , przy zaczepce szybki oddech, łamiący się głos i niepewność w odpowiedziach. Przeciwnie do tego, co rodzice mogliby sądzić, trening sztuk walki nie przygotowuje dzieci na otwartą rozgrywkę z "zaczepiaczem" raczej powoduje wygaszenie sygnałów prowokujących agresję. Sztuki walki uczą patrzeć przeciwnikowi w oczy. Sparing uczy kontroli oddechu. Praca nad pozycjami jest integralną częścią rozwijania równowagi, siły i szybkich przemieszczeń.' }
]


class Treningi extends React.Component {
  state = {
    slide: false
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll)

    setTimeout(() => {
      this.setState({
        slide: true
      })
    }, 150)
  }

  handleScroll = () => {
    const scrollHeight = window.scrollY
    const windowHeight = window.innerHeight
  }

  render() {
    const txt = trainingTexts.map((txt) => (
      <TreningiComponent id={txt.id} key={txt.id} title={txt.title} description={txt.description} />
    ))

    return (
      <main className='trainings'>
        <div className="trainingsWrap">

          <div style={this.state.slide ? { left: '0' } : { left: '-150%' }} className='firstDivTraining'>
            <h2>Trening karate kyokushin opiera się głównie na 3 elementach</h2>
            <h3>KIHON - techniki podstawowe</h3>
            <p>Kihon ma na celu nauczenie adepta sztuki karate prawidłowej techniki uderzeń, kopnięć oraz bloków. W trakcie kihon ćwiczący stoją w rzędach w kolejności posiadanych stopni.
          Techniki wykonuje się po podaniu komendy przez prowadzącego ćwiczenia.</p>
          </div>

          <div style={this.state.slide ? { right: '0' } : { right: '-150%' }} className='secondDivTraining'>
            <h3>KATA - formalne układy obrony i ataku</h3>
            <p>Kata są tradycyjnym sposobem przekazywania wiedzy o karate. W średniowiecznej Okinawie, skąd wywodzi się karate, wprowadzono przepis zabraniający chłopom posiadania wszelkiej broni – nawet noży i siekier, zabroniono także uprawiania sztuk walki. Aby obronić się, Okinawczycy wymyślali więc różne układy walki, czyli kata, które umożliwiały ćwiczenie w samotności (w obawie przed donosicielami).
          Kata wykonuje się podobnie jak kihon – w rzędach, wg posiadanych stopni, po komendzie prowadzącego ćwiczenia.</p>
          </div>

          <div style={this.state.slide ? { left: '0' } : { left: '-150%' }} className='thirdDivTraining'>
            <h3>KUMITE - wolna walka</h3>
            <p>Kumite jest kwintesencją kyokushin karate. Masutatsu Oyama twierdził, że karate bez walki, jest tylko tańcem. W trosce o zdrowie ćwiczących, w trakcie walk sportowych wyłączono możliwość ataku na kolana,
           kręgosłup czy głowę (na głowę można stosować większość technik nożnych).</p>
          </div>

          <div>
            <h2>Oto powody dla, kórych dzieci powinny trenować karate:</h2>
            {txt}
          </div>
          <img className='img6' src={img6} alt="" />
        </div>
      </main>
    )
  }
}

export default Treningi