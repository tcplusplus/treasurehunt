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
      closeImage: "https://tompi.ddns.net/images/rabbithole.png"
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
      wrongImage: "https://media0.giphy.com/media/11eUEe8fAvgk48/200.webp"
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
      wrongImage: "https://media0.giphy.com/media/11eUEe8fAvgk48/200.webp"
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
      wrongImage: "https://media0.giphy.com/media/11eUEe8fAvgk48/200.webp"
    },
    {
      name: "kerkhof",
      question:
        "Vandaag is jouw niet-verjaardag. Wie is geboren op 5-1-1931?",
      answer: "rene fransen",
      latitude: 50.7939684,
      longitude: 5.502078,
      backgroundImage:
        "https://vignette.wikia.nocookie.net/disney/images/7/75/Profile_-_Alice.jpeg/revision/latest?cb=20190312054522",
      closeImage: "https://tompi.ddns.net/images/teaparty.png",
      correctImage: "https://media3.giphy.com/media/PjplWH49v1FS0/giphy.gif",
      wrongImage: "https://media0.giphy.com/media/11eUEe8fAvgk48/200.webp"
    },
    {
      name: "kasteel",
      answer: "flamingo",
      question: "Welk dier gebruikt Alice om cricket te spelen met de koningin?",
      latitude: 50.7906227,
      longitude: 5.4965929,
      backgroundImage: "https://tompi.ddns.net/images/cat.png",
      closeImage:
        "https://www.kindpng.com/picc/m/115-1151276_alice-in-wonderland-queen-of-hearts-king-of.png",
      wrongImage: "https://media0.giphy.com/media/11eUEe8fAvgk48/200.webp",
      correctImage:
        "https://lh3.googleusercontent.com/proxy/RztfTSiOhm1jrwCASLHNoaideiy7OyjcYIblRtGZvvFdkATHGduFH8pOdOvfv0bggF2kSIlCefhecDYw8nXJtZBQ6f9oSiFrCoo8rZH6jVTh00pdpw"
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
      wrongImage: "https://media0.giphy.com/media/11eUEe8fAvgk48/200.webp"
    },
    {
      name: "droom",
      answer: "test",
      question: "Een vraag om haar wakker te maken?",
      latitude: 50.7878899,
      longitude: 5.4903895,
      backgroundImage: "https://tompi.ddns.net/images/run.png",
      wrongImage: "https://media0.giphy.com/media/11eUEe8fAvgk48/200.webp",
      closeImage:
        "https://i.pinimg.com/originals/62/6a/2d/626a2d65a972f57b082ac9cbfef86871.jpg",
      correctImage: "https://data.whicdn.com/images/85904165/original.jpg"
    },
    {
      name: "einde",
      answer: "",
      question: "",
      latitude: 50.7866165,
      longitude: 5.4855863,
      backgroundImage:
        "https://www.vpro.nl/.imaging/stk/vpronl/textimage-above/dam/cinema/12/53/13/image_12531386.jpeg/jcr:content/image_12531386.jpeg"
    }
  ]
};

export default deborah;
