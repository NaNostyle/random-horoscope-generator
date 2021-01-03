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

  luckyAdjectives: ["beaucoup", "énormément", "incroyablement", "très"],

  unluckyAdjectives: ["très peu", "pas du tout", "peu"],

  luckyDayAdjectives: ["excellente", "merveilleuse", "inoubliable"],

  unluckyDayAdjectives: ["catastrophique", "très mauvaise", "à vite oublier"],

  luckyLoveAction: [
    "sortir dans la rue, vous rencontrerez l'âme soeur à coup sur",
    "vous jeter dans les bras du premier inconnu, c'est le bon",
  ],
  luckyQuarantineAction: [
    "sortir de chez vous sans masque, vous n'attraperez pas le coronavirus",
    "embrasser votre mari même si il a le coronavirus, vous ne l'attraperez pas",
  ],
  luckyworkAction: [
    "postuler dans l'entreprise de vos rêves",
    "postuler en tant que développeur Full Stack chez Apple",
  ],
  luckyMoneyAction: ["jouer au loto", "parier sur un cheval"],
  luckyHealthAction: [
    "vous levez si vous êtes hémiplégique",
    "allumer la radio si vous êtes sourd",
    "allumer la TV si vous êtes aveugle",
  ],

  unluckyLoveAction: [
    "surveiller votre mari si vous en avez un",
    "laisser tomber si vous comptiez trouver le grand amour",
  ],
  unluckyQuarantineAction: [
    "rester chez vous sous peine d'attrapper le coronavirus",
    "mettre 2 masques FFP2 au cas ou vous sortiriez de chez vous",
  ],
  unluckyworkAction: [
    "vous inscrire chez Pôle Emploi",
    "revoir à la baisse vos objectifs de carrière",
  ],
  unluckyMoneyAction: ["vendre votre voiture", "vendre votre maison"],
  unluckyHealthAction: [
    "vous acheter un fauteil roulant vous allez en avoir besoin",
    "prendre rendez-vous chez le médecin",
  ],

  luck() {
    const luck = [true, false];
    return luck[Math.floor(Math.random() * luck.length)];
  },

  adjectives() {
    if (this.luck()) {
      const chanceAdjective = this.luckyAdjectives[
        Math.floor(Math.random() * this.luckyAdjectives.length)
      ];
      const dayAdjective = this.luckyAdjectives[
        Math.floor(Math.random() * this.luckyDayAdjectives.length)
      ];
    } else {
      const chanceAdjective = this.unluckyAdjectives[
        Math.floor(Math.random() * this.unluckyAdjectives.length)
      ];
      const dayAdjective = this.unLuckyDayAdjectives[
        Math.floor(Math.random() * this.unluckyAdjectives.length)
      ];
    }
  },

  randomSentence() {
    if (this.luck()) {
      console.log(
        `Vous êtes du signe ${
          this.zodiacSign[Math.floor(Math.random() * this.zodiacSign.length)]
        }. Sur le thème ${
          this.themes[Math.floor(Math.random() * this.themes.length)]
        } et`
      );
    } else {
      console.log("unlucky");
    }
  },
};

horoscope.randomSentence();
