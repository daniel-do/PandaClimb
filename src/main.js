/*
Daniel Do
"Panda Climb"
~38 hours

Creative tilt justification:
50/50 chance of spawning a bamboo branch every second
Learned Arcade Physics: gravity, velocity changes, sprite creations
Jenky way of making it feel like the bamboo has an infinite length
Flipped panda sprite along the center of the canvas (calculating equal fractions of the canvas)
Learned how to use Aesprite to make the art for the panda, bamboo, and its branches
Unintentional paralax between the main bamboo sprite and the scrolling bamboo background
*/

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