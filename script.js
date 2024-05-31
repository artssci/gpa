// function playAudio() {
//   var audio = document.getElementById("audioPlayer");
//   audio.play();
// }


const app = Vue.createApp({
  data() {
    return {
      gradeCounter: 50,
      mentalhealth: 50,
      button1: false,
      button2: false,
      initialtext: true,
      clicktext: true,
      clickbox: true,
      text1: false,
      text1right: false,
      text1left: false,
      boxgetahead: false,
      boxchill: false,
      boxcontinue: false,
      gotahead: false,
      gotchill: false,
      text2: false,
      text2right: false,
      text2left: false,
      boxabsolutely: false,
      boxnoway: false,
      text3: false,
      text3right: false,
      text3left: false,
      boxyes: false,
      boxno: false,
      depressionpsa: false,
      box: false,
      psaover: false,
      text4: false,
      text4right: false,
      text4left: false,
      boxduke: false,
      boxnoparty: false,
      duke: false,
      noparty: false,
      box3: false,
      text5: false,
      text5right: false,
      text5left: false,
      boxhelp: false,
      boxnohelp: false,
      box2: false,
      help: false,
      slogthrough: false,
      text6: false,
      text6right: false,
      text6left: false,
      box30m: false,
      boxallout: false,
      text7: false,
      text7right: false,
      text7left: false,
      boxyes1: false,
      boxno1: false,
      examwarning: false,
      boxexam: false,
      boxexam1L: false,
      boxexam1R: false,
      text8: false,
      text8right: false,
      text8left: false,
      boxexam2R: false,
      boxexam2L: false,
      inadvance: false,
      notinadvance: false,
      box4: false,
      text9: false,
      text9right: false,
      text9left: false,
      text10: false,
      text10right: false,
      text10left: false,
      boxexam3R: false,
      boxexam3L: false,
      boxexam45R: false,
      boxexam45L: false,
      existentialism: false,
      astroturf: false,
      box5: false,
      finish: false,
      restart: true,
      GPA: true,
      mentalhealth0: true,
      grades0: true,
      restarttext: true,
      duhda: true,
      playagaintext: false,
      happyface: false,
    }
    },
  
  methods: {
   playAudio() {
    var audio = document.getElementById("audioPlayer");
    audio.play();
   },
    playDuhda() {
  var audio = document.getElementById("duhda");
}
  }
  });


app.mount("#app");


