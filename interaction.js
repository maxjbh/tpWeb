
// La création d'un Dnd requière un canvas et un interacteur.
// L'interacteur viendra dans un second temps donc ne vous en souciez pas au départ.
function DnD(canvas, interactor) {
  // Définir ici les attributs de la 'classe'
  this.canvas = canvas;
  this.interactor = interactor;

  this.xStart = 0;
  this.yStart = 0;

  this.xEnd = 0;
  this.yEnd = 0;

  var dragStarted = false;

  // Developper les 3 fonctions gérant les événements
  
  DnD.prototype.dragStart = evt => {
    if(!this.dragStarted){
      this.xStart = getMousePosition(canvas, evt).x;
      this.yStart = getMousePosition(canvas, evt).y;
      this.dragStarted = true;
      this.interactor.onInteractionStart(this);
  
      //console.log("x: " + this.xStart + "y: " +this.yStart);
      //console.log("x: " + this.xEnd + "y: " +this.yEnd);
      //console.log("wtf");
    }
  }
  DnD.prototype.drag = evt =>{
    if(this.dragStarted){
      this.xEnd = getMousePosition(canvas, evt).x;
      this.yEnd = getMousePosition(canvas, evt).y;
      this.interactor.onInteractionUpdate(this);
      //console.log("x: " + this.xEnd + "y: " +this.yEnd);
    }
  }
  DnD.prototype.dragEnd = evt =>{
    if(this.dragStarted){
      this.xEnd = getMousePosition(canvas, evt).x;
      this.yEnd = getMousePosition(canvas, evt).y;
      this.dragStarted = false;
      this.interactor.onInteractionEnd(this);
      //console.log("x: " + this.xEnd + "y: " +this.yEnd);
    }
  }

  // Associer les fonctions précédentes aux évènements du canvas.
  
  canvas.addEventListener('mousedown', this.dragStart, false);
  canvas.addEventListener('mousemove', this.drag, false);
  canvas.addEventListener('mouseup', this.dragEnd, false);

};



// Place le point de l'événement evt relativement à la position du canvas.
function getMousePosition(canvas, evt) {
  var rect = canvas.getBoundingClientRect();
  return {
    x: evt.clientX - rect.left,
    y: evt.clientY - rect.top
  };
};



