const sentence =
  "Vous êtes du signe [signe]. Sur le theme [préfixe(de l', de la, du)] [theme] vous aurez [chanceAdjective] de chance aujourd'hui. Vous devriez [action] car vous allez passer une journée [dayAjective] j";

const horoscope = {
  zodiacSign: [
    "Capricorne",
    "Sagittaire",
    "Scorpion",
    "Balance",
    "Vierge",
    "Lion",
    "Cancer",
    "Gémeaux",
    "Taureau",
    "Bélier",
    "Poissons",
    "Verseau",
  ],

  themes: ["Amour", "Quarantaine", "Travail", "Argent", "Santé"],

  adjectives: {
    lucky: {
      luckyAdjectives: ["beaucoup", "énormément", "incroyablement", "très"],
    },
    unlucky: {
      unluckyDayAdjectives: [
        "catastrophique",
        "très mauvaise",
        "à vite oublier",
      ],
    },
  },

  theme: {
    love: {
      lucky: {
        actions: [
          "sortir dans la rue, vous rencontrerez l'âme soeur à coup sur",
          "vous jeter dans les bras du premier inconnu, c'est le bon",
        ],
      },
      unlucky: {
        actions: [
          "surveiller votre mari si vous en avez un",
          "laisser tomber si vous comptiez trouver le grand amour",
        ],
      },
    },
    quarantine: {
      lucky: {
        actions: [
          "sortir de chez vous sans masque, vous n'attraperez pas le coronavirus",
          "embrasser votre mari même si il a le coronavirus, vous ne l'attraperez pas",
        ],
      },
      unlucky: {
        actions: [
          "rester chez vous sous peine d'attrapper le coronavirus",
          "mettre 2 masques FFP2 au cas ou vous sortiriez de chez vous",
        ],
      },
    },
    work: {
      lucky: {
        actions: [
          "postuler dans l'entreprise de vos rêves",
          "postuler en tant que développeur Full Stack chez Apple",
        ],
      },
      unlucky: {
        actions: [
          "vous inscrire chez Pôle Emploi",
          "revoir à la baisse vos objectifs de carrière",
        ],
      },
    },

    money: {
      lucky: {
        actions: ["jouer au loto", "parier sur un cheval"],
      },
      unlucky: {
        actions: ["vendre votre voiture", "vendre votre maison"],
      },
    },

    health: {
      lucky: {
        actions: [
          "vous levez si vous êtes hémiplégique",
          "allumer la radio si vous êtes sourd",
          "allumer la TV si vous êtes aveugle",
        ],
      },
      unlucky: {
        actions: [
          "vous acheter un fauteil roulant vous allez en avoir besoin",
          "prendre rendez-vous chez le médecin",
        ],
      },
    },
  },

  luck() {
    const luck = [true, false];
    return luck[Math.floor(Math.random() * luck.length)];
  },

  adjectives() {
    if (this.luck()) {
      this.chanceAdjective = this.luckyAdjectives[
        Math.floor(Math.random() * this.luckyAdjectives.length)
      ];
      this.dayAdjective = this.luckyAdjectives[
        Math.floor(Math.random() * this.luckyDayAdjectives.length)
      ];
    } else {
      this.chanceAdjective = this.unluckyAdjectives[
        Math.floor(Math.random() * this.unluckyAdjectives.length)
      ];
      this.dayAdjective = this.unluckyDayAdjectives[
        Math.floor(Math.random() * this.unluckyAdjectives.length)
      ];
    }
  },

  randomSentence() {
    this.adjectives();
    if (this.luck()) {
      console.log(
        `Vous êtes du signe ${
          this.zodiacSign[Math.floor(Math.random() * this.zodiacSign.length)]
        }. Sur le thème ${
          this.themes[Math.floor(Math.random() * this.themes.length)]
        } et ${this.chanceAdjective}`
      );
    } else {
      console.log("unlucky");
    }
  },
};

horoscope.randomSentence();
