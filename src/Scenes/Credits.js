class Credits extends Phaser.Scene {
    constructor() {
        super("creditsScene");
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
        this.add.text(game.config.width/2 + 110, game.config.height/2 - borderUISize - borderPadding - 180, 'Credits', menuConfig).setOrigin(-0.3);
        this.add.text(game.config.width/2 + 100, game.config.height/2 - borderUISize - borderPadding, '', menuConfig).setOrigin(1.25);
        menuConfig.fontFamily = 'Courier New',
        menuConfig.fontSize = '30px';
        menuConfig.color = '#0000FF';
        this.add.text(game.config.width/2 + 70, game.config.height/2 - 80, '"Melancholic Walk" Pix', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2 - 20, game.config.height/2 - 50, '"Tap Sound Effect" Best Music BS', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2 + 43, game.config.height/2 - 20, '"Bamboo Hit" SoundLibrary', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2 + 25, game.config.height/2 + 10, '"Bamboo Background" DDRKIRB', menuConfig).setOrigin(0.5);
        this.add.text(game.config.width/2 - 20, game.config.height/2 + 40, '"Minimalism Bamboo" Rare-gallery', menuConfig).setOrigin(0.5);
        menuConfig.color = '#000000';
        this.add.text(game.config.width/2 + 113, game.config.height/2 + borderUISize + borderPadding + 120, 'Press B to return', menuConfig).setOrigin(0.5);

        // define keys
        keyB = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.B);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyB)) {
          //this.sound.play('sfx_select');
          this.scene.start("menuScene");    
        }
      }
}