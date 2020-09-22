Form.prototype.paint = function(ctx){

}

Rectangle.prototype.paint = function(ctx) {
    ctx.rect(this.xStart, this.yStart, this.xStart + this.width,   this.yStart + this.height);
    ctx.stroke();
};
  
Line.prototype.paint = function(ctx) {
    ctx.beginPath();
    ctx.moveTo(this.xStart, this.yStart);
    ctx.lineTo(this.xEnd, this.yEnd);
    ctx.stroke();
};

Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.forms.forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
    });
};
  
