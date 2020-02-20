const app = new Vue({
  el: '#ID',
  data: {
    username: 'Maiiitre',
    password: '',
    passwordCorpus: '',
    passwordListe: '',
    currentPage: 'accueil',
    compteARebours: 'none'
  },
  computed: {
    value: function() {
      if (this.password.toLowerCase() === 'eon7' || this.password.toLowerCase() === 'missd3') {
        return value = true;
      } else {
        return value = false;
      }
    },
  },
  methods: {
    mdp1: function() {
      if (this.password.toLowerCase() === 'eon7'
          || this.password.toLowerCase() === 'missd3') {
        console.log('correct password');
        this.currentPage = 'menu';
        this.compteARebours = 'display';
      } else {
        this.compteARebours = 'display';
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
      if (this.passwordCorpus.toLowerCase() === 'eon3'
          || this.passwordCorpus.toLowerCase() === 'missd2'
          || this.passwordCorpus.toLowerCase() === 'lk774') {
        console.log('correct password');
        this.currentPage = 'pageCorpus';
      } else {
        this.currentPage = 'dechargeElec';
      }
    },
    mdp3: function() {
      if (this.passwordListe.toLowerCase() === 'eon1'
          || this.passwordListe.toLowerCase() === 'missd2'
          || this.passwordListe.toLowerCase() === 'compte a rebours'
          || this.passwordListe.toLowerCase() === 'compte à rebours'
          || this.passwordListe.toLowerCase() === '6651732'
          || this.passwordListe.toLowerCase() === 'melusia'
          || this.passwordListe.toLowerCase() === 'antenna research'
          || this.passwordListe.toLowerCase() === 'bomber'
          || this.passwordListe.toLowerCase() === 'enfer'
          || this.passwordListe.toLowerCase() === 'WHS-R1-134'
          || this.passwordListe.toLowerCase() === 'no life'
          || this.passwordListe.toLowerCase() === 'romeo'
          || this.passwordListe.toLowerCase() === 'roméo'
          || this.passwordListe.toLowerCase() === 'juliette') {
        console.log('correct password');
        this.currentPage = 'pageListe';
      } else {
        this.currentPage = 'dechargeElec';
      }
    },
    backMenu: function() {
      this.currentPage = 'menu';
    },
  }
})
