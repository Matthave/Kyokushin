import React from 'react'
import $ from 'jquery'
import Belts from './Belts'
import '../styles/Egzamin.css'




class Egzamin extends React.Component {

  state = {
    opacity: false,
    slide: false,
    value: '',
  }

  belts = [
    { id: 0, title: 'Pas Biały', borderColor: 'white', txtColor: 'black', color: 'white', txt: 'Biel odbija wszystko i nie przyjmuje niczego. Zawiera bowiem w sobie całą gamę kolorów. Symbolizuje nadzieję, czystość, entuzjazm, możliwość zdobycia i przyjęcia wszystkiego. Podobnie jak czerń, w swojej najczystszej formie nie występuje w przyrodzie. Wraz z pierwszym treningiem biały pas traci swoją biel. Wchłania pot i kurz, powoli zmienia swoją dziewiczą, czystą barwę. Oprócz pasa czarnego, jest on chyba najważniejszy w życiu karateki. Od niego rozpoczyna się powolna wspinaczka w górę. Każdy, kto otrzyma swój pierwszy pas powinien się nim cieszyć. Powinien trenować w skupieniu i spokoju, uczyć się etykiety dojo, właściwej postawy i wytrwałości. Nawet największy mistrz też kiedyś nosił biały pas.', kyu: '' },
    { id: 1, title: 'Pas Pomarańczowy', borderColor: 'white', txtColor: 'black', color: 'linear-gradient(45deg, rgba(254,173,80,1) 0%, rgba(255,153,35,1) 35%, rgba(255,136,0,1) 100%)', txt: 'Po kilku miesiącach treningu biały pas zmienił swój kolor, pociemniał. Nadszedł moment aby przejść na kolejny etap i rozwiązać nowe problemy. Trening pomarańczowego pasa związany jest z zachowaniem równowagi, poczuciem stabilności, nauką kontrolowania własnego ciała, postawy, pracą stóp i nóg. W niektórych krajach pas ten się pomija i uczniowie otrzymują od razu pas niebieski.', kyu: '10 i 9 kyu' },
    { id: 2, title: 'Pas Niebieski', borderColor: 'white', txtColor: 'white', color: 'linear-gradient(45deg, rgba(35,118,255,1) 0%, rgba(0,77,204,1) 35%, rgba(0,47,124,1) 100%)', txt: 'Wraz z otrzymaniem niebieskiego pasa uczeń rozpoczyna nowy etap - miękkiego dostosowania się, płynności ruchów, giętkości ciała. W Japonii ten etap nazywa się mizu-iro-obi - "stopień koloru wody". Symbolizuje płynność przepływającej wody, która pozostaje niezmienna bez względu na to, czy jest cicho szemrzącym strumieniem, spienioną rzeką, czy oceaniczną falą. Woda nie stawia oporu, zawsze ustępuje z drogi, ale tylko po to, by otoczyć i wypełnić. Dostosowuje się do kształtu filiżanki i miękko poddaje się twardej skale, po to by po jakimś czasie ją skruszyć... Trening błękitnego pasa to nauka miękkości, elastyczności, koordynacji techniki i wyczucia ciosu przeciwnika, dostosowania się do niego. To także przezwyciężenie pokusy aby zmniejszyć intensywność treningu, uciec od monotonii i jednostajności. To pierwsza poważna lekcja panowania nad sobą i stanem swojego umysłu. Prawdziwie niebezpieczny jest ten, kto nie okazuje gniewu!', kyu: '8 i 7 kyu' },
    { id: 3, title: 'Pas Żółty', borderColor: 'white', txtColor: 'black', color: 'linear-gradient(45deg, rgba(254,228,101,1) 0%, rgba(250,215,46,1) 35%, rgba(250,210,16,1) 100%)', txt: 'Kolor żółty wiąże się z elementem ognia. Na tym etapie ciało karateki jest już gibkie i silne. Czuje on siłę wykonywanych technik i ich dynamikę. Nabiera pewności siebie, zdając sobie jednocześnie sprawę, iż nadal musi podążać drogą pokory i samowyrzeczenia. Każdy, kto pragnie zdobyć żółty pas, powinien sobie uświadomić, że siła mentalna jest nie mniej ważna od fizycznej. Ciało i umysł karateki muszą być zjednoczone. Prawdziwa siła zależy bowiem od mentalnej stymulacji i pracy umysłu nad ciałem. Karate, to coś więcej niż rozwój fizyczny.', kyu: '6 i 5 kyu' },
    { id: 4, title: 'Pas Zielony', borderColor: 'white', txtColor: 'white', color: 'linear-gradient(45deg, rgba(39,133,48,1) 0%, rgba(19,102,27,1) 35%, rgba(0,74,7,1) 100%)', txt: 'Zieleń jest mieszaniną żółtego (element ognia) i niebieskiego (element powietrza i pustki). Zielony pas to nauka panowania nad sobą i rozwijanie pozytywnego stosunku do ludzi i świata. Trudność tego etapu polega na tym, aby z całą mocą uświadomić sobie, że siła bez mądrości i współczucia jest jedynie destrukcją. To czas, w którym trzeba zrozumieć, że nigdy nie pozna się całej prawdy i że we wszystkim, co nas otacza kryje się znacznie więcej niż mogą dostrzec oczy. To także czas by pomyśleć o diecie! W dzisiejszych czasach człowiek spożywa o wiele za dużo czerwonego mięsa. Jeśli nie można go całkowicie wykluczyć z jadłospisu, warto je chociaż trochę ograniczyć, a w to miejsce wprowadzić więcej "zielonych potraw" - surowych jarzyn i owoców. W pewnym sensie jest się tym, co się je. Nie można być jednak niewolnikiem żadnej diety. Zielony pas to dojrzałość, mądrość i miłość.', kyu: '4 i 3 kyu' },
    { id: 5, title: 'Pas Brązowy', borderColor: 'white', txtColor: 'white', color: 'linear-gradient(45deg, rgba(143,90,52,1) 0%, rgba(136,76,33,1) 35%, rgba(117,59,17,1) 100%)', txt: 'Brązowy pas znakomicie czuje swoje ciało, doskonale opanował wszystkie techniki. Karateka zakładający brązowy pas potrafi kontrolować swoje negatywne emocje : gniew, użalanie się nad sobą, zazdrość (cechy niebieskiego pasa), wyolbrzymianie, złośliwość, przebiegłość (cechy żółtego pasa), skąpstwo, oszustwo i uprzedzenie (cechy zielonego pasa). Ma w sobie odwagę, żelazną wolę i posiada wiarę w piękno nieznanego, które jest przed nim. Nieustannie też spogląda wstecz przyglądając się etapom własnego rozwoju. Dzięki otwartości umysłu adept noszący brązowy pas uczy się respektować siłę innych osób.', kyu: '2 i 1 kyu' },
    { id: 6, title: 'Pas Czarny', borderColor: 'white', txtColor: 'white', color: 'black', txt: 'Czarny jest kolorem siły. Powiązany z kolorem ciemnoniebieskim. Wykracza poza fizyczność i cielesność. Każdy, kto otrzymał czarny pas powinien wejrzeć w siebie, zadać sobie pytanie czy jest dostatecznie dojrzałym, zdać sobie sprawę ze stanu własnego umysłu. Można oszukać wszystkich lecz nie siebie. Zostało jeszcze wiele do zrobienia. Mistrzem zostaje ten, kto nie zaprzestaje wysiłku!', kyu: 'Stopnie DAN' },
  ]

