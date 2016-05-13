'use strict';
if (this.FunWithCanvas === undefined) this.FunWithCanvas = {};

(function(context) {

  function start() {

    var theCanvas = document.querySelector('#the-canvas');
    var context = theCanvas.getContext('2d');

    context.strokeStyle = '#00F';

    var data = [30, 50, 90, 87, 75, 120, 47, 15, 120, 65, 60];
    context.beginPath();

    //define the path

    context.stroke();

  }

  context.start = start;

})(window.FunWithCanvas);
