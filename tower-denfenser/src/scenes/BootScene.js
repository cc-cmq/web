import Phaser from "phaser";
import logoImg from "../assets/logo/logo.png";
import bgMusic from "../assets/audio/bgMusic.mp3";

export default class BootScene extends Phaser.Scene {
  constructor() {
    super("Boot");
    this.bgMusic;
  }

  preload() {
    this.load.image("logo", logoImg);
    this.load.audio("bgMusic", bgMusic);
  }

  create() {
    this.scene.start("Preloader");
    this.bgMusic=this.sound.add("bgMusic")
    this.bgMusic.play()
  }
}
