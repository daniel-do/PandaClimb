// Initialize Phaser 3
const config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    physics: {
      default: 'arcade',
      arcade: {
        gravity: { y: 0 },
        debug: false
      }
    },
    scene: {
      preload: preload,
      create: create,
      update: update
    }
  };
  
  const game = new Phaser.Game(config);
  
  // Initialize game variables
  let score = 0;
  let scoreText;
  let tree;
  let branch;
  let lumberjack;
  let gameover = false;
  
  // Load game assets
  function preload() {
    this.load.image('tree', 'assets/tree.png');
    this.load.image('branch', 'assets/branch.png');
    this.load.spritesheet('lumberjack', 'assets/lumberjack.png', { frameWidth: 128, frameHeight: 128 });
  }
  
  // Create game objects
  function create() {
    // Add trees to the game world
    tree = this.physics.add.group();
    tree.create(320, 0, 'tree').setScale(2).setOrigin(0.5, 0);
    
    // Add branches to the game world
    branch = this.physics.add.group();
    
    // Add lumberjack to the game world
    lumberjack = this.physics.add.sprite(320, 400, 'lumberjack').setScale(0.5);
    lumberjack.setCollideWorldBounds(true);
    
    // Add score text to the game world
    scoreText = this.add.text(10, 10, 'Score: 0', { font: '32px Arial', fill: '#000000' });
    
    // Add keyboard controls
    this.input.keyboard.on('keydown_LEFT', function (event) {
      lumberjack.setVelocityX(-200);
    });
    this.input.keyboard.on('keyup_LEFT', function (event) {
      lumberjack.setVelocityX(0);
    });
    this.input.keyboard.on('keydown_RIGHT', function (event) {
      lumberjack.setVelocityX(200);
    });
    this.input.keyboard.on('keyup_RIGHT', function (event) {
      lumberjack.setVelocityX(0);
    });
    
    // Add collision detection between lumberjack and branches
    this.physics.add.collider(lumberjack, branch, function () {
      gameover = true;
    });
  }
  
  // Update game logic
  function update() {
    // Move trees and branches down the screen
    tree.setVelocityY(200);
    branch.setVelocityY(200);
    
    // Spawn new branches randomly
    let branchChance = Phaser.Math.Between(1, 10);
    if (branchChance === 1) {
      let branchX = Phaser.Math.Between(0, 640);
      branch.create(branchX, -32, 'branch');
    }
    
    // Increment score for every tree chopped
    this.physics.add.overlap(lumberjack, tree, function () {
      tree.clear(true, true);
      score += 1;
      scoreText.setText('Score: ' + score);
    });
    
    // Game over logic
    if (gameover) {
      this.scene.pause();
      this.add.text(200, 200, 'Game Over', { font: '64px Arial', fill: '#FF0000' });
    }
  }