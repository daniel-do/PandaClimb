let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 200 },
        debug: false
      }
    },
    scene: [ Menu, Credits, Play ]
  };

let game = new Phaser.Game(config);

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;

// reserve keyboard vars
let keyM, keyC, keyB, keyLEFT, keyRIGHT;