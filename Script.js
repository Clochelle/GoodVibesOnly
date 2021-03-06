const app = new Vue({
  el: '#ID',
  data: {
    password: '',
    passwordCorpus: '',
    passwordListe: '',
    passwordOK: ['eon7', 'missd3'],
    passwordCorpusOK: ['eon3', 'missd2', 'lk774'],
    passwordListeOK: ['eon1', 'missd2', 'compte a rebours', 'compte à rebours', '6651732', 'melusia', 'antenna research', 'bomber', 'enfer', 'whs-r1-134', 'no life', 'romeo', 'roméo', 'juliette'],
    currentPage: 'accueil',
    tempsTotal: DEFAULT_DURATION,
    heures: '',
    minutes: '',
    secondes: '',
    timerStarted: false,
    beachBoys: false,
  },
  created: function() {
    if (window.localStorage.getItem(TIME_LEFT_KEY)) {
      console.log('poui?')
      this.tempsTotal = window.localStorage.getItem(TIME_LEFT_KEY)
      this.countDown();
    }
  },
  computed: {
    skullCount: function() {
       return this.getSkullCount()
     }
  },
  methods: {
    mdp1: function() {
      if (this.passwordOK.indexOf(this.password.toLowerCase()) >= 0) {
        console.log('correct password');
        this.currentPage = 'menu';
        console.log('correct');
      } else {
        this.elecShock();
        setTimeout(() => {
        this.currentPage = 'accueil';
        }, 5000);
        console.log('mauvais mdp');
      }
    },
    countDown: function() {
      if (this.timerStarted == false) {
        console.log('je fonctionne');

        if (!window.localStorage.getItem(TIME_LEFT_KEY)) {
          this.tempsTotal = parseInt(window.localStorage.getItem(DURATION_KEY)) || DEFAULT_DURATION;
        }

        setInterval(() => {
          this.tempsTotal--;
          window.localStorage.setItem(TIME_LEFT_KEY, this.tempsTotal);
        }, 1000);
        console.log(this.timerStarted);
        this.timerStarted = true;
      } else {
        console.log(this.timerStarted);
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
        setTimeout(() => {
          this.currentPage = 'menu';
        }, 5000);
      } else {
       this.elecShock();
       setTimeout(() => {
          this.currentPage = 'menu';
        }, 5000);
      }
    },
    mdp3: function() {
      if (this.passwordListeOK.indexOf(this.passwordListe.toLowerCase()) >= 0) {
        console.log('correct password');
        this.currentPage = 'pageListe';
      } else {
        this.elecShock();
        setTimeout(() => {
          this.currentPage = 'menu';
        }, 10000);
      }
    },
    elecShock: function() {
      this.currentPage = 'dechargeElec';
    },
    backMenu: function() {
      this.currentPage = 'menu';
    },
    getSkullCount: function() {
      const firstSkullDuration = parseInt(window.localStorage.getItem(FIRST_SKULL_KEY)) || DEFAULT_FIRST_SKULL;
      const otherSkullsDuration = parseInt(window.localStorage.getItem(OTHER_SKULLS_KEY)) || DEFAULT_OTHER_SKULLS;
      const gameDuration = parseInt(window.localStorage.getItem(DURATION_KEY)) || DEFAULT_DURATION;
      const elapsedTime = gameDuration - this.tempsTotal;
      return Math.floor((elapsedTime - firstSkullDuration) / otherSkullsDuration) + 1 ;
    },
    handleAccueilClick: function() {
      this.mdp1();
      this.countDown();
    },
    pauseBeachBoys: function() {
     this.beachBoys = false;
    }
  },
  watch: {
    tempsTotal: function() {
      this.heures = Math.floor(this.tempsTotal / 3600);
      this.minutes = Math.floor((this.tempsTotal - (this.heures * 3600)) / 60);
      this.secondes = Math.floor((this.tempsTotal - (this.heures * 3600) - (this.minutes * 60)));
      if (this.tempsTotal == 0) {
        console.log("fin du temps");
        this.timerStarted = false;
        setTimeout(() => {
          this.currentPage = 'end';
        }, 10000);
        setTimeout(() => {
          this.currentPage = 'downtrip';
        }, 25000);
        setTimeout(() => {
          this.beachBoys = true;
          console.log('beach boys');
        }, 35000);
      }
   }
  },
})