  kidsRequirementsOrange = [
    { id: '10.1 KYU (pomarańczowy pas + 1 czerwony pagon)', position1: 'Teoria i komendy: zasady bezpieczeństwa - sala, szatnia, ubiór itp.', position2: 'Strefy: jodan, chudan, gedan. Znaczenie słowa kiai - okrzyk.', position3: 'Pozycje: fudo - dachi.', position4: 'Uderzenia/cięcia: morote - tsuki (jodan, chudan, gedan).', position5: 'Kopnięcia: hiza - geri (chudan).', position6: 'Test sprawności: 50 razy zaciskanie pięści, 10 przysiadów: obciążone całe stopy, ręce dowolnie.', position7: null },
    { id: '10.2 KYU (pomarańczowy pas + 2 czerwone pagony)', position1: 'Teoria i komendy: pozycja seiza - siadanie i wstawanie, ukłony. Znaczenie słowa naura - powrót.', position2: 'Pozycje: zenkutsu - dachi.', position3: 'Uderzenia: uraken - shomen - uchi.', position4: 'Bloki: morote - gedan - barai.', position5: 'Kopnięcia: hiza - geri - chudan plus kiai.', position6: ' Renraku: krok w tył do zenkutsu - dachi z morote - gedan - barai/gedan barai i powrót do fudo - dachi.', position7: 'Test sprawności: 10 skłonów w przód z leżenia na plecach, ręce dowolnie.' },
    { id: '10.3 KYU(pomarańczowy pas + 3 czerwone pagony)', position1: 'Teoria i komendy: znaczenie słowa karate oraz kara - pusty, te - ręka. Znaczenie słowa osu.', position2: 'Pozycje: heiko - dachi, yoi - dachi.', position3: 'Uderzenia/cięcia: seiken - tsuki, (jodan, chudan, gedan).', position4: 'Bloki: gedan - barai.', position5: 'Kopnięcia: hiza - geri jodan plus kiai.', position6: 'Renraku: krok w tył do zenkutsu - dachi z morote - gedan - barai/gedan barai i powrót do fudo - dachi.', position7: 'Test sprawności: 10 ugięć ramion z leżenia przodem w podporze na dłoniach i kolanach.' },
    { id: '9.1 KYU (pomarańczowy pas + 1 czerwony pagon + 1 niebieski pagon)', position1: 'Teoria i komendy: prawidłowy wygląd karategi i wiązanie pasa. Liczenie po japońsku do 10.', position2: 'Pozycje: heisoku - dachi.', position3: 'Uderzenia/cięcia: oi - tsuki, (jodan, chudan, gedan).', position4: 'Bloki: jodan - uke.', position5: 'Kopnięcia: mae - keage.', position6: 'Renraku: trzy kroki w przód/tył w zenkutsu - dachi z oi - tsuki.', position7: 'Test sprawności: 20 przysiadów - obciążone całe stopy, ręce zaplecione na karku, tułów pionowo, 10 wahnięć w formie kołyski na brzuchu z leżenia przodem.' },
    { id: '9.2 KYU (pomarańczowy pas + 2 czerwone pagony + 1 niebieski pagon)', position1: 'Teoria i komendy: znaczenie słów sensei,shihan, senpai.', position2: 'Pozycje: musubi - dachi.', position3: 'Uderzenia/cięcia: gyaku - tsuki (jodan, chudan, gedan).', position4: 'Bloki: soto - uke.', position5: 'Kopnięcia: kin - geri.', position6: 'Renraku: trzy kroki w przód/tył w zenkutsu - dachi z gyaku - tsuki.', position7: 'Test sprawności: 10 skłonów w przód z leżenia na plecach, ręce zaplecione na karku, tułów prosty, 10 wahnięć w formie kołyski na plecach z przysiadu, ręce zaplecione wokół kolan.' },
    { id: '9.3 KYU (pomarańczowy pas + 3 czerwone pagony + 1 niebieski pagon)', position1: 'Teoria i komendy: znaczenie słów kyoku-shin-kai.', position2: 'Pozycje: nekoashi - dachi.', position3: 'Uderzenia/cięcia: seiken - ago - uchi.', position4: 'Bloki: uchi - uke.', position5: 'Kopnięcia: mae - geri chudan. 6. Renraku: trzy kroki w przód w zenkutsu - dachi z oi - tsuki/ uke, obrót z gedan barai.', position6: 'est sprawności: 10 ugięć ramion z leżenia przodem w podporze na pięściach i kolanach, 10 wahnięć w formie kołyski na plecach z przysiadu, ręce po kątem 45° amortyzują pad w tył.', position7: null },
  ]

