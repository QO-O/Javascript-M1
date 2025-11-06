
Turtle= function(canvas){
    this.x = 0;
    this.y= 0;
    this.angleInRadians= 0;
    this.penDown= false;
    this.penColor= "#000000";
    this.lineWidth =  2;
    this.ct = canvas.getContext("2d");
    console.log(this.ct);
};

Turtle.prototype = {
  logPenStatus: function(){
    console.log('x=' + this.x + "; y=" + this.y + '; angle = ' + this.angle + '; penDown = ' + this.penDown);
  },
  moveto: function(x,y){
    this.x = x;
    this.y = y;
  },
  forward: function (length) {

    var x0 = this.x,
        y0 = this.y;
    this.x += length * Math.sin(this.angleInRadians);
    this.y += length * Math.cos(this.angleInRadians);
    if (this.ct) {
        if (this.penDown) {
           
            this.ct.beginPath();
            this.ct.lineWidth = this.lineWidth;
            this.ct.strokeStyle = this.penColor;
            this.ct.moveTo(x0, y0);
            this.ct.lineTo(this.x, this.y);
            this.ct.stroke();
        }
    } else {
        this.ct.moveTo(this.x, this.y);
    }
    return this;
  },

  backward: function (length) {
    this.forward(-length);
    return this;
  },

  left: function (angleInDegrees) {
 
    this.angleInRadians += angleInDegrees * Math.PI / 180.0;
    return this;
  },
  right: function (angleInDegrees) {
    this.left(-angleInDegrees);
    return this;
  },
  angle: function () {
 
    return this.angleInRadians * 180.0 / Math.PI;
  }


};
