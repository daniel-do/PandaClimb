class Menu extends Phaser.Scene {
    constructor() {
        super("menuScene");
    }

    preload() {
        this.load.image('menuScreen', './assets/menuScreen.jpeg');
    }

    create() {
        // menu text configuration
        let menuConfig = {
            fontFamily: 'Brush Script MT',
            fontSize: '50px',
            color: '#000000',
            align: 'right',
            padding: {
                top: 5,
                bottom: 5,
            },
            fixedWidth: 0
        }

        this.menuScreen = this.add.tileSprite(0, 0, game.config.width, game.config.height, 'menuScreen').setOrigin(0, 0);
        
        // show menu text
        this.add.text(game.config.width/2, game.config.height/2 - borderUISize - borderPadding - 180, 'Panda Climb', menuConfig).setOrigin(-0.2);
        this.add.text(game.config.width/2 + 100, game.config.height/2 - borderUISize - borderPadding, '', menuConfig).setOrigin(1.25);
        menuConfig.fontFamily = 'Courier New',
        menuConfig.fontSize = '30px';
        menuConfig.color = '#0000FF';
        this.add.text(game.config.width/2 + 140, game.config.height/2 - 80, 'Use ← → arrows', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2 + 113, game.config.height/2 - 50, 'to dodge branches', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2 + 105, game.config.height/2 + borderUISize + borderPadding - 20, 'Press ← for Normal', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2 + 132, game.config.height/2 + borderUISize + borderPadding + 10, 'or → for Expert', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2 + 124, game.config.height/2 + borderUISize + borderPadding + 40, 'or C for Credits', menuConfig).setOrigin(0.5);
        menuConfig.color = '#000000';
        this.add.text(game.config.width/2 + 185, game.config.height/2 + borderUISize + borderPadding + 120, 'Daniel Do', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2 + 230, game.config.height/2 + borderUISize + borderPadding + 150, '2023', menuConfig).setOrigin(0.5);

        // define keys
        keyC = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.C);
        keyLEFT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        keyRIGHT = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyLEFT)) {
          // Normal mode
          game.settings = {
            fallSpeed: 200,
            branchDelay: 1000,   
          }
          //this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyRIGHT)) {
          // Expert mode
          game.settings = {
            fallSpeed: 400,
            branchDelay: 500,
          }
          //this.sound.play('sfx_select');
          this.scene.start("playScene");    
        }
        if (Phaser.Input.Keyboard.JustDown(keyC)) {
          this.scene.start("creditsScene");
        }
      }
}