  kidsRequirementsBlue = [
    { id: '8.1 KYU (niebieski pas + 1 czerwony pagon)', position1: 'Teoria i komendy: przysięga dojo.', position2: 'Pozycje: kokutsu - dachi.', position3: 'Uderzenia/cięcia: shuto - sakotsu - uchi - komi.', position4: 'Bloki: soto - keage.', position5: 'Kopnięcia: soto - keage.', position6: 'Renraku: trzy kroki w przód w zenkutsu - dachi z keri, obrót z morote gedan barai.', position7: 'Test sprawności: 10 przewrotów w przód, 60 sekund tzw. mostek w tył z leżenia na plecach.' },
    { id: '8.2 KYU (niebieski pas + 2 czerwone pagony)', position1: 'Teoria i komendy: nogare I - oddychanie', position2: 'Pozycje: moroashi - dachi, uchi - hachiji - dachi.', position3: 'Uderzenia/cięcia: shuto - sakotsu - uchi.', position4: 'Kopnięcia: uchi - keage.', position5: 'Renraku: krok w tył do zenkutsu - dachi z gedan - barai plus gyaku - tsuki i powrót do fudo - dachi.', position6: 'Test sprawności: 10 przewrotów w tył, 10 razy po 20 sekund rozciąganie w maksymalnym rozkroku ze skrętem w lewo i w prawo tzw. szpagat.', position7: null },
    { id: '8.3 KYU (niebieski pas + 3 czerwone pagony)', position1: 'Teoria i komendy: nogare II - oddychanie wykonywane odwrotnie.', position2: 'Pozycje: sanchin - dachi.', position3: 'Uderzenia/cięcia: shuto - ganmen - uchi.', position4: 'Kopnięcia: mae - geri jodan.', position5: 'Renraku: trzy kroki w przód w zenkutsu - dachi z uke plus gyaku - tsuki obrót z gedan barai.', position6: 'Kata: kihon kata I.', position7: 'Test sprawności: 10 razy tzw. gwiazda gimnastyczna, 10 razy dotknąć głową podłogi poprzez skłon w przód siedząc w maksymalnie szerokim rozkroku, nogi proste w kolanach.' },
    { id: '7.1 KYU (niebieski pas + 1 czerwony pagon + żółty pagon)', position1: 'Teoria i komendy: ibuki - oddychanie z 2 wydechami.', position2: 'Pozycje: kiba - dachi.', position3: 'Uderzenia/cięcia: uraken - sayu - uchi, uraken - hizo - uchi.', position4: 'Kopnięcia: kansetsu - geri.', position5: 'Renraku: trzy kroki w przód w sanchin - dachi z tsuki/uchi/keri/uke, obrót poprzez przekrok.', position6: 'Kata: taikyoku I.', position7: 'Test sprawności: 10 razy zamach nogą przechodząc do stania na rękach pod drabinkami.' },
    { id: '7.2 KYU (niebieski pas + 2 czerwone pagony + żółty pagon)', position1: 'Teoria i komendy: etykieta dojo.', position2: 'Pozycje: tsuruaschi - dachi.', position3: 'Uderzenia/cięcia: uraken - yoko - uchi j/ch.', position4: 'Kopnięcia: kakato - geri.', position5: ' Renraku: trzy kroki w przód w zenkutsu - dachi z mae - geri plus gyaku - tsuki obrót z morote gedan barai.', position6: 'Kata: taikyoku II.', position7: 'Test sprawności: 60 sekund stanie na rękach pod drabinkami.' },
    { id: '7.3 KYU (niebieski pas + 3 czerwone pagony + żółty pagon)', position1: 'Teoria i komendy: historia Kyokushin Karate.', position2: 'Pozycje: kake - dachi.', position3: 'Uderzenia/cięcia: shuto - mawashi - uchi.', position4: 'Kopnięcia: yoko keage, ushiro - keage.', position5: 'Bloki: shuto - mawashi - uke.', position6: 'Renraku: trzy kroki w przód w kokutsu - dachi z shuto mawashi - uke obrót poprzez przekrok.', position7: 'Kata: sakugi I.', position8: 'Test sprawności: 10 razy tzw. sprężynka czyli wymyk w przód z leżenia na plecach.' },
  ]

