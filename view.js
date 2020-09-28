Form.prototype.paint = function(ctx){
    //ctx.fillStyle = this.color;
    ctx.strokeStyle = this.color;
    ctx.lineWidth = this.lineThickness;
}

Rectangle.prototype.paint = function(ctx) {
    Form.prototype.paint.call(this, ctx);
    ctx.beginPath();
    ctx.rect(this.xStart, this.yStart, this.width,  this.height);
    ctx.stroke();
}
  
Line.prototype.paint = function(ctx) {
    Form.prototype.paint.call(this, ctx);
    ctx.beginPath();
    ctx.moveTo(this.xStart, this.yStart);
    ctx.lineTo(this.xEnd, this.yEnd);
    ctx.stroke();
}

Drawing.prototype.paint = function(ctx) {
    //console.log(this.getForms());
    ctx.fillStyle = '#F0F0F0'; // set canvas' background color
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    this.forms.forEach(function (eltDuTableau) {
        // now fill the canvas
        eltDuTableau.paint(ctx);
        
    });
}

Drawing.prototype.updateShapeList = function(shape, ctx) {
    var button = document.createElement("button");
    button.type = "button";
    button.className = "btn btn-default";
    var buttonContent = document.createElement("span");
    buttonContent.className = "glyphicon glyphicon-remove-sign";
    button.appendChild(buttonContent);
    //Create a li element , dont just append text!
    var element = document.createElement("li");
    var text = document.createTextNode(shape.name);
    element.appendChild(text);
    document.getElementById("shapeList").append(button);
    document.getElementById("shapeList").append(element);
    button.onclick = () => {
        document.getElementById("shapeList").removeChild(button);
        document.getElementById("shapeList").removeChild(element);
        //to remove an element from array, get index then use splice function.
        var index = this.forms.indexOf(shape);
        this.forms.splice(index, 1);
        this.paint(ctx);
    }
    
    

}
  
