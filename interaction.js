
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.canvas = canvas;
  this.interactor = interactor;

  var xStart = 0;
  var yStart = 0;

  var xEnd = 0;
  var yEnd = 0;

  var dragStarted = false;

	// Developper les 3 fonctions gérant les événements

  // Associer les fonctions précédentes aux évènements du canvas.
  
  canvas.addEventListener('mousedown', this.dragStart, false);
  canvas.addEventListener('mousemove', this.drag, false);
  canvas.addEventListener('mouseup', this.dragEnd, false);

};

DnD.prototype.dragStart = function(evt){
  if(!this.dragStarted){
    this.xStart = getMousePosition(canvas, evt).x;
    this.yStart = getMousePosition(canvas, evt).y;
    this.dragStarted = true;

    //console.log("x: " + this.xStart + "y: " +this.yStart);
  }
}
DnD.prototype.drag = function(evt){
  if(this.dragStarted){
    this.xEnd = getMousePosition(canvas, evt).x;
    this.yEnd = getMousePosition(canvas, evt).y;
    //console.log("x: " + this.xEnd + "y: " +this.yEnd);
  }
}
DnD.prototype.dragEnd = function(evt){
  if(this.dragStarted){
    this.xEnd = getMousePosition(canvas, evt).x;
    this.yEnd = getMousePosition(canvas, evt).y;
    this.dragStarted = false;
    //console.log("x: " + this.xEnd + "y: " +this.yEnd);
  }
}

// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