  adultsRequirementsOrange = [
    { id: '10 KYU (pomarańczowy pas) ', position1: 'Zasady noszenia kyokushin karategi i wiązanie obi.', position2: 'Znaczenie słowa kyoku-shin-kai oraz znajomość etykiety dojo i przysięgi dojo.', position3: 'Liczenie po japońsku do 10.', position4: 'Pozycje: Fudo-dachi, yoi-dachi, uchi-hachi-ji-dachi, haisoku-dachi, zenkutsu-dachi.', position5: 'Uderzenia: morote-tsuki, (jodan, chudan, gedan), seiken-tsuki (jodan, chudan, gedan).', position6: 'Bloki: seiken-jodan-uke, seiken-gedan-barai, kake-wake-uke.', position7: 'Kopnięcia: hiza-geri, kin-geri, mea-keage.', position8: 'Kumite: poruszanie się w pozycji walki krokiem dostawnym.', position9: 'Z aktywniej pozycji haisoku-dachi przejść do zenkutsu-dachi i wykonać techniki: morote-tsuki (jodan, chudan, gedan), seiken-gedan-barai, kake-wake-uke, hiza-geri, kin-geri. Uwzględnić stronę lewą (hidari) oraz prawą (migi), stosować okrzyk (kiai).', position10: null, position11: null, position12: null },
    { id: '9 KYU (pomarańczowy pas z niebieskim pagonem)', position1: 'Historia kyokushin karate.', position2: 'Pozycje: musubi-dachi, sanshin-dachi.', position3: 'Uderzenia: seiken-ago-uchi, seiken-gyaku-tsuki, seiken-oi-tsuki (jodan, chudan, gedan).', position4: 'Bloki: seiken-chudan-soto-uke.', position5: 'Kopnięcia: mea-geri-chudan (chusoku).', position6: 'Kata: kihon-no-kata sono-ichi.', position7: 'Oddychanie: nogare.', position8: 'Ippon-kumite sono-ichi: tori (atakujący); jodan-tsuki-uke (broniący się); jodan-uke, kontra seiken-mawashi-tsuki-chudan.', position9: 'ppon-kumite sono-ni: tori; jodan-tsuki-uke, jodan-uke, kontra seiken-mawashi-tsuki-chudan.', position10: 'Ippon-kumite sono-san: tori; jodan-tsuki-uke; jodan-uke, kontra seiken-gyaku-tsuki-jodan, hiza-geri.', position11: 'Test kondycyjny: 20 ugięć ramion w podporze przodem na pięściach i kolanach, 10 ugięć ramion w podporze przodem na palcach i kolanach, 20 uniesień tułowia z leżenia na plecach.', position12: 'Test poruszania się w pozycji sanchin-dachi i zenkutsu-dachi stosując techniki zawarte w kihin-no-kata.' }
  ]

  adultsRequirementsBlue = [
    { id: '8 KYU (niebieski pas)', position1: 'Pozycje: kokutsu-dachi, kiba-dachi.', position2: 'Uderzenia i cięcia: uraken-shomen-uchi, seiken-shita (jodan, chudan, gedan), shuto-sakotso-uchi-komi.', position3: 'Bloki: seiken-chudan-uchi-uke.', position4: 'Kopnięcia:mawachi-geri-gedan (haisoku, chusoku), yoko-keage (sokuto).', position5: 'Kata: taikyoku sono-ichi, sono-ni.', position6: 'Oddychanie: nogare, ibuki (san-kai).', position7: 'Ippon-kumite sono-ichi: tori; chudan-tsuki-uke; soto-uke, kontra chudan-gyaku-tsuki.', position8: 'Ippon-kumite sono-ni: tori; chudan-tsuki-uke; soto-uke, kontra seiken-shita-tsuki i gedan-mawashi-geri.', position9: 'Ippon-kumite soni-san: tori; chudan-tsuki-uke; soto-uke, kontra seiken-tate-tsuki i hiza-geri.', position10: 'Jiu-kumite: wolna walka pod kątem zawodów.', position11: 'Test kondycyjny: 25 ugięć ramion w podporze przodem na pięściach i kolanach, 15 ugięć ramion w podporze przodem na palcach i kolanach, 25 uniesień tułowia z leżenia na plecach.', position12: 'Test poruszania się w pozycji kokutsu-dachi i kiba-dachi stosując techniki zawarte w kihon-no-kata.    ' },
    { id: '7 KYU (niebieski pas z żółtym pagonem)', position1: 'Pozycje: neko-ashi-dachi.', position2: 'Uderzenia i cięcia: tettsui-oroshi-gamen-uchi, tettsui-kome-kami-uchi, tettsui-hizo-uchi, tettsui-yoko-uchi (jodan, chudan, gedan), shuto-ganmen-uchi shuto-hizo-uchi.', position3: 'Bloki: seiken-juji-uke (jodan, gedan), shuto-mawashi-uke.', position4: 'Kopnięcia: teisoku-mawashi-soto-keage, haisoku-mawashi-uchi-keage, mawashi-geri-chudan (haisoku, chusoku), kansetsu-geri.', position5: 'Kata: taikyoku-sono-san, pinian-sono-ichi.', position6: 'Sanbon-kumite: tori wykonuje 3 kroki atakując kolejno jodan-tsuki, chudan-tsuki, gedan-tsuki, uke cofając się wykonuje 3 kroki z kolejnego jodan-uke, soto-uke, gedan-barai, kontra: chudan-gyaku-tsuki i gedan-barai.', position7: 'Oddychanie: nogare, ibuki (san-kai).', position8: 'Ippon-kumite sono-ichi: tori; jodan-tsuki-uke; uchi-uke, kontra seiken-shita-tsuki, seiken-chudan-mawashi-tsuki i mawashi-geri-gedan.', position9: 'Ippon-kumite sono-san: tori; jodan-tsuki uke; uchi-uke, kontra uraken-shomen-uchi, seiken-shita-tsuki i hiza-geri.', position10: 'Jiji-kumite: randori.', position11: 'est kondycyjny: 30 ugięć ramion w podporze przodem na pięściach i kolanach, 20 ugięć ramion w podporze przodem na palcach i kolanach, 30 uniesień tułowia z leżenia na plecach.', position12: 'Test poruszania się w pozycji zenkutsu-dachi, kokutsu-dachi, kiba-dachi i neko-ashi-dachi stosując techniki zawarte w kihon-no-kata.' }
  ]

