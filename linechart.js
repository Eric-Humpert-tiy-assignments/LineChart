'use strict';
if (this.FunWithCanvas === undefined) this.FunWithCanvas = {};

(function(context) {

  function start() {

    var theCanvas = document.querySelector('#the-canvas');
    var context = theCanvas.getContext('2d');
    var x = 0;
    var height = theCanvas.clientHeight;
    var width = theCanvas.clientWidth;

    console.log(height, width);
    context.strokeStyle = '#00F';

    var data = [30, 50, 90, 87, 75, 120, 47, 15, 120, 65, 60];
    context.beginPath();
    //define the path
    context.moveTo(x, height-data[0]);
    for (var i= 1; i < data.length; i++) {

      x += 50;
      context.lineTo(x, height-data[i]);
    }
    context.lineTo(width,height);
    context.lineTo(0, height);
    context.closePath();
    context.fillStyle = "#FF0000";
    context.fill();
    context.stroke();

  }

  context.start = start;

})(window.FunWithCanvas);
