const app = new Vue({
  el: '#ID',
  data: {
    username: 'Maiiitre',
    password: '',
    passwordCorpus: '',
    passwordListe: '',
    passwordOK: ['eon7', 'missd3'],
    passwordCorpusOK: ['eon3', 'missd2', 'lk774'],
    passwordListeOK: ['eon1', 'missd2', 'compte a rebours', 'compte à rebours', '6651732', 'melusia', 'antenna research', 'bomber', 'enfer', 'WHS-R1-134', 'no life', 'romeo', 'roméo', 'juliette'],
    currentPage: 'accueil',
    compteARebours: 'none',
  },
  computed: {
    value: function() {
      if (this.passwordOK.indexOf(this.password.toLowerCase()) >= 0) {
        return value = true;
      } else {
        return value = false;
      }
    }
  },
  methods: {
    mdp1: function() {
      if (this.passwordOK.indexOf(this.password.toLowerCase()) >= 0) {
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
    }
  }
})