  adultsRequirementsYellow = [
    { id: '6 KYU (zółty pas) ', position1: 'Pozycje: tsuru-ashi-dachi.', position2: 'Uderzenia i cięcia: uraken-sayu-uchi, uraken-mawashi-uchi, uraken-hizo-uchi, uraken-ganmen-oroshi-uchi, shuto-jodan-uchi-uchi, ni-hon-nukite (me-tsuki), yon-hon-nukite (jodan, chudan), hiji-jodan i chudan-ate.', position3: 'Bloki: morote-chudan-uchi-uke, seiken-uchi-uke/gedan-barai.', position4: 'Kopnięcia: yoko-geri-chudan, ushiro-geri-chudan.', position5: 'Kata: pinian-sono-ni.', position6: 'Renkaku: tori; mae-geri-chudan, chudan-gyaku-tsuki-uke: soto-uke, gedan-barai, chudan-gyaku-tsuki.', position7: 'Ippon-kumite sono-ichi: tori; migi-jodan-tsuki, chudan-gyaku-tsuki uke; hidari-uchi-uke, soto-uke, gedan-barai, gyaku-shuto-sakotsu-uchi.', position8: 'Ippon-kumite sono-ni: tori; migi-jodan-tsuki, chudan-gyaku-tsuki uke; hidari-uchi-uke, soto-uke, gedan-barai, gyaku-shuto-sakotsu-uchi.', position9: 'Ippon-kumite sono-san: tori; migi-jodan-tsuki, chudan-gyaku--tsuki-uke; hidari-uchi-uke, soto-uke, gedan-barai, mae-geri, gyaku-shuto-sakotsu-uchi, hiza-geri, odepchnięcie tori.', position10: 'Jiju-kumite: 10 x 2 minuty.', position11: 'Test kondycyjny: 50 ugięć ramion w podporze przodem na pięściach i kolanach, 30 ugięć ramion w podporze na 5 palcach, 20 ugięć ramion w podporze przodem na 3 palcach, 40 uniesień tułowia z leżenia na plecach.', position12: 'Test poruszania się w pozycji zenkutsu-dachi, kiba-dachi, kokutsu-dachi, neko-ashi dachj i tsuru-ashi-dachi stosując techniki zawarte w kihon-no-kata.', position13: null },
    { id: '5 KYU (zółty pas z zielonym pagonem)', position1: 'Pozycje: moro-ashi-dachi.', position2: 'Uderzenia i cięcia: shotei-uchi (jodan, chudan, gedan), hihi-age-ate-jodan.', position3: 'Bloki: shotei-uke (jodan, chudan, gedan), mae-mawashi-uke.', position4: 'Kopnięcia: ushiro-geri-chudan wykonywane 3 metodami: przekrok z obrotem, obrót z miejsca, poprzez zakrok.', position5: 'Kata: pinian-sono-san.', position6: 'Kombinacje: mae-geri-chudan, yoko-geri-chudan, ushiro-geri-chudan, chudan-gyaku-tsuki.', position7: 'Oddychanie: ibuki i nogare wykonywane w sanchin dachi motote-uke i gyaku-tsuki.', position8: 'Ippon kumite sono-ichi: tori; migi-mae-geri-chudan uke; hidari-shotei-uke-gedan, hidari-mae-geri-chudan, migi-gyaku-tsuki-jodan.', position9: 'Ippon kumite sono-ni: tori; migi-mae-geri-chudan uke; hidari-shotei-uke-gedan, hidari-mae-geri-chudan, migi-gyaku-tsuki-chudan, migi-mawashi-geri-gedan.', position10: 'Ippon-kumite sono-san: tori; migi-mae-geri chudan uke; hidari-shotei-uke-gedan, hidari-mae-geri-chudan, migi-gyaku-tsuki-jodan, hiza-geri.', position11: 'Jiyu-kumite: 12 x 2 minuty.', position12: 'Test kondycyjny: 70 ugięć ramion w podporze przodem na pięściach i kolanach, 40 ugięć ramion w podporze przodem na 5 palcach, 30 ugięć ramion w podporze przodem na 3 palcach, 50 uniesień tułowia z leżenia na plecach.', position13: 'Test poruszania się w pozycji moro-ashi-dachi stosując techniki zawarte w kihon-no-kata.' }
  ]

