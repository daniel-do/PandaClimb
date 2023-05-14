class Play extends Phaser.Scene {
    constructor() {
      super("playScene");
    }
  
    // Initialize game variables
    score = 0;
    scoreText;
    bamboo;
    branch;
    panda;
    gameover = false;
    moveSpeed = 2;
  
    // Load game assets
    preload() {
      this.load.image('bamboo', './assets/bamboo.jpg');
      this.load.image('branch', './assets/branch.png');
      this.load.image('background', './assets/background.jpeg');
      this.load.spritesheet('panda', './assets/panda.png', { frameWidth: 269, frameHeight: 244 });
    }
  
    // Create game objects
    create() {

      // Add background
      this.background = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'background').setOrigin(0, 0);

      // Add bamboo to the game world
      //this.bamboo = new Bamboo(this, (game.config.width / 2) - 50, game.config.height - 300, 'bamboo', 0).setOrigin(0, 0);
      this.bamboo = this.physics.add.group();
      this.bamboo.create((game.config.width / 2) - 50, game.config.height - 1200, 'bamboo').setScale(1).setOrigin(0, 0);
      this.bamboo.enableBody = true;
      this.bamboo.physicsBodyType = Phaser.Physics.ARCADE;
  
      // Add branches to the game world
      this.branch = this.physics.add.group();
      this.branch.enableBody = true;
      this.branch.physicsBodyType = Phaser.Physics.ARCADE;

      // Add panda
      //this.panda = new Sprite(this, (game.config.width / 4) * 3 - 50, game.config.height - borderUISize - borderPadding, 'panda').setOrigin(0, 0);
      this.panda = this.physics.add.sprite((game.config.width / 4) * 3 - 60, game.config.height - borderUISize - borderPadding, 'panda').setScale(0.4);
      this.panda.setCollideWorldBounds(true);
  
      // Add score text to the game world
      this.scoreText = this.add.text(10, 10, 'Score: 0', { font: '32px Arial', fill: '#FFFF00' });
  
      // Add keys
      keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
      keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
  
      // Add collision detection between panda and branches
      this.physics.add.collider(this.panda, this.branch, () => {
        this.gameover = true;
      });

      this.time.addEvent({
        delay: 1000, // in milliseconds
        callback: this.spawnBranch,
        callbackScope: this,
        loop: true
      });
    }

    spawnBranch() {
        // Spawn new branches randomly
        let branchChance = Phaser.Math.Between(1, 2);
        let branchPosition = Phaser.Math.Between(1, 2);
        let branchX = 0;
        if (branchChance == 1) {
            if (branchPosition == 1) {
                branchX = (game.config.width / 4) + 60; // spawn on left of bamboo
            } else {
                branchX = ((game.config.width / 4) * 3) - 60; // spawn on right of bamboo
            }
            this.branch.create(branchX, -32, 'branch');
        }
    }
  
    // Update game logic
    update() {
      // Panda left/right movement
      if(keyLEFT.isDown) {
        this.panda.x = (game.config.width / 4) + 60;
        this.panda.flipX = true;
      } else if (keyRIGHT.isDown) {
        this.panda.x = (game.config.width / 4) * 3 - 60;
        this.panda.flipX = false;
      }
      // Move bamboo and branches down the screen
      this.bamboo.setVelocityY(200);
      this.branch.setVelocityY(200);

      // Infinite bamboo length
      let bambooChance = Phaser.Math.Between(1, 50);
      if (bambooChance === 1) {
        this.bamboo.create((game.config.width / 2) - 50, game.config.height - 1200, 'bamboo').setScale(1).setOrigin(0, 0);
      }

      this.background.tilePositionY -= 4;
  
      this.scoreText.setText('Score: ' + Math.floor(this.time.now * 0.001));

    // Game over logic
    if (this.gameover) {
      this.scene.pause();
      this.add.text(200, 200, 'Game Over', { font: '64px Arial', fill: '#FF0000' });
    }
  }
}