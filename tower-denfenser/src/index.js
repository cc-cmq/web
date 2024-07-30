import Phaser from "phaser";
import config from "./config";
import GameScene from "./scenes/GameScene";
import GameScene2 from "./scenes/GameScene2";
import BootScene from "./scenes/BootScene";
import PreloaderScene from "./scenes/PreloaderScene";
import TitleScene from "./scenes/TitleScene";
import UIScene from "./scenes/UIScene";
import UIScene2 from "./scenes/UIScene2";

class Game extends Phaser.Game {
  constructor() {
    super(config); // Initializing the game with the provided configuration
    this.scene.add("Preloader", PreloaderScene); // Adding the Preloader scene to the game
    this.scene.add("Boot", BootScene); // Adding the Boot scene to the game
    this.scene.add("Game", GameScene); // Adding the main Game scene to the game
    this.scene.add("Game2", GameScene2); // Adding the main Game scene to the game
    this.scene.add("Title", TitleScene); // Adding the Title scene to the game
    this.scene.add("UI", UIScene); // Adding the UI scene to the game
    this.scene.add("UI2", UIScene2); // Adding the UI scene to the game
    this.scene.start("Boot"); // Starting the Boot scene to begin the game
  }
}

// Function to initialize the game when the window has loaded
window.onload = function() {
  window.game = new Game(config); // Creating a new instance of the Game class and assigning it to the window object
};