  adultsRequirementsGreen = [
    { id: '4 KYU (zielony pas)', position1: 'Pozycje: heiko-dachi, kake-dachi.', position2: 'Pozycje w formie kata: lewa i prawa pozycja, początek w aktywnej pozycji haisoku-dachi. Pozycja zenkutsu-dachi, kokutsu-dachi, sanchin-dachi, neko-ashi-dachi, kiba-dachi, moro-ashi-dachi, kake-dachi i tsuru-ashi-dachi.', position3: 'Uderzenia i cięcia: 5 wariantów shuto w sanchin-dachi w kombinacji; shuto-sakotsu-uchi, gamen-uchi, uchi-komi, hizo-uchi i uchi-uchi.', position4: 'Bloki: 6 bloków w różnych pozycjach: shuto-jodan-kake-uke, shuto-jodan-uke, shuto-chudan-soto-uke, shuto-chudan-uchi-uke, shuto-gedan-barai i shuto-mae-mawashi-uke.', position5: 'Kopnięcia: yoko-geri-jodan, mawashi-geri-jodan (chusoku, haisoku), ushiro-geri-jodan.', position6: 'Kata: sanchin-no-kata.', position7: 'Jiyu-ippon-kumite III kyokushin-kumite.', position8: 'Juyu-kumite: 15 x 2 minuty oceniając: siłę, kondycję, rozciągnięcie, odporność, ducha walki i dyscyplinę.', position9: 'Test kondycyjny: 30 ugięć ramion w podporze na pięściach, 70 uniesień tułowia z leżenia na plecach, 10 przeskoków nad partnerem.', position10: null, position11: null },
    { id: '3 KYU (zielony pas z brązowym pagonem)', position1: 'Pozycje: shiko-dachi.', position2: 'Uderzenia i cięcia: 5 uderzeń łokciem w pozycji kiba-dachi w kombinacji; chudan-hiji-ate, chudan-mae-hiji-ate, jodan-mae-hiji-ate, jodan-age-hiji-ate, oroshi-hiji-ate, ushiro-hiji-ate.', position3: 'Bloki: 8 bloków shuto w pozycji sanchin-dachi w kombinacji: shuto-jodan-kake-uke, shuto-jodan-uke , chuto-chudan-soto-uke, shuto-chudan-uchi-uke, shuto-gedan-barai, shuto-mae-mawashi-uke, shuto-jodan-juji-uke i shuto-gedan-juji-uke.', position4: 'Kopnięcia:mae-kakato-geri (jodan, chudan, gedan), ago-jodan-geri.', position5: 'Kata: pinian sono-yon, kihon-kata sono-ichi.', position6: 'Yakusoku-ippon-kumite: tori informuje jaki atak wykona, uke musi przygotować obronę i kontrę z kiai.', position7: 'Jiyu-ippon-kumite IV kyokushin-kumite.', position8: 'Jiyu-kumite: 20 x 2 minuty.', position9: 'Test kondycyjny: 50 ugięć ramion w podporze przodem na pięściach, 100 uniesień tułowia z leżenia na plecach, 15 przeskoków nad partnerem, 15 przeskoków nad własnym pasem.', position10: 'Test poruszania się w różnych pozycjach stosując techniki zawarte w kihon-no-kata.', position11: 'Wiedza na temat Polskiego Związku Karate i Komisji Kyokushin.' }
  ]

  adultsRequirementsBrown = [
    { id: '2 KYU (brązowy pas)', position1: 'Uderzenia i cięcia: hiraken tsuki (jodan, chudan), hiraken-oroshi-uchi, hiraken-mawashi uchi, haisoku (jodan, chudan) age jodan-tsuki.', position2: ' Bloki: koken-uke (jodan, chudan, gedan).', position3: 'Kopnięcia: tobi-nidan-geri, tobi-gyaku-mae-geri, tobi-oi-mae-geri.', position4: ' Kata: pinian sono-go, geksai-dai.', position5: 'Renkaku: lewa pozycja walki. Rozpoczęcie poprzez hidari-gedan-barai następnie seiken-ago-uchi, seiken-gyaku-tsuki, mae-geri, hidari, gedan-barai i gyaku-tsuki.', position6: 'Jiyu-ippon-kumite V kyokushin-kumite.', position7: 'Jiyu-kumite: 25 x 2 minuty.', position8: 'Test kondycyjny: 60 ugięć ramion w podporze przodem na pięściach, 20 ugięć ramion w podporze przodem na palcach, 100 uniesień tułowia z leżenia na plecach, 20 przeskoków nad partnerem, 20 przeskoków nad własnym pasem.', position9: 'Ukemi-waza: pady w bok, raz w prawo raz w lewo. Karate-ne-waza.', position10: 'Znajomość przepisów Walki Sportowej Kyokushin.', position11: null },
    { id: '1 KYU (brązowy pas z czarnym pagonem)', position1: 'Uderzenia i cięcia: ryoto-ken-tsuki (jodan, chudan), naka-yubi-ippon-ken (jodan, chudan), oya-yubi-ken (jodan, chudan), atama tsuki (mae, yoko, ushiro).', position2: 'Bloki: kake-uke jodan, haito-uchi-uke.', position3: 'Kopnięcia: jodan-uchi-haisoku-geri, oroshi-uchi-kakato-geri, oroshhsoto-kakato-geri, tobi-yoko-geri.', position4: 'Kata: yantsu i tsuki-no-kata.', position5: 'Renkaku: lewa pozycja walki. - poruszanie się atakując: oi tsuki, gyaku-tsuki, oi-tsuki i shita-tsuki. - poruszanie się atakując: oi-mawashi-geri, oi-tsuki, gyaku-tsuki, gyaku-mawashi i gedan-barai.', position6: 'Tachi-waza (rzuty): oi-soto-gari, o-uchi-gari, de-ashi-barai, o-goshi i seoi-nage.', position7: 'Jiyu-ippon-kumite VI kyokushin-kumite.', position8: 'Jiyu-kumite: 30 x 2 minuty.', position9: 'Tameshiwari: seiken-tsuki, shuto-sakotsu-uchi i keri.', position10: 'Test kondycyjny: 70 ugięć ramion w podporze przodem na pięściach, 20 ugięć ramion w podporze przodem na 3 palcach, 10 uniesień tułowia z leżenia na plecach z podwójnym skrętem, 20 przeskoków nad partnerem, 30 przedkoków nad własnym pasem.', position11: 'Dobra znajomość nomenklatury japońskiej stosowanej w kyokushin.' }
  ]

