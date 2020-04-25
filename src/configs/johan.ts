import { TreasureConfig } from ".";

const johan: TreasureConfig = {
  name: "Luke",
  minDistance: 40,
  startPopup: "https://media.giphy.com/media/l1uguGf2RVIsTXNDO/giphy.gif",
  introAudio: "https://tompi.ddns.net/audio/starwars.mp3",
  riddles: [
    {
      name: "luke",
      question:
        "Neem een plaats die je hier kunt zien, verwijder 1 letter en voeg een nieuwe toe. Welk starwars personage krijg je?",
      answer: "luke",
      latitude: 50.7721712,
      longitude: 5.4631735,
      correctImage:
        "https://i.pinimg.com/originals/b5/e7/ae/b5e7aec45dbcef617ef19d3b919f34e4.jpg",
      wrongImage: "https://media.giphy.com/media/8iFzknXw22iXu/giphy.gif",
      backgroundImage: "https://tompi.ddns.net/images/tatoine.png",
      closeImage:
        "https://i.pinimg.com/originals/a7/06/75/a70675c60f508ea0fe1668b4178a316d.jpg",
      hints: [
        {
          text: "Het gaat over een stad ongeveer 20km van hier",
          timeout: 300
        },
        {
          text: "Het antwoord is Luke",
          timeout: 900
        }
      ]
    },
    {
      name: "obione",
      question:
        "Hier krijgt je je lightsaber, maar welk wapen gebruiken de atleten die hier regelmatig samenkomen?",
      answer: "tennisracket",
      latitude: 50.7681792,
      longitude: 5.4606466,
      backgroundImage:
        "https://i.pinimg.com/originals/a7/06/75/a70675c60f508ea0fe1668b4178a316d.jpg",
      closeImage: "https://tompi.ddns.net/images/obione.png",
      wrongImage: "https://media.giphy.com/media/8iFzknXw22iXu/giphy.gif",
      correctImage: "https://media.giphy.com/media/jaJZTmLL4PFQY/giphy.gif",
      hints: [
        {
          text: "12 letters",
          timeout: 300
        },
        {
          text: "Het antwoord is Tennisracket",
          timeout: 900
        }
      ]
    },
    {
      name: "aanval",
      question:
        "Wat zijn de eerste 3 woorden die op elke grafsteen terugkomen?",
      answer: "hier ligt begraven",
      latitude: 50.7682697,
      longitude: 5.4568298,
      backgroundImage: "https://tompi.ddns.net/images/obione.png",
      closeImage: "https://tompi.ddns.net/images/tatoine.png",
      correctImage: "https://media3.giphy.com/media/PjWra8W264Ek8/source.gif",
      wrongImage: "https://media.giphy.com/media/8iFzknXw22iXu/giphy.gif",
      hints: [
        {
          text: ".... .... begraven",
          timeout: 300
        },
        {
          text: "hier ... begraven",
          timeout: 900
        },
        {
          text: "hier ligt begraven",
          timeout: 900
        }
      ]
    },
    {
      name: "solo",
      question:
        "Bij Han Solo is een schoefje los, maar hoeveel schroeven zijn los aan deze bank?",
      answer: "1",
      latitude: 50.7655806,
      longitude: 5.4505669,
      backgroundImage: "https://tompi.ddns.net/images/tatoine.png",
      closeAudio: "https://tompi.ddns.net/audio/bar.mp3",
      closeImage:
        "https://i.pinimg.com/originals/98/e6/5e/98e65e2d475f38012242372a80df16ac.jpg",
      correctImage: "https://media.giphy.com/media/rHR8qP1mC5V3G/giphy.gif",
      wrongImage: "https://media.giphy.com/media/8iFzknXw22iXu/giphy.gif",
      hints: [
        {
          text: "Kijk bovenop de bank",
          timeout: 300
        },
        {
          text: "Het antwoord is 1",
          timeout: 900
        }
      ]
    },
    {
      name: "Planeet",
      question: "Vul de lanceercode van de deathstar aan Y16....",
      answer: "2139",
      latitude: 50.7648208,
      longitude: 5.4432884,
      backgroundImage:
        "https://i.pinimg.com/originals/c9/52/be/c952be8caf385b2a951872d3704f1f19.jpg",
      closeImage:
        "https://i.pinimg.com/564x/39/1e/18/391e18a819289cb0fdf8d856ccb2d0fe.jpg",
      correctImage:
        "https://media.giphy.com/media/3o7abwbzKeaRksvVaE/giphy.gif",
      wrongImage: "https://media.giphy.com/media/8iFzknXw22iXu/giphy.gif",
      hints: [
        {
          text: "Kijk op ieder paaltje",
          timeout: 300
        },
        {
          text: "Het antwoord is 2139",
          timeout: 900
        }
      ]
    },
    {
      name: "Stormtrooper",
      question: "Hoeveel paviljoenen van de stormtroopers zie je hier?",
      answer: "17",
      latitude: 50.7678936,
      longitude: 5.4488377,
      backgroundImage:
        "https://c8.alamy.com/comp/T2XCRH/millennium-falcon-star-wars-episode-iv-a-new-hope-1977-T2XCRH.jpg",
      closeImage:
        "https://media.anakinworld.com/uploads/entries/page_maxi/planete-fondor-1.jpg",
      correctImage: "https://media.giphy.com/media/DVNN2UhMENXfW/giphy.gif",
      wrongImage: "https://media.giphy.com/media/8iFzknXw22iXu/giphy.gif",
      hints: [
        {
          text: "De storm troopers leven in vogelnestjes",
          timeout: 300
        },
        {
          text: "Het antwoord is 17",
          timeout: 900
        }
      ]
    },
    {
      name: "Darth",
      question:
        "Dit standbeeld werd opgedragen aan Obi-One kenobi, in welk jaar overleed hij?",
      answer: "1995",
      latitude: 50.770981,
      longitude: 5.4575397,
      backgroundImage:
        "https://media.anakinworld.com/uploads/entries/page_maxi/planete-fondor-1.jpg",
      closeImage:
        "https://i.pinimg.com/originals/5c/55/f6/5c55f6b866522061efa53877f605ca4e.jpg",
      correctImage: "https://i.makeagif.com/media/11-08-2015/lxPrFB.gif",
      wrongImage: "https://media.giphy.com/media/8iFzknXw22iXu/giphy.gif",
      hints: [
        {
          text: "Kijk op het standbeeld",
          timeout: 300
        },
        {
          text: "Het antwoord is 1995",
          timeout: 900
        }
      ]
    },
    {
      name: "Bib",
      question:
        "We komen aan bij de rebellen, een wijs man zegt: 'In onze jeugd zijn alle boeken toekomstvoorspellingen', wie zei dit?",
      answer: "graham greene",
      latitude: 50.7759563,
      longitude: 5.4616704,
      backgroundImage:
        "https://media.anakinworld.com/uploads/entries/page_maxi/planete-fondor-1.jpg",
      closeImage:
        "https://images.squarespace-cdn.com/content/v1/59331486440243a0123d00f3/1496783552472-43QN4ILOLVGN1EA5251P/ke17ZwdGBToddI8pDm48kCgumAwgJyhcWikc-V08vS9Zw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpx0MQbkPdSU1P8N6315VQ7_uK0ZHSZRW6IO4o-GIX-NH8-sIWx9YrSXoYoihQz_Y6k/image-asset.jpeg",
      correctImage:
        "https://starwarsblog.starwars.com/wp-content/uploads/2015/01/Header1.jpeg",
      wrongImage: "https://media.giphy.com/media/8iFzknXw22iXu/giphy.gif",
      hints: [
        {
          text: "Het is nogal doorzichtig.",
          timeout: 300
        },
        {
          text: "Het antwoord is Graham Greene",
          timeout: 900
        }
      ]
    },
    {
      name: "Aanval",
      question:
        "We vallen de deathstar aan met evenveel schepen als dat er liter water door de jeker stroomt, per seconde. Hoeveel zijn er dit?",
      answer: "500",
      latitude: 50.7774582,
      longitude: 5.4660608,
      backgroundImage:
        "https://vignette.wikia.nocookie.net/starwars/images/1/14/X-Wings.jpg/revision/latest/scale-to-width-down/340?cb=20070405194803&path-prefix=nl",
      closeImage:
        "https://i.pinimg.com/736x/ec/84/38/ec84385ac22d8168abd9d53204ff8b63.jpg",
      correctImage: "https://media.giphy.com/media/kyWH22kp3U9Dq/giphy.gif",
      wrongImage: "https://media.giphy.com/media/8iFzknXw22iXu/giphy.gif",
      hints: [
        {
          text: "Lees de bordjes met Tongerse weetjes.",
          timeout: 300
        },
        {
          text: "Het antwoord is 500",
          timeout: 900
        }
      ]
    },
    {
      name: "Boem",
      question:
        "Luke moet op het juiste moment een raket afvuren. Het aantal km dat hij moet vliegen is gelijk aan de som van de jaartallen waarin Tongeren werd aangevallen.",
      answer: "3721",
      latitude: 50.779341,
      longitude: 5.4715064,
      backgroundImage:
        "https://vignette.wikia.nocookie.net/starwars/images/1/14/X-Wings.jpg/revision/latest/scale-to-width-down/340?cb=20070405194803&path-prefix=nl",
      closeImage:
        "https://i.pinimg.com/564x/3d/05/37/3d0537afb1d315442833dccc7343bd7c.jpg",
      correctImage: "https://media0.giphy.com/media/EPPvrXLVm6Axy/source.gif",
      wrongImage: "https://media.giphy.com/media/8iFzknXw22iXu/giphy.gif",
      hints: [
        {
          text: "Je moet dit hogerop zoeken",
          timeout: 300
        },
        {
          text: "Het antwoord is 3721",
          timeout: 900
        }
      ]
    },
    {
      name: "Einde",
      question: "",
      answer: "",
      latitude: 50.7782754,
      longitude: 5.4752965,
      backgroundImage: "https://tompi.ddns.net/images/starwarseinde.png",
      hints: [
        {
          text:
            "<img src='https://tompi.ddns.net/images/tipeinde.jpg' width='100%'>",
          timeout: 900
        }
      ]
    }
  ]
};

export default johan;
