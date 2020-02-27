const gameDefault = {
  gameDuration: 3*3600,
}

const configApp = new Vue({
  el: '#config-app',
  data: {
    duration: 0,
    firstSkullDuration: 0,
    otherSkullsDuration: 0,
  },
  created: function() {
    this.duration = parseInt(window.localStorage.getItem(DURATION_KEY)) || DEFAULT_DURATION;
    this.firstSkullDuration = parseInt(window.localStorage.getItem(FIRST_SKULL_KEY)) || DEFAULT_FIRST_SKULL;
    this.otherSkullsDuration = parseInt(window.localStorage.getItem(OTHER_SKULLS_KEY)) || DEFAULT_OTHER_SKULLS;
  },
  computed: {
    // this chain of computed values probably can be fixed
    first: function() {
      return this.timeAtSkullNumber(1);
    },
    second: function() {
      return this.timeAtSkullNumber(2);
    },
    third: function() {
      return this.timeAtSkullNumber(3);
    },
    fourth: function() {
      return this.timeAtSkullNumber(4);
    },
    fifth: function() {
      return this.timeAtSkullNumber(5);
    },
    sixth: function() {
      return this.timeAtSkullNumber(6);
    },
    displayWarn: function() {
      return this.timeAtSkullNumber(6) > this.duration;
    }
  },
  methods: {
    reset: function() {
      window.localStorage.removeItem(TIME_LEFT_KEY);
    },
    resetAll: function() {
      this.reset();
      window.localStorage.removeItem(DURATION_KEY);
      this.duration = DEFAULT_DURATION;
      window.localStorage.removeItem(FIRST_SKULL_KEY);
      this.firstSkullDuration = DEFAULT_FIRST_SKULL;
      window.localStorage.removeItem(OTHER_SKULLS_KEY);
      this.otherSkullsDuration = DEFAULT_OTHER_SKULLS;
    },
    save: function() {
      window.localStorage.setItem(DURATION_KEY, this.duration);
      window.localStorage.setItem(FIRST_SKULL_KEY, this.firstSkullDuration);
      window.localStorage.setItem(OTHER_SKULLS_KEY, this.otherSkullsDuration);
    },
    timeAtSkullNumber: function(number) {
      if (number == 1) {
        return this.firstSkullDuration;
      } else {
        return this.firstSkullDuration + ((number-1) * parseInt(this.otherSkullsDuration));
      }
      return
    },
    toHHMMSS: function(seconds) {
      const h = Math.floor(seconds / 3600);;
      const m = Math.floor((seconds % 3600) / 60);
      const s = seconds % 60;
      return `${h}:${m}:${s}`;
    }
  },
})
