import Phaser from "phaser";
import levelConfig from "../config/levelConfig";

export default class Enemy extends Phaser.GameObjects.Image {
  constructor(scene, x, y, path) {
    super(scene, x, y, "enemy");

    this.path = path;
    this.hp = 0;
    this.enemySpeed = 0;
    this.follower = {
      t: 0,
      vec: new Phaser.Math.Vector2()
    };

    // add the enemy to our scene
    this.scene.add.existing(this);
  }

  update(time, delta) {
    // move the t pont along the path
    this.follower.t += this.enemySpeed * delta;

    // get x and y of the given t pont
    this.path.getPoint(this.follower.t, this.follower.vec);

    // rotate enemy
    if (this.follower.vec.y > this.y && this.follower.vec.y !== this.y) {
      this.angle = 0;
    }
    if (this.follower.vec.x > this.x && this.follower.vec.x !== this.x) {
      this.angle = -90;
    }

    // set teh x and y of our enemy
    this.setPosition(this.follower.vec.x, this.follower.vec.y);

    // if we have reached the end of the path, remove the enemy
    if (this.follower.t >= 1) {
      this.setActive(false);
      this.setVisible(false);
      this.scene.updateHealth(1);
    }
  }

  startOnPath(level) {
    // reset health
    this.hp =
      levelConfig.initial.enemyHealth +
      level * levelConfig.incremental.enemyHealth;
    // reset speed
    this.enemySpeed =
      levelConfig.initial.enemySpeed *
      (level * levelConfig.incremental.enemySpeed);

    // set t param at the start of the path
    this.follower.t = 0;
    this.path = this.scene.path;
    // get x and y of the given t pont
    this.path.getPoint(this.follower.t, this.follower.vec);

    // set teh x and y of our enemy
    this.setPosition(this.follower.vec.x, this.follower.vec.y);
  }

  recieveDamage(damage) {
    this.hp -= damage;

    // if hp < 0 => deactivate enemy
    if (this.hp <= 0) {
      this.setActive(false);
      this.setVisible(false);
      this.scene.updateScore(10);
      this.scene.updateEnemies(-1);
    }
  }
}
