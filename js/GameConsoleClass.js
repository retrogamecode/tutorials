// GameConsole.js
// blog: retrogamecode.blogspot.com
// author: Michael Norton
// Article: HTML 5 Blitting Using and Offscreen Buffer
//
// Source code class for creating an HTML 5 
// Game Console viewport and blitting functions.
//
function GameConsole(width, height) {
    this.width = width;
    this.height = height;  
    
    // create the main canvas
    this.canvas = document.createElement( 'canvas' );  
    this.canvas.width = this.width;
    this.canvas.height = this.height;
    this.context = this.canvas.getContext( '2d' );
    
    // add the canvas to the DOM
    document.body.appendChild(this.canvas);
    
    // create the offscreen buffer (canvas)
    this.offscreenCanvas = document.createElement('canvas');
    this.offscreenCanvas.width = this.width;
    this.offscreenCanvas.height = this.height;
    this.offscreenCanvas.context = this.offscreenCanvas.getContext('2d');

} // END GameConsole class


GameConsole.prototype = {

    initGC: function() {
        this.context.fillStyle = '#000000'; // Black
        //this.context.fillStyle = '#f0eef9'; // Lavender
        this.context.clearRect(0, 0, this.width, this.height);
        this.context.beginPath();
        this.context.rect(0, 0, this.width, this.height);
        this.context.closePath();
        this.context.fill();
    },   // END initGC
    
    // render to the offscreen canvas
    renderOffscreenGC: function(image) {
     // render the background
        this.offscreenCanvas.context.drawImage(image, 0, 0);
    
    }, // END render 
    
    bitBlitOffscreenGC: function(sprite, srcx, srcy, srcwidth, srcheight, dstx, dsty, dstwidth, dstheight) {
        
        this.offscreenCanvas.context.drawImage(sprite, srcx, srcy, srcwidth, srcheight, dstx, dsty, dstwidth, dstheight);
    },
    
    // flip the offscreen canvas to the visible GC canvas
    flipGC: function () {
        this.context.drawImage(this.offscreenCanvas, 0, 0);
    }, // END flipGC
    
}; // END GameConsole.prototype
