// MainGame.js
// blog: retrogamecode.blogspot.com
// author: Michael Norton
// Article: HTML 5 Blitting Using and Offscreen Buffer
//
// Source code to demonstrate using the Game Console class 
// blit to an offscreen buffer (i.e. HTML5 canvas)
//

// create a Game Console object
var gc = new GameConsole(592,448);
gc.initGC();

// Background image
// load the image
var backgroundReady = false;
var backgroundImage = new Image();
backgroundImage.onload = function () {
    backgroundReady = true;
};
backgroundImage.src = "img/Level_1_warehouse.png";


// load the sprite
// load Sprite Sheet
var sprite = {};
var spriteSheetReady = false;
var spriteSheetImage = new Image();
spriteSheetImage.onload = function () {
    spriteSheetReady = true;
};
spriteSheetImage.src = "img/aliensvspredator_ltlinnkurosawa_sheet_sclx2.png";
var spriteWidth = spriteSheetImage.width /4;
var spriteHeight = 118;

gc.renderOffscreenGC(backgroundImage);

sprite.x = 250;
sprite.y = 250;

gc.bitBlitOffscreenGC(spriteSheetImage, 0, 144, spriteWidth, spriteHeight, sprite.x, sprite.y, spriteWidth, spriteHeight); 
gc.flipGC();

console.log(gc);


