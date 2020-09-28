function Drawing(forms){
    this.forms = forms;
}

function Form(color, lineThickness){
    this.color = color;
    this.lineThickness = lineThickness;
}

function Rectangle(color, lineThickness, xStart, yStart, width, height){
    Form.call(this, color, lineThickness);
    this.xStart= xStart;
    this.yStart = yStart;
    this.width = width;
    this.height = height;
    this.name = "Rectangle ";
}
Rectangle.prototype = new Form();

function Line(color, lineThickness, xStart, yStart, xEnd, yEnd){
    Form.call(this, color, lineThickness);
    this.xStart = xStart;
    this.xEnd = xEnd;
    this.yStart = yStart;
    this.yEnd = yEnd;
    this.name = "Line ";
}
Line.prototype = new Form();

