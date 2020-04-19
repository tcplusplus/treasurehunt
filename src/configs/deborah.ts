import { TreasureConfig } from ".";

const deborah: TreasureConfig = {
  name: "Alice",
  minDistance: 40,
  startPopup: "https://media1.giphy.com/media/dZd2D5Da1954I/giphy.gif",
  riddles: [
    {
      name: "rabbithole",
      answer: "5",
      question: "Hoeveel rabbit holes zie je in deze paal?",
      latitude: 50.7888027,
      longitude: 5.4893825,
      correctImage: "https://media.giphy.com/media/4BgQaxfQfeqys/giphy.gif",
      wrongImage: "https://media0.giphy.com/media/11eUEe8fAvgk48/200.webp",
      backgroundImage:
        "https://p7.hiclipart.com/preview/691/449/137/white-rabbit-the-mad-hatter-alice-s-adventures-in-wonderland-cheshire-cat-clip-art-alice-in-wonderland.jpg",
      closeImage: "https://tompi.ddns.net/images/rabbithole.png",
      hints: [
        {
          text: "Tel enkel de grote gaten in de betonnen paal",
          timeout: 600
        },
        {
          text: "Het antwoord is 5",
          timeout: 1800
        }
      ]
    },
    {
      name: "checkpoint",
      question: "Goed Bezig",
      checkpoint: true,
      answer: "",
      latitude: 50.7898893,
      longitude: 5.4871151,
      backgroundImage: "https://tompi.ddns.net/images/falling.png",
      correctImage:
        "https://media2.giphy.com/media/B1aOlXWCIUYjS/giphy.gif?cid=ecf05e4762a0ba18a024a532073bf1dcd83770b8207fd13c&rid=giphy.gif"
    },
    {
      name: "drinkme",
      answer: "vodka",
      question: "Wat zit er in dit flesje?",
      latitude: 50.7952121,
      longitude: 5.4858795,
      backgroundImage: "https://tompi.ddns.net/images/falling.png",
      closeImage: "https://tompi.ddns.net/images/door.png",
      correctImage:
        "https://1.bp.blogspot.com/-kaDgcxBGmM4/TtL3_B-FjWI/AAAAAAAAAMQ/RZvlwq1JPcI/s1600/alice+in+wonderland+drink+me.bmp",
      wrongImage: "https://media0.giphy.com/media/11eUEe8fAvgk48/200.webp",
      hints: [
        {
          text: "Kijk onder hout",
          timeout: 600
        },
        {
          text: "Het antwoord begint met een v",
          timeout: 900
        },
        {
          text: "Het antwoord is vodka",
          timeout: 1800
        }
      ]
    },
    {
      name: "maretak",
      question:
        "De sleutel voor een goede kus vind je in de bomen. Hoe heten deze bollen? ",
      answer: "maretak",
      latitude: 50.7988265,
      longitude: 5.4884694,
      backgroundImage: "https://tompi.ddns.net/images/door.png",
      closeImage: "https://tompi.ddns.net/images/door.png",
      correctImage:
        "https://retrobadge.co.uk/wp-content/uploads/13533-alice-in-wonderland-the-key-badge-1.jpg",
      wrongImage: "https://media0.giphy.com/media/11eUEe8fAvgk48/200.webp",
      hints: [
        {
          text: "Kijk in hoge bomen rechts van je.",
          timeout: 600
        },
        {
          text: "Het antwoord is maratak",
          timeout: 1800
        }
      ]
    },
    {
      name: "checkpoint2",
      question: "",
      answer: "",
      checkpoint: true,
      latitude: 50.7931346,
      longitude: 5.4933057,
      backgroundImage: "https://tompi.ddns.net/images/door.png",
      closeImage: "https://tompi.ddns.net/images/door.png",
      correctImage: "https://media2.giphy.com/media/obfOq7X2mcECI/giphy.gif"
    },
    {
      name: "eetme",
      question: "Van welke vrucht in de rode cirkel ga je terug groeien? ",
      answer: "aardbei",
      latitude: 50.7935008,
      longitude: 5.498245,
      backgroundImage: "https://tompi.ddns.net/images/door.png",
      closeImage:
        "https://vignette.wikia.nocookie.net/disney/images/7/75/Profile_-_Alice.jpeg/revision/latest?cb=20190312054522",
      correctImage:
        "https://thumbs.gfycat.com/CoarseForcefulGlobefish-max-1mb.gif",
      wrongImage: "https://media0.giphy.com/media/11eUEe8fAvgk48/200.webp",
      hints: [
        {
          text:
            "Het is klein, zoet, lekker, rood met een beetje groen en gespikkeld",
          timeout: 600
        },
        {
          text: "Het antwoord is aardbei",
          timeout: 1800
        }
      ]
    },
    {
      name: "kerkhof",
      question: "Vandaag is jouw niet-verjaardag. Wie is geboren op 5-1-1931?",
      answer: "rene fransen",
      latitude: 50.7939684,
      longitude: 5.502078,
      backgroundImage:
        "https://vignette.wikia.nocookie.net/disney/images/7/75/Profile_-_Alice.jpeg/revision/latest?cb=20190312054522",
      closeImage: "https://tompi.ddns.net/images/teaparty.png",
      correctImage: "https://media3.giphy.com/media/PjplWH49v1FS0/giphy.gif",
      wrongImage: "https://media0.giphy.com/media/11eUEe8fAvgk48/200.webp",
      hints: [
        {
          text: "Zoek de juiste grafsteen aan de linkerkant.",
          timeout: 600
        },
        {
          text: "Het antwoord is rene fransen",
          timeout: 1800
        }
      ]
    },
    {
      name: "kasteel",
      answer: "flamingo",
      question:
        "Welk dier gebruikt Alice om cricket te spelen met de koningin?",
      latitude: 50.7906227,
      longitude: 5.4965929,
      backgroundImage: "https://tompi.ddns.net/images/cat.png",
      closeImage:
        "https://www.kindpng.com/picc/m/115-1151276_alice-in-wonderland-queen-of-hearts-king-of.png",
      wrongImage: "https://media0.giphy.com/media/11eUEe8fAvgk48/200.webp",
      correctImage:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcTHoOOSPOQOP3OXXVSkGHBDEKnhQd90ihR5ZKh0I6B48MWnqu0K&usqp=CAU",
      hints: [
        {
          text: "Een roze vogel.",
          timeout: 600
        },
        {
          text: "Het antwoord is flamingo",
          timeout: 1800
        }
      ]
    },
    {
      name: "checkpoint3",
      question: "",
      answer: "",
      latitude: 50.7871996,
      longitude: 5.5002692,
      checkpoint: true,
      backgroundImage: "https://tompi.ddns.net/images/coart.png",
      correctImage: "https://media0.giphy.com/media/kz64C06r8GDBu/giphy.gif"
    },
    {
      name: "rechtzaak",
      question: "Welke smaak hebben deze snoepjes? ",
      answer: "anijs",
      latitude: 50.7834681,
      longitude: 5.5000428,
      backgroundImage: "https://tompi.ddns.net/images/coart.png",
      correctImage:
        "https://i.pinimg.com/originals/03/de/5f/03de5f9276b62b0570c70ee5e908446e.gif",
      wrongImage: "https://media0.giphy.com/media/11eUEe8fAvgk48/200.webp",
      hints: [
        {
          text: "Denk aan de paal uit het eerste raadsel.",
          timeout: 600
        },
        {
          text: "De smaak komt ook terug in venkel.",
          timeout: 1200
        },
        {
          text: "Het antwoord is anijs",
          timeout: 1800
        }
      ]
    },
    {
      name: "droom",
      answer: "dinah",
      question: "Vind de puzzel",
      latitude: 50.7878899,
      longitude: 5.4903895,
      backgroundImage: "https://tompi.ddns.net/images/run.png",
      wrongImage: "https://media0.giphy.com/media/11eUEe8fAvgk48/200.webp",
      closeImage:
        "https://i.pinimg.com/originals/62/6a/2d/626a2d65a972f57b082ac9cbfef86871.jpg",
      correctImage: "https://data.whicdn.com/images/85904165/original.jpg",
      hints: [
        {
          text:
            "<img src='https://vignette.wikia.nocookie.net/aliceinwonderland/images/2/25/Dinah.jpg/revision/latest/scale-to-width-down/340?cb=20100313211328' width='100%'>",
          timeout: 600
        },
        {
          text: "Het antwoord is dinah",
          timeout: 1800
        }
      ]
    },
    {
      name: "einde",
      answer: "",
      question: "",
      latitude: 50.7866165,
      longitude: 5.4855863,
      backgroundImage:
        "https://www.vpro.nl/.imaging/stk/vpronl/textimage-above/dam/cinema/12/53/13/image_12531386.jpeg/jcr:content/image_12531386.jpeg",
      hints: [
        {
          text: "Je moet niet op het pad blijven.",
          timeout: 900
        }
      ]
    }
  ]
};

export default deborah;
