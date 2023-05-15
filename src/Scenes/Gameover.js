class Gameover extends Phaser.Scene {
    constructor() {
        super("gameoverScene");
    }

    create() {
        // Add a pop-up screen
        const graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 0.5);
        graphics.fillRect(0, 0, this.game.config.width, this.game.config.height);

        // Add text to the pop-up screen
        const gameOverText = this.add.text(
            this.game.config.width / 2,
            (this.game.config.height / 2) - 100,
            'Game Over',
            {
                font: '64px Arial',
                fill: '#FF0000',
                align: 'center'
            }
        );
        gameOverText.setOrigin(0.5);

        // Add score to the pop-up screen
        const scoreTextFinal = this.add.text(
            this.game.config.width / 2 - 50,
            (this.game.config.height / 2),
            'Score: ' + score,
            {
                font: '32px Arial',
                fill: '#FFFF00',
                align: 'center'
            }
        );
        gameOverText.setOrigin(0.5);

        // Add a button to restart the game
        const restartButton = this.add.text(
            this.game.config.width / 2,
            this.game.config.height / 2 + 100,
            'Menu (M)',
            {
                font: '32px Arial',
                fill: '#FFFFFF',
                backgroundColor: '#0000FF',
                padding: {
                    x: 20,
                    y: 10
                }
            }
        );
        restartButton.setOrigin(0.5);

        // define keys
        keyM = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.M);
    }

    update() {
        if (Phaser.Input.Keyboard.JustDown(keyM)) {
          this.gameover = false;
          this.scene.start("menuScene");    
        }
      }
}