const myAudio = new Audio('Portal.mp3')

const app = new Vue({
  el: '#ID',
  data: {
    username: 'Maiiitre',
    password: '',
    passwordCorpus: '',
    passwordListe: '',
    passwordOK: ['eon7', 'missd3'],
    passwordCorpusOK: ['eon3', 'missd2', 'lk774'],
    // comme deja mentionne, il va y avoir un probleme avec WHS-R1-134 qui devrait etre en minuscules
    passwordListeOK: ['eon1', 'missd2', 'compte a rebours', 'compte à rebours', '6651732', 'melusia', 'antenna research', 'bomber', 'enfer', 'WHS-R1-134', 'no life', 'romeo', 'roméo', 'juliette'],
    currentPage: 'accueil',
    compteARebours: 'none',
    tempsTotal: DEFAULT_DURATION,
    heures: 112,
    minutes: '',
    secondes: '',
    timer: true,
  },
  created: function() {
    if (window.localStorage.getItem(TIME_LEFT_KEY)) {
      console.log('poui?')
      this.tempsTotal = window.localStorage.getItem(TIME_LEFT_KEY)
      this.countDown();
    }
  },
  computed: {
    value: function() {
      if (this.passwordOK.indexOf(this.password.toLowerCase()) >= 0) {
        return value = true;
      } else {
        return value = false;
      }
    },
  },
  methods: {
    mdp1: function() {
      if (this.passwordOK.indexOf(this.password.toLowerCase()) >= 0) {
        console.log('correct password');
        this.currentPage = 'menu';
        console.log('correct');
      } else {
        console.log('mauvais mdp');
      }
    },
    countDown: function() {
      // commentaire : utiliser une variable plus clair du genre "timerNotStarted" ou "timerStarted" et inverser la logique.
      if (this.timer == true) {
        // commentaire : choisi une langue, soit anglais ou francais, (je conseille anglais perso) et utilise la tout le temps.
        //               Dans ce cas la, c'est dur de dire la différence entre "timer" et "compteARebours" ?
        //               Aussi, dans ce cas la, pourquoi ne pas utilise "compteARebours" en booleen?
        //               Aussi aussi : je pense que "timer" et "compteARebours" pourraient être une seule variable
        this.compteARebours = 'display';

        if (!window.localStorage.getItem(TIME_LEFT_KEY)) {
          this.tempsTotal = parseInt(window.localStorage.getItem(DURATION_KEY)) || DEFAULT_DURATION;
        }

        setInterval(() => {
          this.tempsTotal--;
          window.localStorage.setItem(TIME_LEFT_KEY, this.tempsTotal);
        }, 1000);
        console.log('timer est true');
        this.timer = false;
      } else {
        console.log('timer est false');
      }
    },
    corpus: function() {
        this.currentPage = 'accesCorpus';
    },
    liste: function() {
        this.currentPage = 'accesListe';
    },
    backAccueil: function() {
      this.currentPage = 'accueil';
      this.password = '';
    },
    mdp2: function() {
      if (this.passwordCorpusOK.indexOf(this.passwordCorpus.toLowerCase()) >= 0) {
        console.log('correct password');
        this.currentPage = 'pageCorpus';
      } else {
        this.currentPage = 'dechargeElec';
      }
    },
    mdp3: function() {
      if (this.passwordListeOK.indexOf(this.passwordListe.toLowerCase()) >= 0) {
        console.log('correct password');
        this.currentPage = 'pageListe';
      } else {
        this.currentPage = 'dechargeElec';
      }
    },
    backMenu: function() {
      this.currentPage = 'menu';
    },
    playSound: function() {
       myAudio.play();
       console.log('je fonctionne');
    },
    getSkullCount: function() {
      const firstSkullDuration = parseInt(window.localStorage.getItem(FIRST_SKULL_KEY)) || DEFAULT_FIRST_SKULL;
      const otherSkullsDuration = parseInt(window.localStorage.getItem(OTHER_SKULLS_KEY)) || DEFAULT_OTHER_SKULLS;
      const gameDuration = parseInt(window.localStorage.getItem(DURATION_KEY)) || DEFAULT_DURATION;
      const elapsedTime = gameDuration - this.tempsTotal;
      return Math.floor((elapsedTime - firstSkullDuration) / otherSkullsDuration) + 1 ;
    }
  },
  watch: {
    tempsTotal: function() {
      this.heures = Math.floor(this.tempsTotal / 3600);
      this.minutes = Math.floor((this.tempsTotal - (this.heures * 3600)) / 60);
      this.secondes = Math.floor((this.tempsTotal - (this.heures * 3600) - (this.minutes * 60)));
    }
  },
})
