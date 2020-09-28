
var editingMode = { rect: 0, line: 1 };

function Pencil(ctx, drawing, canvas) {
	this.currEditingMode = editingMode.line;
	this.currLineWidth = 5;
	this.currColor = '#000000';
	this.currentShape = 0;
	

	// Liez ici les widgets à la classe pour modifier les attributs présents ci-dessus.

	document.getElementById("butRect").onclick = () => {
		this.currEditingMode = editingMode.rect;
	}
	document.getElementById("butLine").onclick = () => {
		this.currEditingMode = editingMode.line;
	}
	
	document.getElementById("spinnerWidth").onchange = () => {
		this.currLineWidth = document.getElementById("spinnerWidth").value;
	}
	document.getElementById("color").onchange = () => {
		this.currColor = document.getElementById("color").value;
	}
	

	new DnD(canvas, this);
	/*
	ctx.fillStyle = '#F0F0F0'; // set canvas' background color
	ctx.fillRect(0, 0, canvas.width, canvas.height);  // now fill the canvas
	*/

	// Implémentez ici les 3 fonctions onInteractionStart, onInteractionUpdate et onInteractionEnd
	Pencil.prototype.onInteractionStart = function(dnd){
		//this.currLineWidth = document.getElementById("spinnerWidth").value;
		//this.currColour
		//updates the current shape
		switch(this.currEditingMode){
			case 0:
				this.currentShape = new Rectangle(this.currColor, this.currLineWidth,
					 dnd.xStart, dnd.yStart, 1, 1);
				break;
			case 1:
				this.currentShape = new Line(this.currColor, this.currLineWidth, 
					dnd.xStart, dnd.yStart, dnd.xStart, dnd.yStart );
					
				break;
		}
		//Repaint the drawing
		drawing.paint(ctx);
		//paint the updated current shape
		this.currentShape.paint(ctx);
	}
	Pencil.prototype.onInteractionUpdate = function(dnd){
		//updates the current shape
		switch(this.currEditingMode){
			case 0:
				this.currentShape = new Rectangle(this.currColor, this.currLineWidth,
					 dnd.xStart, dnd.yStart, dnd.xEnd - dnd.xStart, dnd.yEnd - dnd.yStart);
				break;
			case 1:
				this.currentShape = new Line(this.currColor, this.currLineWidth, 
					dnd.xStart, dnd.yStart, dnd.xEnd, dnd.yEnd );
				break;
		}
		//Repaint the drawing
		drawing.paint(ctx);
		//paint the updated current shape
		this.currentShape.paint(ctx);
	}
	Pencil.prototype.onInteractionEnd = function(dnd){
		drawing.forms.push(this.currentShape);
		drawing.updateShapeList(this.currentShape, ctx);
	}
};


