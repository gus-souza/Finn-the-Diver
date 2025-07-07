const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  backgroundColor: '#0077be',
  physics: {
    default: 'arcade',
    arcade: { gravity: { y: 0 }, debug: false }
  },
  scene: {
    preload,
    create,
    update
  }
};

const game = new Phaser.Game(config);

function preload() {
  this.load.image('background', 'assets/background.png');
  this.load.image('player', 'assets/player.png');
}

function create() {
  this.add.image(400, 300, 'background');
  this.player = this.physics.add.sprite(100, 300, 'player').setScale(0.5);
  this.cursors = this.input.keyboard.createCursorKeys();
}

function update() {
  const speed = 200;
  this.player.setVelocity(0);

  if (this.cursors.left.isDown) this.player.setVelocityX(-speed);
  else if (this.cursors.right.isDown) this.player.setVelocityX(speed);

  if (this.cursors.up.isDown) this.player.setVelocityY(-speed);
  else if (this.cursors.down.isDown) this.player.setVelocityY(speed);
}
