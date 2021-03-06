const horoscope = {
  zodiacSign: "",
  theme: "",
  luckAdjective: "",
  dayAdjective: "",
  action: "",

  zodiacSigns: [
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

  luckAdjectives: {
    lucky: {
      adjectives: ["beaucoup", "énormément", "incroyablement"],
    },
    unlucky: {
      adjectives: ["pas du tout", "absolument pas", "très peu"],
    },
  },

  dayAdjectives: {
    lucky: {
      adjectives: ["merveilleuse", "incroyable", "de rêve", "formidable"],
    },
    unlucky: {
      adjectives: [
        "catastrophique",
        "très mauvaise",
        "à vite oublier",
        "pourrie",
      ],
    },
  },

  themeActions: {
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

  isLucky() {
    luck = [true, false];
    return luck[Math.floor(luck.length * Math.random())];
  },
  randomLuckyAction(theme, luck) {
    return (this.action = this.themeActions[theme][luck].actions[
      Math.floor(Math.random() * this.themeActions[theme][luck].actions.length)
    ]);
  },

  random(element, elements, luck) {
    return (element =
      elements[luck].adjectives[
        Math.floor(Math.random() * elements[luck].adjectives.length)
      ]);
  },
  randomLuckAdjective(luck) {
    return this.random(this.luckAdjective, this.luckAdjectives, luck);
  },
  randomDayAdjective(luck) {
    return this.random(this.dayAdjective, this.dayAdjectives, luck);
  },

  randomWords() {
    this.zodiacSign = this.zodiacSigns[
      Math.floor(Math.random() * this.zodiacSigns.length)
    ];
    this.theme = this.themes[Math.floor(Math.random() * this.themes.length)];
    switch (this.isLucky()) {
      case true:
        this.luckAdjective = this.randomLuckAdjective("lucky");
        this.dayAdjective = this.randomDayAdjective("lucky");
        switch (this.theme) {
          case "Amour":
            this.action = this.randomLuckyAction("love", "lucky");
            break;
          case "Quarantaine":
            this.action = this.randomLuckyAction("quarantine", "lucky");
            break;
          case "Travail":
            this.action = this.randomLuckyAction("work", "lucky");
            break;
          case "Argent":
            this.action = this.randomLuckyAction("money", "lucky");
            break;
          case "Santé":
            this.action = this.randomLuckyAction("health", "lucky");
            break;
          default:
            return "this is an unexpected action";
        }
        break;
      case false:
        this.luckAdjective = this.randomLuckAdjective("unlucky");
        this.dayAdjective = this.randomDayAdjective("unlucky");
        switch (this.theme) {
          case "Amour":
            this.action = this.randomLuckyAction("love", "unlucky");
            break;
          case "Quarantaine":
            this.action = this.randomLuckyAction("quarantine", "unlucky");
            break;
          case "Travail":
            this.action = this.randomLuckyAction("work", "unlucky");
            break;
          case "Argent":
            this.action = this.randomLuckyAction("money", "unlucky");
            break;
          case "Santé":
            this.action = this.randomLuckyAction("health", "unlucky");
            break;
          default:
            return "this is an unexpected action";
        }
      default:
        return "this is an unexpected action";
    }
  },

  sentence() {
    this.randomWords();
    console.log(
      `Vous êtes du signe ${this.zodiacSign}. Sur le theme "${this.theme}" vous aurez ${this.luckAdjective} de chance aujourd'hui. Vous devriez ${this.action} car vous allez passer une journée ${this.dayAdjective}`
    );
  },
};
horoscope.sentence();
