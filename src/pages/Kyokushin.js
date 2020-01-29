import React from 'react'
import $ from 'jquery'
import kyoGif from '../IMG/kyoTxt.gif'
import symbol1 from '../IMG/symbol1.jpg'
import kyoLogo from '../IMG/kyo.png'
import symbol2 from '../IMG/symbol2.jpg'
import sosai from '../IMG/sosai.jpg'
import dojo from '../IMG/dojo.jpg'
import '../styles/Kyokushin.css'

class Kyokushin extends React.Component {
  state = {
    opacity: 0,
    slide: false,
    value: ''
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

  componentDidUpdate() {
    if (this.state.value === 'history') {
      $('html').animate({
        scrollTop: $('div.history').offset().top
      }, 1000)

      this.setState({
        value: ''
      })
    }

    if (this.state.value === 'symbols1') {
      $('html').animate({
        scrollTop: $('div.symbols1').offset().top
      }, 1000)

      this.setState({
        value: ''
      })
    }

    if (this.state.value === 'symbols2') {
      $('html').animate({
        scrollTop: $('div.symbols2').offset().top
      }, 1000)

      this.setState({
        value: ''
      })
    }

    if (this.state.value === 'sosai') {
      $('html').animate({
        scrollTop: $('div.sosai').offset().top
      }, 1000)

      this.setState({
        value: ''
      })
    }

    if (this.state.value === 'etiquette') {
      $('html').animate({
        scrollTop: $('div.etiquette').offset().top
      }, 1000)

      this.setState({
        value: ''
      })
    }

    if (this.state.value === 'osu') {
      $('html').animate({
        scrollTop: $('div.osu').offset().top
      }, 1000)

      this.setState({
        value: ''
      })
    }

    if (this.state.value === 'dojo') {
      $('html').animate({
        scrollTop: $('div.dojo').offset().top
      }, 1000)

      this.setState({
        value: ''
      })
    }

    if (this.state.value === 'dictionary') {
      $('html').animate({
        scrollTop: $('div.dictionary').offset().top
      }, 1000)

      this.setState({
        value: ''
      })
    }
  }

  handleClickLi = (e) => {
    this.setState({
      value: e.target.name
    })
  }

  render() {
    return (
      <main className='kyokushin'>
        <div style={this.state.opacity ? { opacity: '1' } : { opacity: '0' }} className="kyokushinWrap">
          <div style={this.state.slide ? { right: '0' } : { right: '-150%' }} className='slide'>
            <h2>Kyokushin</h2>
            <ul className='menu'>
              <li><a onClick={this.handleClickLi} name='history' href="#" >Historia karate</a><span></span></li>
              <li><a onClick={this.handleClickLi} name='symbols1' href="#">Symbole Kyokushin</a><span></span></li>
              <li><a onClick={this.handleClickLi} name='sosai' href="#">Sosai Masytatsu Oyama</a><span></span></li>
              <li><a onClick={this.handleClickLi} name='etiquette' href="#">Etykieta</a><span></span></li>
              <li><a onClick={this.handleClickLi} name='osu' href="#">Znaczenie "Osu"</a><span></span></li>
              <li><a onClick={this.handleClickLi} name='dojo' href="#">Przysięga Dojo</a><span></span></li>
              <li><a onClick={this.handleClickLi} name='dictionary' href="#">Słownik Japońska-Polski</a><span></span></li>
            </ul>
          </div>

          <div style={this.state.slide ? { left: '0' } : { left: '-150%' }} className="history slide">
            <h2>Historia karate</h2>
            <img src={kyoGif} alt="" />
            <p>W języku japońskim słowo KARA-TE oznacza KARA - pusta, TE - ręka.
               Rozwinięte przeszło tysiąc lat temu, jako forma walki bez użycia broni, ale z zastosowaniem naturalnych dla człowieka środków walki, jak pięści, kolana, stopy i głowa, karate ma niezwykle ciekawą historię.
               Źródła historyczne wskazują, że kolebką karate są Indie. Metody pokrewne karate znane były w starożytnej Grecji pod postacią pankrationu- brutalnej walki, która niegdyś należała do starożytnych konkurencji olimpijskich. Dyscyplina ta powstała z połączenia boksu i zapasów, a jedynymi zasadami tam był zakaz gryzienia przeciwnika oraz atakowania jego oczu. Poza tym wszystko było dozwolone, a zawodnik, który nie miał sił już walczyć, bądź ocenił swoje szanse na marne mógł zakończyć w każdym momencie walkę poprzez podniesienie ręki.
             Droga, jaką przebyło karate nim dotarło do Japonii jest długa i liczy wiele wieków. W 520 roku n.e. hinduski mnich Bodhidarma przybył pieszo z Indii do Chin, by nauczać tam Buddyzmu Zen. Studiując techniki ataku zwierząt i owadów oraz siły natury, Bodhidarma złączył je ze specjalnymi technikami oddychania i stworzył w ten sposób podstawy pod legendarny system walki bez broni, w oparciu o koncentrację psychiczną. Zbudował także świątynię Shaolin w prowincji Honan, gdzie udzielał swym mnichom nauk. Pomostem , którym karate przedostała się z Chin do Japonii, była wyspa Okinawa. Drugą ważną datą w historii karate jest rok 1609, kiedy to japoński ród Satsuma, po porażce z rodem Tokugawa, skierował się na wyspy archipelagu Ryukyu, w skład którego wchodzi również wspomniana Okinawa. Okupacja wyspy trwała przez 250 lat. Zakaz posiadania jakiejkolwiek broni sprowokował tubylców do studiów nad walkami wręcz. W zupełnej tajemnicy, najczęściej nocą mieszkańcy Okinawy - korzystając z doświadczeń różnych stylów chińskich - ćwiczyli Okinawa-te. Jednym z mistrzów okinawskich był Gichin Funakoshi, który zademonstrował swą sztukę walki w Kioto w 1915 roku. Funakoshi - zwany ojcem karate - pozostał w Japonii na stałe, wywierając ogromny wpływ na japońskie Budo. Wprowadził on do powszechnego użycia wspomniany na początku termin karate, sama zaś sztuka weszła w skład japońskiego systemu walki - Budo.</p>
          </div>

          <div className="symbols1">
            <h2>Symbole Kyokushin</h2>
            <img src={symbol1} alt="" />
            <ul>
              <li><span> Kyoku</span> ekstremum, ostateczność, przeciwstawny biegun</li>
              <li><span>Shin</span> prawda, realność, rzeczywistość</li>
              <li><span>Kai</span> modyfikacja, zmiana, stowarzyszenie, organizacja</li>
              <li><span>Kan</span> budynek, szkoła</li>
            </ul>
          </div>

          <div className="symbols2">
            <div>
              <img className='imgSymbol2' src={symbol2} alt="" />
              <p>W tłumaczeniu człon Kyokushin oznacza "ekstremum prawdy", natomiast całość możemy tłumaczyć, jako: "Stowarzyszenie Poszukiwaczy Najwyższej Prawdy"., Termin Kyokushin określa również szkołę karate (organizację) jako przeciwstawną dotychczasowym stylom karate,prawdziwą, realną i zmodyfikowaną., Oyama doszedł do wniosku, że należy opracować nowy system walki, oparty na najefektywniejszych technikach i najlepszych doświadczeniach mistrzów tej walki. Charakterystyczne w Kyokushin jest to, że prowadzona walka jest twarda i siłowa. W czasie treningów duży nacisk kładzie się na dobre ogólne przygotowanie fizyczne, zwłaszcza na rozwój siły i wytrzymałości, a także na wyrobienie dużej odporności na ciosy. Podczas ćwiczeń z partnerem stwarza się sytuacje jak najbardziej zbliżone do realnej walk. Masutatsu Oyama zakazał w czasie pojedynków karate wyprowadzania ciosów na głowę. Wiedział bowiem jak straszne spustoszenie czynią takie uderzenia w czaszce człowieka. Mawiał: "Głowa to rzecz święta".</p>
            </div>
            <div>
              <img className='kyoLogo' src={kyoLogo} alt="" />
              <p>Kanku, które jest symbolem odwagi i słońca, zaczerpnięte zostało z Kanku Kata. W tym kata ręce są podniesione i palce są złączone tak, żeby uformować otwierające się gardło, przez które można oglądać niebo. Dolne punkty Kanku reprezentują złączone na dole kciuki, a górne złączone u góry małe palce symbolizujące najwyższe punkty i szczyty. Cienkie fragmenty po bokach reprezentują nadgarstki oznaczające siłę. Środkowy krąg reprezentuje otwarcie pomiędzy rękami, przez które można oglądać niebo symbolizujące niekończącą się głębię. Całe Kanku jest zamknięte w okręgu symbolizującym ciągłość i okrężny ruch.</p>
            </div>
          </div>

          <div className="sosai">
            <h2>Masutatsu Oyama</h2>
            <img src={sosai} alt="" />
            <p>Masutatsu Oyama urodził się 27 lipca 1923 roku w Ryongri, w południowej Korei. Jego rodzina należała do klanu Yangban. Mając 9 lat zaczął uczyć się sztuki walki zwanej "Eighteen Hands" czyli południowo-chińskiego Kempo u pana Yi.
  W 1938 Mas Oyama pojechał do Japonii. Tam zapisał się do japońskiej akademii powietrznej z zamiarem zostania pilotem, jednakże próba ta nie powiodła się. Jego zainteresowanie sztukami walki pozwoliło mu na rozpoczęcie nauki Shotokan Karate w dojo Gishin Funakoshi na uniwersytecie Takushoku. Mimo wcielenia do wojska Mas Oyama nadal intensywnie ćwiczył. Mając 18 lat zdobył nidan (2 dan) w karate shotokan, a w wieku 20 lat zdobył już 4Dan.
  Po frustracji, która ogarnęła wszystkich młodych japończyków po II wojnie światowej, zaczął trenować z So Nei Chu, koreańskim mistrzem Goju-Ryu Karate - sztuki walki założonej w 1930 roku w Japonii przez Chojun Miyagi. So Nei Chu okazał się wspaniałym nauczycielem, który odnowił siłę ciała Oyamy i w znacznym stopniu rozbudował jego ducha przez pokazanie tajników Buddyzmu.
  Oyama lubił chodzić po treningach na zabawy taneczne. Pewnego razu zauważył jakiegoś chuligana zaczepiającego pewną kobietę. Podszedł więc do niego, a ten pewien swej "wyższości" zaczął wymachiwać nożem przed twarzą Oyamy i w końcu go zaatakował. Mas Oyama zblokował cios i z całą siła uderzył napastnika w głowę natychmiast go zabijając. Oyama został oskarżony o zabójstwo, ale sąd uniewinnił go mówiąc, że to była obrona własna. Tak czy inaczej wpłynęło to niekorzystnie na reputację Oyamy. Ponadto wywołało to w nim taki szok, że zaprzestał treningów, a myśl, że zabity mężczyzna miał żonę i dzieci spowodowała, że zdecydował się pracować na farmie przez kilka miesięcy pomagając utrzymać się wdowie.
  Ten straszliwy wypadek wyzwolił w Oyamie chęć ćwiczenia również ducha, a nie tylko ciała. Sensei So poradził Mas Oyamie, żeby poświęcił życie sztukom walk i wyjechał w góry.
  W 1946 Mas Oyama zdecydował się na wyjazd w góry Kiyosumi w Chuba Prefecture, gdzie przez 18 miesięcy testował swoje możliwości przeciwko tworom natury, używając między innymi drzew i skał do ćwiczenia makiwary, utwardzając tym samym swoje ręce, nogi i stopy. Zażywał również kąpieli w mroźnych wodospadach. Treningi rozpoczynał o 5 rano. Dla rozgrzewki biegał kilkanaście kilometrów oraz podnosił kamienie znalezione po drodze, aby zwiększyć swoją siłę. Codziennie ćwiczył kata robiąc około 100 powtórzeń. Nie zapominał również o setkach powtórzeń technik podstawowych. Często przekraczał wszelkie granice wytrzymałości człowieka. Na koniec dnia czytał książki na tematy filozoficzne, aby rozwinąć duszę. Dzięki rygorystycznym treningom i życiu w samotności Oyama nauczył się przezwyciężać mentalny strach.
  W 1950 Mas Oyama rozpoczął znane na całym świecie zmagania z bykami. Częściowo, aby przetestować swoją siłę, ale również aby świat zauważył siłę jego karate. Oyama walczył z 52 bykami zabijając natychmiast 3, a pozostałym łamał rogi cięciami ręką.
  Po powrocie z gór Oyama postanowił wystąpić w All Japan Karate Tournament zwyciężając wszystkich sławnych karateków. Jednakże to mu nie wystarczyło, czuł jakiś brak, jakąś pustkę w jego karate. Po raz kolejny wyjechał w góry. Tym razem na okres jednego roku ćwicząc 14 godzin dziennie. Żaden inny człowiek nie powtórzył jego wyczynu. Po powrocie był gotów przekazywać całą swoją wiedzę, którą zdobył w górach.
  Mas Oyama otworzył swoje pierwsze dojo w 1953 roku w Mejiro, Tokyo. To był czas kiedy siła karate Mas Oyamy przeżywała swoją świetność. Wielu jego uczniów wywodziło się z różnych szkół karate. Koncepcja Mas Oyamy polegała na tym, żeby ze wszystkich znanych mu styli, wyciągnąć wszystkie najlepsze techniki i stopniowo wdrażać je w treningi. W ten sposób tworzył fundamenty Kyokushin Karate. W 1952 Mas Oyama dał pokaz karate na Hawajach. Shihan Bobby Lowe spotkał się po tym wydarzeniu z Mas Oyamą i zorganizował wspólne treningi. Ojciec Bobby Lowe'a był znanym instruktorem Kung Fu, więc Bobby znał tajniki chińskich sztuk walk. Posiadał wówczas 4 Dan w Judo, 2 Dan w Kempo oraz shodan w Aikido, ale pokaz Mas Oyamy go zaszokował. Wspólnie pojechali do Tokyo i trenowali przez 1,5 roku. W ten sposób Shihan Bobby Lowe został pierwszym "uchi-deshi" (wewnętrzny uczeń), a później znany był jako "Wakajishi" albo Młody Lew Mas Oyamy. W 1957 roku założył on pierwsze dojo poza granicami Japonii.
  Budowa światowego centrum rozpoczęła się w 1963 roku i oficjalnie została otworzona w 1964. Mas Oyama dla swojej szkoły przyjął nazwę Kyokushin co w tłumaczeniu oznacza ekstremum prawdy. Kyokushin karate rozwijało się dynamicznie i obecnie jest jedną z większych organizacji sztuk walk na całym świecie.
  Masutatsu Oyama zmarł 26 kwietnia 1994 w szpitalu w Tokyo. To był szok dla wszystkich uczniów na całym świecie. Pomimo, że nie prowadzi już treningów, to i tak żyje w każdym sercu karateki jako niezastąpiony nauczyciel, a szkoła karate Kyokushin rozwija się w dalszym stopniu.
</p>
            <h2>Motta Masutatsu Oyamy:</h2>
            <ul>
              <li>Droga karate zaczyna się i kończy na uprzejmości. Bądź zatem należycie i szczerze uprzejmy przez cały czas.</li>
              <li>Podążanie drogą Budo jest jak wspinanie się na urwisko - ciągle w górę bez odpoczynku. Wymaga to absolutnego i nie schlebiającego sobie poświęcenia dla tego zadania.</li>
              <li>Staraj się przejmować inicjatywę we wszystkich sprawach, przez cały czas chronić się przed akcjami rodzącymi się z egoistycznych uraz lub bezmyślności.</li>
              <li>Nawet dla człowieka uprawiającego sztuki walki, pozycja pieniędzy nie może być ignorowana. Jednak powinno się wystrzegać przed przywiązaniem do nich.</li>
              <li>Droga Budo skupia się na postawie. Staraj się utrzymać właściwą postawę przez cały czas.</li>
              <li>Droga Budo zaczyna się po 1000 dniach i staje się opanowana po 10000 dniach treningu.</li>
              <li>W drodze Budo samoobserwacja daje mądrość. Zawsze przypatruj się swoim akcjom jako możliwości doskonalenia się.</li>
              <li>Istota i cel Budo są uniwersalne. Wszystkie egoistyczne żądze powinny być spalone w łagodzących płomieniach ciężkiego treningu.</li>
              <li>Droga Budo zaczyna się w punkcie a kończy na okręgu. Proste linie rodzą się z tej podstawy.</li>
              <li>Prawdziwą istotę drogi Budo można uświadomić sobie jedynie poprzez doświadczenie. Wiedząc to naucz się nigdy nie bać się jej wymagań.</li>
              <li>Zawsze pamiętaj: W sztukach walki nagrody za pewne i wdzięczne serce są naprawdę obfite.</li>
            </ul>
          </div>

          <div className="etiquette">
            <h2>Etykieta</h2>
            <p>Etykieta Dojo jest zbiorem zasad opisujących specyficzny ceremoniał towarzyszący treningom karate oraz regulujących zachowanie się każdego karateki. Bardzo ważnym jej elementem jest dyscyplina oraz szeroko rozumiany szacunek. Ponieważ w drodze Budo wszystkim powinny przyświecać te same ideały, przedstawione poniżej zasady obowiązują zarówno posiadaczy czarnych pasów jak i początkujących adeptów sztuki karate.</p>
            <h2>Ceremonia:</h2>

            <ul>
              <li>1. Na sygnał „szeregi” wszyscy ćwiczący ustawiają się według stopni frontem do prowadzącego trening. Najstarszy stopniem staje jako pierwszy, pozostali ustawiają się za nim według stopni zaawansowania tj. w pierwszym szeregu siedzą ćwiczący z najwyższymi stopniami, w ostatnim Ci bez stopni.</li>
              <li>2. Na komendę „Seiza” wszyscy siadają w Zazen.</li>
              <li>3. Na komendę "Mokuso" (medytacja) wszyscy zamykają oczy i następuje medytacja Zen.
              Jest to stan, który rozpoczyna się odprężeniem umysłu i ciała przed treningiem. Skoncentruj się na oddechu, spróbuj rozluźnić możliwie wszystkie mięśnie, oderwij się od kłopotów dnia codziennego. Skoncentruj się oczekującej Cię pracy, by efekty były możliwie największe, by czas przeznaczony na zajęcia nie był czasem straconym. </li>
              <li>4. Na komendę "Mokuso yame" (koniec medytacji) otwieramy oczy.</li>
              <li>5. Następnie Prowadzący podaje polecenia: Sensei-ni-rei (ukłon dla mistrza, nauczyciela, który posiada stopień do 4 Dan), senpai ni rei (ukłon w stronę starszych stopniem), Otagai ni rei (ukłon wzajemny).
              Po każdej komendzie wszyscy kłaniają się z głośnym "OSU".</li>
            </ul>
            <h3>Pamiętaj również</h3>
            <ul>
              <li>Kiedy wchodzisz do Dojo lub je opuszczasz, stań w wejściu, przodem do sali, wykonaj ukłon i powiedz "OSU". Takie zachowanie jest dowodem szacunku dla Dojo i osób znajdujących się w nim.</li>
              <li>Nie spóźniaj się na zajęcia. Jeżeli jednak dojdzie do tego to siądź w Zazen w wyznaczonym do tego miejscu i czekaj na znak prowadzącego, po którym będziesz mógł włączyć się do zajęć.</li>
              <li>Do nauczyciela nigdy nie zwracamy się po imieniu a jedynie „Sensei”.</li>
              <li>Do starszego rangą zwracamy się „senpai”.</li>
              <li>Na uwagi prowadzącego odpowiadaj ukłonem z głośnym "OSU". Pozwoli mu to na zorientowanie się, że je zrozumiałeś i jesteś gotowy zastosować się do jego poleceń.</li>
              <li>Wychodząc z sali ćwiczeń należy ustąpić miejsca starszemu stopniem, ta zasada obowiązuje w każdej sytuacji bez względu na miejsce.</li>
              <li>Karategi muszą być zawsze czyste i całe. Pas wolno nosić tylko zgodnie z danym stopniem.</li>
              <li>Przebywając w Dojo, nie jedz, nie pij ani nie żuj gumy.</li>
              <li>Nigdy nie proś wyższego stopniem do ćwiczenia lub kumite. Jednak nie powinieneś odmówić tego, jeśli o to poprosi cię ktoś starszy stopniem.</li>
            </ul>
          </div>

          <div className="osu">
            <h2>Znaczenie "Osu"   </h2>
            <p>OSU, Oznacza cierpliwość, szacunek, uznanie wartości. Aby wypracować silne ciało i silnego ducha należy przejść rygorystyczny trening. Wymaga to wielkiego poświęcenia i trudu, ponieważ dochodzisz do granic wytrzymałości i chcesz przestać, poddać się. Gdy dotrzesz do tego punktu, musisz przełamać siebie, swoją słabość i wygrać. Aby to zrobić musisz nauczyć się wytrwałości, ale ponad wszystko musisz nauczyć się być cierpliwym. To jest właśnie OSU. Powodem dla którego poddajesz się ciężkiemu treningowi jest fakt, ze troszczysz się o siebie, a troszczyć się o siebie znaczy szanować siebie. Ten autoszacunek staje się szacunkiem dla Twojego Instruktora i kolegów. Kiedy wchodzisz do Dojo wykonujesz ukłon i mówisz Osu - co oznacza, że szanujesz Dojo i czas, który spędzasz ćwicząc tam. To uczucie szacunku - to właśnie OSU. Podczas ćwiczenia dajesz z siebie wszystko. Kiedy kończysz trening kłaniasz się instruktorowi i kolegom mówiąc Osu. Następnie, gdy opuszczasz Dojo - zatrzymujesz się w drzwiach, kłaniasz się i jeszcze raz mówisz Osu! Robiąc to uznajesz wartość. Tym uczuciem ocenienia jest właśnie OSU. To dlatego zawsze używamy słowa "OSU" aby przypominać sobie o tych nieodzownych wartościach.</p>
          </div>

          <div className="dojo">
            <h2>DOJO</h2>
            <img src={dojo} alt="" />
            <ul>
              <li>Będziemy ćwiczyć nasze serca i ciała dla osiągnięcia pewnego, niewzruszonego ducha.</li>
              <li>Będziemy dążyć do prawdziwego opanowania sztuki karate, aby kiedyś nasze ciało i zmysły stały się doskonałe.</li>
              <li>Z głębokim zapałem będziemy starać się kultywować ducha samowyrzeczenia się.</li>
              <li>Będziemy przestrzegać zasad grzeczności poszanowania starszych oraz powstrzymywać się od gwałtowności.</li>
              <li>Będziemy spoglądać w górę ku prawdziwej mądrości i sile porzucając inne pragnienia.</li>
              <li>Będziemy wierni naszym ideałom i nigdy nie zapomnimy o cnocie pokory.</li>
              <li>Przez całe nasze życie, poprzez dyscyplinę karate, dążyć będziemy do poznania prawdziwego znaczenia drogi którą obraliśmy.</li>
              <li>Nie będziemy stosować i rozpowszechniać sztuki karate poza DOJO.</li>
            </ul>
          </div>

          <div className="dictionary">
            <h2>Słownik japońsko-polski</h2>
            <ul>
              <li>A</li>
              <li>Age - wznosić się</li>
              <li>Age uke - blok wznoszący górny</li>
              <li>Ageru - podnieść</li>
              <li>Ago - podbródek</li>
              <li>Agura - siad turecki</li>
              <li>Ahi no oyaubi - duży palec u nogi</li>
              <li>Ahiato - krok</li>
              <li>Aka - czerwony, zawodnik oznaczony tym kolorem walczy z prawej strony planszy</li>
              <li>Akiresuken - ścięgno Achillesa, ścięgno piętowe</li>
              <li>Arigato - dziękuję</li>
              <li>Ashi - stopa, noga</li>
              <li>Ashi barai - technika podcięcia (zagarnięcia stopą)</li>
              <li>Ashikubi - grzbiet stopy</li>
              <li>Ashi waza - techniki nożne</li>
              <li>Atama - głowa</li>
              <li>Atemi - uderzenie we wrażliwe punkty ciała</li>
            </ul>

            <ul>
              <li>B</li>
              <li>Bitei - kość guziczna</li>
              <li>Bo - pałka, laska, kij</li>
              <li>Bo jutsu - sztuka walki kijem</li>
              <li>Budo - sztuki wojenne</li>
            </ul>

            <ul>
              <li>C</li>
              <li>Chikara - siła</li>
              <li>Chikuden - szybkość</li>
              <li>Chi mei - technika efektywna</li>
              <li>Choku zuki - cios prosty</li>
              <li>Cho to - zagłębienie między oczami</li>
              <li> Chu - centrum, środek</li>
              <li> Chudan - poziom środkowy (od pasa do szyi)</li>
              <li> Chukan - środek</li>
              <li> Chui - ostrzeżenie</li>
            </ul>

            <ul>
              <li> D</li>
              <li> Dachi - pozycja</li>
              <li>Dadai - podstawa, spód, baza</li>
              <li> Dai - tytuł</li>
              <li> Dan - poziom, stopień mistrzowski w japońskich sztukach walki</li>
              <li> Dankai - krok</li>
              <li> Dansei - mężczyzna, człowiek</li>
              <li>Do - droga, kierunek myśli, sposób, metoda, system Dojo - sala ćwiczeń</li>
              <li> Dokko - okolica poniżej małżowiny usznej</li>
              <li>Domo arigato - dziękuję bardzo Douzo – proszę</li>
            </ul>

            <ul>
              <li> E</li>
              <li> Embu sen - schemat kata</li>
              <li>Empi - łokieć</li>
              <li> Encho - przedłużenie czasu walki</li>
              <li> En - okrąg</li>
            </ul>

            <ul>
              <li> F</li>
              <li>Fuku koso - splot słoneczny</li>
              <li>Fumikomi - kopnięcie depczące</li>
              <li>Furo - wanna</li>
              <li>Fusensho – walkower</li>
            </ul>

            <ul>
              <li> G</li>
              <li> Gaeshi - kontratak</li>
              <li> Ganmen - skroń</li>
              <li> Gansei - gałka oczna</li>
              <li> Gedan - poziom ciała od pasa w dół</li>
              <li> Geiko - trening, ćwiczenie</li>
              <li> Gekon - punkt poniżej wargi dolnej</li>
              <li> Go - siła</li>
              <li> Go - pięć</li>
              <li> Gyaku - przeciwny</li>
            </ul>

            <ul>
              <li> H</li>
              <li> Ha - ząb</li>
              <li> Hageshii - mocny, silny</li>
              <li> Hai - tak</li>
              <li> Haigusha - partner</li>
              <li> Haishu - grzbiet dłoni</li>
              <li> Haisoku - podbicie stopy</li>
              <li> Haito - wewnętrzna krawędź dłoni</li>
              <li> Hajime - zaczynać, naprzód</li>
              <li> Hana - nos</li>
              <li> Hanmi - półfrontalne ułożenie ciała</li>
              <li> Hara - brzuch</li>
              <li>Harai - odpierać</li>
              <li>Hansoku - dyskwalifikacja</li>
              <li> Hantei - orzeczenie sędziowskie, werdykt</li>
              <li> Heiken - powierzchnia zaciśniętej pięści od wewnątrz</li>
              <li> Heiko - równolegle</li>
              <li> Hidari - lewy</li>
              <li> Hiji – łokieć</li>
              <li>Hitosashiyub - palec wskazujący</li>
              <li> Hittsui - kolano</li>
              <li>Hiza - kolano</li>
              <li>Hizo - żebro</li>
            </ul>

            <ul>
              <li> I</li>
              <li> Ibuki - rodzaj oddychania w karate - wdech nosem, wydech ustami</li>
              <li> Ichi - jeden</li>
              <li> Ido kihon - kihon w ruchu</li>
              <li> Iki - oddech</li>
              <li> Imouto - młodsza siostra</li>
              <li> Ippo - krok</li>
              <li> Ippon - jeden, pojedynczy, punkt w terminologii sportowej</li>
              <li> Ishiry oku - siła woli</li>
              <li> Itami - bolesny</li>
            </ul>


            <ul>
              <li>J</li>
              <li>Jodan - poziom górny ciała, głowa i szyja</li>
              <li>Ju - podudzie</li>
              <li>Juji - krzyż, krzyżowy (w sensie znaku krzyża)</li>
              <li>Jutsu - sztuka bojowa, umiejętność</li>
              <li>Jyogai - wyjście poza wyznaczone pole walki</li>
              <li>Jyu - dziesięć</li>
              <li>Jyugo - piętnaście</li>
              <li>Jyuhachi - osiemnaście</li>
              <li> Jyukyu - dziewiętnaście</li>
              <li> Jyuichi - jedenaście</li>
              <li> Jyuroku - szesnaście</li>
              <li> Jyushichi - siedemnaście</li>
              <li> Jyuni - dwanaście</li>
              <li> Jyusan - trzynaście</li>
              <li>  Jyuyon - czternaście</li>
            </ul>

            <ul>
              <li> K</li>
              <li> Kabuki - japoński teatr</li>
              <li> Kagaku - nauka</li>
              <li> Kagi zuki - krótki cios sierpowy</li>
              <li> Kai - historia, organizacja</li>
              <li> Kaikyu - stopień</li>
              <li> Kaisho - otwarta ręka</li>
              <li> Kakato - pięta</li>
              <li> Kake - zachaczanie, hak</li>
              <li> Kakiwake uke - blok: klin odwrotny</li>
              <li> Kakotsu - kostka</li>
              <li> Kakumaku - przepona</li>
              <li> Kamae - określona postawa, pozycja do walki, odnosi się zwłaszcza do sposobu trzymania rąk</li>
              <li> Kamate - przyjąć postawę, komenda stosowana w czasie treningu</li>
              <li> Kancho - szef, dyrektor</li>
              <li> Kanku - symbol odwagi, słońca</li>
              <li> Kao - twarz</li>
              <li> Kara - pusty</li>
              <li> Karada - ciało</li>
              <li> Karategi - strój do karate</li>
              <li> Kata - ćwiczenia formalne, kształt</li>
              <li> Katana - samurajski miecz</li>
              <li> Katsu - techniki pierwszej pomocy, metody reanimacji</li>
              <li> Kawashi - unik</li>
              <li> Keage - tu: kopnięcie prostą nogą w górę</li>
              <li> Keikogi - bluza ubioru treningowego</li>
              <li> Kekomi - kopnięcie - pchnięcie</li>
              <li> Kenju - pistolet, broń</li>
              <li> Ken jutsu - sztuka walki mieczem</li>
              <li> Kensei - okrzyk, będący wyrażeniem - kiai</li>
              <li> Keri waza - techniki kopnięć</li>
              <li> Kiai - paraliżujący okrzyk, chwila maksymalnej koncentracji fizycznej i psychicznej</li>
              <li>Kiba - jeździec</li>
              <li> Kihon - podstawy, podstawowe techniki karate</li>
              <li> Kin - krocze,</li>
              <li> Kinryoku - siła fizyczna, siła mięśni</li>
              <li> Kiri - ostrze, cięcie (Hara Kiri cięcie brzucha)</li>
              <li> Kobushi - pięść</li>
              <li> Kogeki - atak</li>
              <li>Koken - grzbietowa powierzchnia zgiętego nadgarstka</li>
              <li>Kokoro - duch, "serce"</li>
              <li> Kokotsu - piszczel</li>
              <li> Kokyu - rodzaj oddychania w karate z kontrolowanym wydechem</li>
              <li> Konnichiwa - dzień dobry (używane po południu)</li>
              <li> Koshi - biodro</li>
              <li> Koto - krtań</li>
              <li> Kou - podbicie</li>
              <li> Kouei - honor</li>
              <li> Koyubi - mały palec u rękiKubi - szyja, przegub</li>
              <li> Kumade - bambusowe grabie, łapy niedźwiedzia - jeden ze sposobów ułożenia rąk w karate</li>
              <li> Kyoei - pacha</li>
              <li>  Kyokai - stowarzyszenie, towarzystwo</li>
              <li> Koyubi - mały palec u ręki</li>
              <li> Kyokotsu - kość policzkowa</li>
              <li> Kyoshi - nauczyciel, nazwa powinna być używana tylko przez nauczyciela, który mówi o sobie</li>
              <li> Kyu - dziewięć, stopień szkoleniowy</li>
              <li> Kyudo - sztuka strzelania z łuk</li>
            </ul>


            <ul>
              <li> M</li>
              <li> Ma ai - średni dystans, również (odpowiedni, "właściwy dystans")</li>
              <li> Mae - przód</li>
              <li> Mae ashi geri - kopnięcie nogą wykroczną</li>
              <li> Mae geri - kopnięcie w przód</li>
              <li> Mahanmi - boczne ułożenie ciała</li>
              <li> Maita - poddaj się</li>
              <li> Maitte - poddaję się (tu: przerwać, puścić)</li>
              <li> Makiwara - dosł. "zwinięta słoma" przyrząd do ćwiczenia uderzeń (elastyczna deska z poduszką amortyzującą)</li>
              <li> Manuke – szarpnięcie</li>
              <li> Mawashi - toczyć, kręcić, obracać</li>
              <li> Me - oczy</li>
              <li> Meiyo - honor</li>
              <li> Migi - prawy</li>
              <li> Mimi - ucho</li>
              <li> Mokuso - medytować</li>
              <li> Morote - oburącz, obydwiema rękami</li>
              <li> Momo - udo</li>
              <li> Morote - oburącz, obie ręce</li>
              <li> Muso uchi - techniki naturalnej samoobrony</li>
              <li> Musubi - węzeł, zawęźlić, zacieśnić</li>
            </ul>

            <ul>
              <li> N</li>
              <li> Nage - rzut</li>
              <li> Naibu - wewnątrz</li>
              <li> Natsu geiko - trening letni</li>
              <li> Naze - dlaczego</li>
              <li> Neko - kot</li>
              <li> Ne waza - techniki walki w pozycji leżącej lub półleżącej, sposoby obrony po przewróceniu przez przeciwnika</li>
              <li> Nidan geri - kopnięcie podwójne z wyskoku</li>
              <li> Nihon - Japonia</li>
              <li> Nihon jin - Japończyk</li>
              <li> Nin jutsu - "sztuka pozostawania nierozpoznanym"</li>
              <li> Nippon - Japonia</li>
              <li> Nodo - gardło</li>
              <li> Nodobotoke - krtań, "jabłko Adama"</li>
              <li> Nogare - spokojne i głębokie oddychanie w karate</li>
              <li> Nukite - "ręka włócznia", opuszki palców</li>
              <li>Nunchaku - cep do ryżu, stosowany do walki przez wieśniaków</li>
            </ul>

            <ul>
              <li> O</li>
              <li> Obi - pas</li>
              <li> Oi zuki - cios prosty z wypadu</li>
              <li> Osu - tak, dziękuję, pozdrowienie</li>
              <li> Otoshi - obniżać, opuszczać</li>
              <li> Otosu - niżej</li>
              <li> Oyayubi - kciuk</li>
            </ul>

            <ul>
              <li> R</li>
              <li> Rei - ukłon</li>
              <li> Reigi - "etykieta", kurtuazja</li>
              <li>Renshu - ćwiczenia</li>
              <li> Roku – sześć</li>
            </ul>

            <ul>
              <li>S</li>
              <li> San - trzy</li>
              <li>Sanchin - trójkąt</li>
              <li>Seiken - powierzchnia uderzająca, jaką stanowią głowy II i III kości śródręcza, przód pięści</li>
              <li> Seika tanden - środek ciężkości ciała</li>
              <li> Seito - student</li>
              <li> Seiza - pozycja siedząca</li>
              <li> senpai - starszy rangą</li>
              <li> Sensei - mistrz, nauczyciel</li>
              <li> Shihan - mistrz, profesor, tytuł przysługujący karatekom noszącym wysokie stopnie mistrzowskie</li>
              <li>Shiken - egzamin</li>
              <li> Shiko - pozycja zapaśnika Sumo</li>
              <li> Shinden - świątynia</li>
              <li> Shiroo - biały, zawodnik walczący po lewej stronie planszy</li>
              <li> Shisei - postawa (również dachi)</li>
              <li> Shitsu kansetsu - dół podkolanowy</li>
              <li>Shobu - walka, mecz w sportach walki</li>
              <li> Shuto - zewnętrzna krawędź dłoni</li>
              <li> Sobi - górna część łydki</li>
              <li> Sokumen - strona, bok</li>
              <li>Sokuto - zewnętrzna krawędź stopy</li>
              <li>Sonoba kihon - kihon w miejscu</li>
              <li> Soto - od zewnątrz do wewnątrz, zewnętrzna strona</li>
              <li>Sukui - łyżka, czerpak</li>
              <li>Suwari waza - techniki walki w pozycji siedzącej</li>
            </ul>

            <ul>
              <li>T</li>
              <li> Tai - ciało</li>
              <li>Taicho - kapitan zespołu w karate sportowym</li>
              <li>Tai sabaki - ruchy skrętne i obrotowe ciała</li>
              <li>Takate - ramię</li>
              <li> Take - bambus</li>
              <li>Tameshi wari - technika rozbijania twardych przedmiotów</li>
              <li>Tatami - tradycyjna mata japońskaTate - pionowy,od góry do dołu</li>
              <li>Te – ręka</li>
              <li>Teisho - wewnętrzna powierzchnia dłoni, nasada, podstawa dłoni</li>
              <li>Teisoku - wewnętrzna krawędź stopy</li>
              <li>Tobi - skakać, szybować</li>
              <li>Tobi geri - kopnięcie z wyskoku</li>
              <li>Tobikonode - doskok</li>
              <li>Tokui waza - techniki ulubione</li>
              <li>Tokun - znak</li>
              <li>To ma - duży dystans, również zbyt duży</li>
              <li>Tora - tygrys</li>
              <li>Tori - atakujący</li>
              <li>Tori - ptak</li>
              <li>Tsukami - uchwyt</li>
              <li>Tsuki - uderzenie po linii prostej, pchnięcie</li>
              <li>Tsumasaki - końce palców stopy, jako powierzchnia uderzająca</li>
              <li>Tsure - partner</li>
              <li>Tsuru - żuraw</li>
              <li>Tsuzu kete hajime - podjąć przerwaną walkę</li>
            </ul>

            <ul>
              <li>U</li>
              <li>Uchi - uderzenie po łuku</li>
              <li>Uchi deshi - osobisty uczeń</li>
              <li>Uchi waza - techniki uderzeń</li>
              <li> Ude - przedramię</li>
              <li>Uke - blok</li>
              <li>Ukemi - obrona, pady, przewroty</li>
              <li>Uke te - wykonujący kata</li>
              <li>Ura - odwrotnie, strona tylna, odwrotna</li>
              <li>Uraken - grzbiet pięści</li>
              <li>Ushiro - do tyłu</li>
            </ul>

            <ul>
              <li>W</li>
              <li>Waza - technika, sposób, umiejętność</li>
              <li>Waza ari - przewaga, pół punktu</li>
            </ul>

            <ul>
              <li>Y</li>
              <li>Yama - góra</li>
              <li>Yame - stop</li>
              <li>Yoi - gotów, pozycja gotowości</li>
              <li>Yoko - kierunek poziomy, bok</li>
              <li>Yon - cztery</li>
              <li>Yori ashi - przesunięcie do przodu lub tyłu bez zmiany pozycji</li>
              <li>Yubi - palce</li>
            </ul>

            <ul>

              <li>Z</li>
              <li>Zanshin - pozostawanie w czujnej gotowości</li>
              <li>Zarei - ukłon z pozycji klęczącej</li>
              <li>Zazen, seiza - medytacja siedząc</li>
              <li>Zen - cały</li>
              <li>Zenbu - wszystko</li>
              <li>Zero - zero</li>
              <li>Zubon - spodnie ubioru treningowego</li>
            </ul>


          </div>
        </div>
      </main >
    )
  }
}

export default Kyokushin