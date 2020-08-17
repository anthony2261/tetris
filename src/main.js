import { Tetris } from './tetris';

class Main {
  static launch() {
    if (localStorage.getObj('scores')) {
      if (localStorage.getObj('scores').length < 2) {
        document.getElementById('high-score').innerHTML = `High Scores : <br> 1st : ${localStorage.getObj('scores')[0].name} -> ${localStorage.getObj('scores')[0].score}
                                                                          <br> 2nd :
                                                                          <br> 3rd : `;
      } else if (localStorage.getObj('scores').length < 3) {
        document.getElementById('high-score').innerHTML = `High Scores : <br> 1st : ${localStorage.getObj('scores')[0].name} -> ${localStorage.getObj('scores')[0].score}
                                                                          <br> 2nd : ${localStorage.getObj('scores')[1].name} -> ${localStorage.getObj('scores')[1].score}
                                                                          <br> 3rd : `;
      } else {
        document.getElementById('high-score').innerHTML = `High Scores : <br> 1st : ${localStorage.getObj('scores')[0].name} -> ${localStorage.getObj('scores')[0].score}
                                                                          <br> 2nd : ${localStorage.getObj('scores')[1].name} -> ${localStorage.getObj('scores')[1].score}
                                                                          <br> 3rd : ${localStorage.getObj('scores')[2].name} -> ${localStorage.getObj('scores')[2].score}`;
      }
    }
    document.getElementsByClassName('keys')[0].innerHTML = `Keys: <br> ${(String.fromCharCode(localStorage.rotate || 82))}: rotate <br> ${String.fromCharCode(localStorage.hold || 72)}: hold <br> ${String.fromCharCode(localStorage.pause || 80)}: Pause/Unpause <br> Left/Right/Down Arrows: guess <br> Space: slam <br> M: Mute`;
    document.getElementById('keybindings-button').addEventListener('click', this.inputKeys);
    this.tetris = new Tetris(10, 20);
    this.tetris.run(() => { this.launch(); });
  }

  static inputKeys() {
    let inputElement = document.getElementById('input-field');
    inputElement.style.display = 'flex';
    let inputs = [];
    let inputName = ['rotate', 'hold', 'pause'];
    document.getElementById('key-instruction').innerHTML = `Please insert your ${inputName[0]} key :`;
    inputElement.onkeydown = (e) => {
      if (inputs.length < 3) {
        document.getElementById('key-instruction').innerHTML = `Please insert your ${inputName[inputs.length + 1]} key :`;
        inputElement.value = ' ';
        inputs.push(e.keyCode);
      }
      if (inputs.length === 3) {
        document.getElementById('key-instruction').innerHTML = '';
        inputElement.style.display = 'none';
        localStorage.setItem('rotate', inputs[0]);
        localStorage.setItem('hold', inputs[1]);
        localStorage.setItem('pause', inputs[2]);

        document.getElementsByClassName('keys')[0].innerHTML = `Keys: <br> ${String.fromCharCode(localStorage.rotate)}: rotate <br> ${String.fromCharCode(localStorage.hold)}: hold <br> ${String.fromCharCode(localStorage.pause)}: Pause/Unpause <br> Left/Right/Down Arrows: guess <br> Space: slam <br> M: Mute`;
      }
    };
  }

  static gameMute() {
    let music = document.getElementById('theme-music');
    // eslint-disable-next-line no-unused-expressions
    music.paused ? music.play() : music.pause();
  }
}

window.addEventListener('keydown', (e) => {
  if (e.keyCode === 77) {
    Main.gameMute();
  }
});

export { Main };
