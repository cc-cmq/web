import Phaser from "phaser";



export default {
  // Specifies the rendering type, in this case, WEBGL
  type: Phaser.WEBGL,
  // Sets the parent DOM element for the Phaser game canvas
  parent: "phaser-example",
  // Defines the width of the game canvas
  width: 640,
  // Defines the height of the game canvas
  height: 512,
  // Enables pixel art rendering mode
  pixelArt: true,
  // Ensures that pixels are rendered without anti-aliasing
  roundPixels: true,
  // Configuration for the physics system
  physics: {
    // Sets the default physics system to Arcade Physics
    default: "arcade",
    // Configuration specific to Arcade Physics
    arcade: {
      // Disables debug mode for the physics system
      debug: false,
      // Sets the gravity along the y-axis (vertical gravity)
      gravity: { y: 0 }
    }
  },
  // Configuration for the scaling behavior of the game
  scale: {
    // Sets the parent element for scaling purposes
    parent: "body",
    // Centers the game canvas both horizontally and vertically
    autoCenter: Phaser.Scale.CENTER_BOTH,
    // Ensures the game canvas fits within the parent element
    mode: Phaser.Scale.FIT
  }
};