  adultsRequirementsBlack = [
    { id: '1 DAN', position1: 'Uderzenia i cięcia: morote-haito-uchi (chudan/jodan), haito-uchi (gedan/chudan/jodan).', position2: 'Bloki: morote-kake-uke (chudan/jodan), osae-uke-chudan.', position3: 'Kopnięcia: kake-geri (kakato/chusoku), ushiro-mawashi-geri (gedan/chudan/jodan).', position4: 'Kata: tensho, saiha, taikyoku-ura.', position5: 'Renraku: migi-mawashi-geri-jodan, hidari-ushiro-mawashi-geri-jodan, migi-jodan-mae, hidari-mawashi-geri-jodan, migi-ushiro-mawashi-geri-jodan.', position6: 'Jiyu-ippon-kumite: wszystkie kyokushin-kumite.', position7: 'Jiyu-kumite: minimum 30 x 2 min.', position8: 'Tameshiwari z użyciem 2 standardowych desek: seiken-tsuki, shuto-sakotsu-uchi, keri-waza.', position9: 'Test sprawnościowy: 80 ugięć ramion w podporze przodem na pięściach, 25 ugięć ramion w podporze przodem na 3 palcach, 150 skłonów w przód z leżenia na plecach, 100 przysiadów, 25 przeskoków nad kijem trzymanym w rękach.', position10: 'Wszystkie techniki w odwrotnej pozycji gyaku.', position11: 'Posiadanie przeszkolenia w zakresie pierwszej pomocy.' },
    { id: '2 DAN ', position1: 'Uderzenia i cięcia: toho-uchi, keiko-uchi.', position2: 'Bloki: hiji-uke-chudan, gedan-shotei-morote-uke, gedan-shuto-morote-uke.', position3: 'Kopnięcia: tobi-ushiro-geri, tobi-ushiro-mawashi-geri, tobi-mawashi-geri, age-kakato-ushiro-geri.', position4: 'Kata: kanku-dai, geksai-sho, seianchin, pinan sono-ichi ura.', position5: 'Jiyu-kumite: minimum 35 x 2 min.', position6: 'Tameshiwari z użyciem 2 standardowych desek: minimum 4 techniki.', position7: 'Test sprawnościowy: 90 ugięć ramion w podporze przodem na pięściach, 20 ugięć ramion w podporze przodem na 2 palcach, 150 skłonów w przód z leżenia na plecach, 100 przysiadów.', position8: ' Udział w Mistrzostwach Polski lub miedzynarodowym turnieju.', position9: 'Posiadanie uprawnień sędziego krajowego.', position10: null, position11: null },
    { id: '3 DAN', position1: 'Kata: sushi-ho, garyu, seipai, pinan-sono-ni, san i yon ura, Bo-kata-tsyon.', position2: 'Jiyu-kumite: minimum 50 walk po 2 minuty.', position3: 'Tameshiwari: minimum 5 technik.', position4: 'Test kondycyjny: 100 ugięć ramion w podporze przodem na pięściach, 25 ugięć ramion w podporze przodem na 2, 3, 5 palcach, 200 uniesień tułowia z leżenia na plecach ze skrętem tułowia, 150 przysiadów.', position5: 'Posiadanie licencji sędziego międzynarodowego oraz wiedzy medycznej na poziomie ratownika.', position6: null, position7: null, position8: null, position9: null, position10: null, position11: null }
  ]

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
    }, 250)
  }

  handleClick = (e) => {
    this.setState({
      value: e.target.name
    })
  }

  componentDidUpdate() {
    if (this.state.value === 'color') {
      $('html').animate({
        scrollTop: $('div.belt').offset().top
      }, 1000)

      this.setState({
        value: ''
      })
    }

    if (this.state.value === 'kids') {
      $('html').animate({
        scrollTop: $('div.kidsRequirementsOrange').offset().top
      }, 1000)

      this.setState({
        value: ''
      })
    }

    if (this.state.value === 'adults') {
      $('html').animate({
        scrollTop: $('div.adultsRequirementsOrange').offset().top
      }, 1000)

      this.setState({
        value: ''
      })
    }
  }

  render() {
    const belts = this.belts.map((belt) => (
      <Belts
        key={belt.id}
        title={belt.title}
        borderColor={belt.borderColor}
        txtColor={belt.txtColor}
        color={belt.color}
        txt={belt.txt}
        kyu={belt.kyu}
      />
    ))

    const kidsRequirementsOrange = this.kidsRequirementsOrange.map((req) => (
      <div key={req.id}>
        <h3>{req.id}</h3>
        <ul>
          <li>{req.position1}</li>
          <li>{req.position2}</li>
          <li>{req.position3}</li>
          <li>{req.position4}</li>
          <li>{req.position5}</li>
          <li>{req.position6}</li>
          {req.position7 ? <li>{req.position7}</li> : null}
        </ul>
      </div>
    ))

    const kidsRequirementsBlue = this.kidsRequirementsBlue.map((req) => (

      <div key={req.id}>
        <h3>{req.id}</h3>
        <ul>
          <li>{req.position1}</li>
          <li>{req.position2}</li>
          <li>{req.position3}</li>
          <li>{req.position4}</li>
          <li>{req.position5}</li>
          <li>{req.position6}</li>
          {req.position7 ? <li>{req.position7}</li> : null}
          {req.position8 ? <li>{req.position8}</li> : null}
        </ul>
      </div>

    ))

    const adultsRequirementsOrange = this.adultsRequirementsOrange.map((req) => (

      <div key={req.id}>
        <h3>{req.id}</h3>
        <ul>
          <li>{req.position1}</li>
          <li>{req.position2}</li>
          <li>{req.position3}</li>
          <li>{req.position4}</li>
          <li>{req.position5}</li>
          <li>{req.position6}</li>
          <li>{req.position7}</li>
          <li>{req.position8}</li>
          <li>{req.position9}</li>
          {req.position10 ? <li>{req.position10}</li> : null}
          {req.position11 ? <li>{req.position11}</li> : null}
          {req.position12 ? <li>{req.position12}</li> : null}
        </ul>
      </div>

    ))

    const adultsRequirementsBlue = this.adultsRequirementsBlue.map((req) => (

      <div key={req.id}>
        <h3>{req.id}</h3>
        <ul>
          <li>{req.position1}</li>
          <li>{req.position2}</li>
          <li>{req.position3}</li>
          <li>{req.position4}</li>
          <li>{req.position5}</li>
          <li>{req.position6}</li>
          <li>{req.position7}</li>
          <li>{req.position8}</li>
          <li>{req.position9}</li>
          <li>{req.position10}</li>
          <li>{req.position11}</li>
          <li>{req.position12}</li>
        </ul>
      </div>

    ))

    const adultsRequirementsYellow = this.adultsRequirementsYellow.map((req) => (

      <div key={req.id}>
        <h3>{req.id}</h3>
        <ul>
          <li>{req.position1}</li>
          <li>{req.position2}</li>
          <li>{req.position3}</li>
          <li>{req.position4}</li>
          <li>{req.position5}</li>
          <li>{req.position6}</li>
          <li>{req.position7}</li>
          <li>{req.position8}</li>
          <li>{req.position9}</li>
          <li>{req.position10}</li>
          <li>{req.position11}</li>
          <li>{req.position12}</li>
          {req.position13 ? <li>{req.position13}</li> : null}
        </ul>
      </div>

    ))

    const adultsRequirementsGreen = this.adultsRequirementsGreen.map((req) => (

      <div key={req.id}>
        <h3>{req.id}</h3>
        <ul>
          <li>{req.position1}</li>
          <li>{req.position2}</li>
          <li>{req.position3}</li>
          <li>{req.position4}</li>
          <li>{req.position5}</li>
          <li>{req.position6}</li>
          <li>{req.position7}</li>
          <li>{req.position8}</li>
          <li>{req.position9}</li>
          {req.position10 ? <li>{req.position10}</li> : null}
          {req.position11 ? <li>{req.position11}</li> : null}
        </ul>
      </div>

    ))

    const adultsRequirementsBrown = this.adultsRequirementsBrown.map((req) => (

      <div key={req.id}>
        <h3>{req.id}</h3>
        <ul>
          <li>{req.position1}</li>
          <li>{req.position2}</li>
          <li>{req.position3}</li>
          <li>{req.position4}</li>
          <li>{req.position5}</li>
          <li>{req.position6}</li>
          <li>{req.position7}</li>
          <li>{req.position8}</li>
          <li>{req.position9}</li>
          <li>{req.position10}</li>
          {req.position11 ? <li>{req.position11}</li> : null}
        </ul>
      </div>

    ))

    const adultsRequirementsBlack = this.adultsRequirementsBlack.map((req) => (

      <div key={req.id}>
        <h3>{req.id}</h3>
        <ul>
          <li>{req.position1}</li>
          <li>{req.position2}</li>
          <li>{req.position3}</li>
          <li>{req.position4}</li>
          <li>{req.position5}</li>
          {req.position6 ? <li>{req.position6}</li> : null}
          {req.position7 ? <li>{req.position7}</li> : null}
          {req.position8 ? <li>{req.position8}</li> : null}
          {req.position9 ? <li>{req.position9}</li> : null}
          {req.position10 ? <li>{req.position10}</li> : null}
          {req.position11 ? <li>{req.position11}</li> : null}
        </ul>
      </div>

    ))

    return (
      <main className='egzamin'>
        <div style={this.state.opacity ? { opacity: '1' } : { opacity: '0' }} className="egzaminWrap">
          <div style={this.state.slide ? { right: '0' } : { right: '-150%' }} className='slide'>
            <h2>Egzamin</h2>
            <ul className="menu">
              <li><a onClick={this.handleClick} name='color' href='#' >Znaczenie koloru pasa</a><span></span></li>
              <li><a onClick={this.handleClick} name='kids' href='#'>Wymagania egzaminacyjne dla dzieci</a><span></span></li>
              <li><a onClick={this.handleClick} name='adults' href='#'>Wymagania egzaminacyjne dla dorosłych</a><span></span></li>
            </ul>
          </div>
          <div style={this.state.slide ? { left: '0' } : { left: '-150%' }} className='slide'>
            {belts}
          </div>
          <div style={this.state.slide ? { right: '0' } : { right: '-150%' }} className='kidsRequirementsOrange'>
            <h2>Wymagania egzaminacyjne dla dzieci</h2>
            {kidsRequirementsOrange}
          </div>
          <div style={this.state.slide ? { right: '0' } : { right: '-150%' }} className="kidsRequirementsBlue">
            {kidsRequirementsBlue}
          </div>
          <div style={this.state.slide ? { right: '0' } : { right: '-150%' }} className="adultsRequirementsOrange">
            <h2>Wymagania egzaminacyjne dla dorosłych</h2>
            {adultsRequirementsOrange}
          </div>
          <div style={this.state.slide ? { right: '0' } : { right: '-150%' }} className="adultsRequirementsBlue">
            {adultsRequirementsBlue}
          </div>
          <div style={this.state.slide ? { right: '0' } : { right: '-150%' }} className="adultsRequirementsYellow">
            {adultsRequirementsYellow}
          </div>
          <div style={this.state.slide ? { right: '0' } : { right: '-150%' }} className="adultsRequirementsGreen">
            {adultsRequirementsGreen}
          </div>
          <div style={this.state.slide ? { right: '0' } : { right: '-150%' }} className="adultsRequirementsBrown">
            {adultsRequirementsBrown}
          </div>
          <div style={this.state.slide ? { right: '0' } : { right: '-150%' }} className="adultsRequirementsBlack">
            {adultsRequirementsBlack}
          </div>
        </div>
      </main>
    )
  }
}

export default Egzamin