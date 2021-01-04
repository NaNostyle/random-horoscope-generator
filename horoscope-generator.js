const sentence =
  "Vous êtes du signe [signe]. Sur le theme [préfixe(de l', de la, du)] [theme] vous aurez [chanceAdjective] de chance aujourd'hui. Vous devriez [action] car vous allez passer une journée [dayAjective] j";

const horoscope = {
  zodiacSign: "",
  theme: "",
  adjective: "",
  action: "",
  test: "",

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

  chanceAdjectives: {
    lucky: {
      adjectives: ["beaucoup", "énormément", "incroyablement", "très"],
    },
    unlucky: {
      adjectives: ["catastrophique", "très mauvaise", "à vite oublier"],
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
    const luck = [true, false];
    return luck[Math.floor(Math.random() * luck.length)];
  },
  randomZodicSign() {
    return this.zodiacSigns.Math.floor(Math.random() * this.zodiacSigns.length);
  },
  randomLuckyAction(theme, luck) {
    return (this.action = this.themeActions[theme][luck].actions.Math.floor(
      Math.random() * this.themeActions[theme][luck].actions.length
    ));
  },

  randomAdjective(luck) {
    return (this.adjective = this.chanceAdjectives[luck].adjectives.Math.floor(
      Math.random() * this.chanceAdjectives[luck].adjectives.length
    ));
  },

  randomWords() {
    this.zodiacSign = this.zodiacSigns[
      Math.floor(Math.random() * this.zodiacSigns.length)
    ];
    this.theme = this.themes[Math.floor(Math.random() * this.themes.length)];
    switch (this.luck()) {
      case true:
        this.adjective = this.randomAdjective("lucky");
        switch (this.theme) {
          case "Amour":
            this.action = this.randomLuckyAction(love);
            break;
          case "Quarantaine":
            this.action = this.randomLuckyAction(quarantine);
            break;
          case "Travail":
            this.action = this.randomLuckyAction(work);
            break;
          case "Argent":
            this.action = this.randomLuckyAction(money);
            break;
          case "Santé":
            this.action = this.randomLuckyAction(health);
            break;
          default:
            return "this is an unexpected action";
        }
      case false:
        this.adjective = randomAdjective(unluck);
        switch (this.theme) {
          case "Amour":
            this.action = this.randomUnluckyAction(love);
            break;
          case "Quarantaine":
            this.action = this.randomUnluckyAction(quarantine);
            break;
          case "Travail":
            this.action = this.randomUnluckyAction(work);
            break;
          case "Argent":
            this.action = this.randomUnluckyAction(money);
            break;
          case "Santé":
            this.action = this.randomUnluckyAction(health);
            break;
          default:
            return "this is an unexpected action";
        }
      default:
        return "this is an unexpected action";
    }
  },
  clg() {
    console.log(this.adjective);
  },
};

horoscope.randomWords();
horoscope.clg();
