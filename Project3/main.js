$(window).on('load', function () {


  var
    ctx = $('#lcanvas')[0].getContext('2d'),
    mouse = {x: -100, y: -100};
  
  // fill black
  // ctx.fillStyle = 'red';

  var img = document.getElementById("lamp")
  var pat=ctx.createPattern(img,"repeat");
  ctx.fillStyle=pat;
  


  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // track mouse
  $('#lcanvas').on('mousemove.fog', function (evt) {
    mouse.x = evt.offsetX;
    mouse.y = evt.offsetY;
  });

  (function animloop(now) {
    var
      frame = webkitRequestAnimationFrame(animloop),
      x = mouse.x,
      y = mouse.y,
      r = 80,
      grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    
    grad.addColorStop(0, "rgba(0, 0, 0, 255)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = grad;
    ctx.arc(x, y, r, 0, 2 * Math.PI, true);
    ctx.fill();
  }(Date.now()));


});



$(window).on('load', function () {
  var
    ctx = $('#lcanvas2')[0].getContext('2d'),
    mouse = {x: -100, y: -100};
  
 var img = document.getElementById("lamp3")
  var pat=ctx.createPattern(img,"repeat");
  ctx.fillStyle=pat;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // track mouse
  $('#lcanvas2').on('mousemove.fog', function (evt) {
    mouse.x = evt.offsetX;
    mouse.y = evt.offsetY;
  });

  (function animloop(now) {
    var
      frame = webkitRequestAnimationFrame(animloop),
      x = mouse.x,
      y = mouse.y,
      r = 80,
      grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    
    grad.addColorStop(0, "rgba(0, 0, 0, 255)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = grad;
    ctx.arc(x, y, r, 0, 2 * Math.PI, true);
    ctx.fill();
  }(Date.now()));


});



$(window).on('load', function () {
  var
    ctx = $('#lcanvas3')[0].getContext('2d'),
    mouse = {x: -100, y: -100};
  
  var img = document.getElementById("lamp5")
  var pat=ctx.createPattern(img,"repeat");
  ctx.fillStyle=pat;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // track mouse
  $('#lcanvas3').on('mousemove.fog', function (evt) {
    mouse.x = evt.offsetX;
    mouse.y = evt.offsetY;
  });

  (function animloop(now) {
    var
      frame = webkitRequestAnimationFrame(animloop),
      x = mouse.x,
      y = mouse.y,
      r = 80,
      grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    
    grad.addColorStop(0, "rgba(0, 0, 0, 255)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = grad;
    ctx.arc(x, y, r, 0, 2 * Math.PI, true);
    ctx.fill();
  }(Date.now()));


});


$(window).on('load', function () {
  var
    ctx = $('#lcanvas4')[0].getContext('2d'),
    mouse = {x: -100, y: -100};
  
  var img = document.getElementById("lamp7")
  var pat=ctx.createPattern(img,"repeat");
  ctx.fillStyle=pat;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // track mouse
  $('#lcanvas4').on('mousemove.fog', function (evt) {
    mouse.x = evt.offsetX;
    mouse.y = evt.offsetY;
  });

  (function animloop(now) {
    var
      frame = webkitRequestAnimationFrame(animloop),
      x = mouse.x,
      y = mouse.y,
      r = 80,
      grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    
    grad.addColorStop(0, "rgba(0, 0, 0, 255)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = grad;
    ctx.arc(x, y, r, 0, 2 * Math.PI, true);
    ctx.fill();
  }(Date.now()));


});



$(window).on('load', function () {
  var
    ctx = $('#lcanvas5')[0].getContext('2d'),
    mouse = {x: -100, y: -100};
  
  var img = document.getElementById("lamp9")
  var pat=ctx.createPattern(img,"repeat");
  ctx.fillStyle=pat;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // track mouse
  $('#lcanvas5').on('mousemove.fog', function (evt) {
    mouse.x = evt.offsetX;
    mouse.y = evt.offsetY;
  });

  (function animloop(now) {
    var
      frame = webkitRequestAnimationFrame(animloop),
      x = mouse.x,
      y = mouse.y,
      r = 80,
      grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    
    grad.addColorStop(0, "rgba(0, 0, 0, 255)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = grad;
    ctx.arc(x, y, r, 0, 2 * Math.PI, true);
    ctx.fill();
  }(Date.now()));


});




$(window).on('load', function () {
  var
    ctx = $('#lcanvas6')[0].getContext('2d'),
    mouse = {x: -100, y: -100};
  
  var img = document.getElementById("lamp11")
  var pat=ctx.createPattern(img,"repeat");
  ctx.fillStyle=pat;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);

  // track mouse
  $('#lcanvas6').on('mousemove.fog', function (evt) {
    mouse.x = evt.offsetX;
    mouse.y = evt.offsetY;
  });

  (function animloop(now) {
    var
      frame = webkitRequestAnimationFrame(animloop),
      x = mouse.x,
      y = mouse.y,
      r = 80,
      grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    
    grad.addColorStop(0, "rgba(0, 0, 0, 255)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = grad;
    ctx.arc(x, y, r, 0, 2 * Math.PI, true);
    ctx.fill();
  }(Date.now()));


});


























$(window).on('load', function () {
  var
    ctx = $('#rcanvas')[0].getContext('2d'),
    mouse = {x: -100, y: -100};
  
  // fill black
  // ctx.fillStyle = 'white';
  // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      var img = document.getElementById("lamp12")
  var pat=ctx.createPattern(img,"repeat");
  ctx.fillStyle=pat;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);



  // track mouse
  $('#rcanvas').on('mousemove.fog', function (evt) {
    mouse.x = evt.offsetX;
    mouse.y = evt.offsetY;
  });

  (function animloop(now) {
    var
      frame = webkitRequestAnimationFrame(animloop),
      x = mouse.x,
      y = mouse.y,
      r = 80,
      grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    
    grad.addColorStop(0, "rgba(0, 0, 0, 255)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = grad;
    ctx.arc(x, y, r, 0, 2 * Math.PI, true);
    ctx.fill();
  }(Date.now()));


});


$(window).on('load', function () {
  var
    ctx = $('#rcanvas2')[0].getContext('2d'),
    mouse = {x: -100, y: -100};
  
  // fill black
  // ctx.fillStyle = 'white';
  // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      var img = document.getElementById("lamp10")
  var pat=ctx.createPattern(img,"repeat");
  ctx.fillStyle=pat;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);



  // track mouse
  $('#rcanvas2').on('mousemove.fog', function (evt) {
    mouse.x = evt.offsetX;
    mouse.y = evt.offsetY;
  });

  (function animloop(now) {
    var
      frame = webkitRequestAnimationFrame(animloop),
      x = mouse.x,
      y = mouse.y,
      r = 80,
      grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    
    grad.addColorStop(0, "rgba(0, 0, 0, 255)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = grad;
    ctx.arc(x, y, r, 0, 2 * Math.PI, true);
    ctx.fill();
  }(Date.now()));


});


$(window).on('load', function () {
  var
    ctx = $('#rcanvas3')[0].getContext('2d'),
    mouse = {x: -100, y: -100};
  
  // fill black
  // ctx.fillStyle = 'white';
  // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      var img = document.getElementById("lamp8")
  var pat=ctx.createPattern(img,"repeat");
  ctx.fillStyle=pat;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);



  // track mouse
  $('#rcanvas3').on('mousemove.fog', function (evt) {
    mouse.x = evt.offsetX;
    mouse.y = evt.offsetY;
  });

  (function animloop(now) {
    var
      frame = webkitRequestAnimationFrame(animloop),
      x = mouse.x,
      y = mouse.y,
      r = 80,
      grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    
    grad.addColorStop(0, "rgba(0, 0, 0, 255)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = grad;
    ctx.arc(x, y, r, 0, 2 * Math.PI, true);
    ctx.fill();
  }(Date.now()));


});


$(window).on('load', function () {
  var
    ctx = $('#rcanvas4')[0].getContext('2d'),
    mouse = {x: -100, y: -100};
  
  // fill black
  // ctx.fillStyle = 'white';
  // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      var img = document.getElementById("lamp6")
  var pat=ctx.createPattern(img,"repeat");
  ctx.fillStyle=pat;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);



  // track mouse
  $('#rcanvas4').on('mousemove.fog', function (evt) {
    mouse.x = evt.offsetX;
    mouse.y = evt.offsetY;
  });

  (function animloop(now) {
    var
      frame = webkitRequestAnimationFrame(animloop),
      x = mouse.x,
      y = mouse.y,
      r = 80,
      grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    
    grad.addColorStop(0, "rgba(0, 0, 0, 255)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = grad;
    ctx.arc(x, y, r, 0, 2 * Math.PI, true);
    ctx.fill();
  }(Date.now()));


});




$(window).on('load', function () {
  var
    ctx = $('#rcanvas5')[0].getContext('2d'),
    mouse = {x: -100, y: -100};
  
  // fill black
  // ctx.fillStyle = 'white';
  // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      var img = document.getElementById("lamp4")
  var pat=ctx.createPattern(img,"repeat");
  ctx.fillStyle=pat;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);



  // track mouse
  $('#rcanvas5').on('mousemove.fog', function (evt) {
    mouse.x = evt.offsetX;
    mouse.y = evt.offsetY;
  });

  (function animloop(now) {
    var
      frame = webkitRequestAnimationFrame(animloop),
      x = mouse.x,
      y = mouse.y,
      r = 80,
      grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    
    grad.addColorStop(0, "rgba(0, 0, 0, 255)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = grad;
    ctx.arc(x, y, r, 0, 2 * Math.PI, true);
    ctx.fill();
  }(Date.now()));


});



$(window).on('load', function () {
  var
    ctx = $('#rcanvas6')[0].getContext('2d'),
    mouse = {x: -100, y: -100};
  
  // fill black
  // ctx.fillStyle = 'white';
  // ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);
      var img = document.getElementById("lamp2")
  var pat=ctx.createPattern(img,"repeat");
  ctx.fillStyle=pat;
  ctx.fillRect(0, 0, ctx.canvas.width, ctx.canvas.height);



  // track mouse
  $('#rcanvas6').on('mousemove.fog', function (evt) {
    mouse.x = evt.offsetX;
    mouse.y = evt.offsetY;
  });

  (function animloop(now) {
    var
      frame = webkitRequestAnimationFrame(animloop),
      x = mouse.x,
      y = mouse.y,
      r = 80,
      grad = ctx.createRadialGradient(x, y, 0, x, y, r);
    
    grad.addColorStop(0, "rgba(0, 0, 0, 255)");
    grad.addColorStop(1, "rgba(0, 0, 0, 0)");
    
    ctx.globalCompositeOperation = 'destination-out';
    ctx.fillStyle = grad;
    ctx.arc(x, y, r, 0, 2 * Math.PI, true);
    ctx.fill();
  }(Date.now()));


});















$(document).ready(function(){ 
     $(window).scroll(function(){
       $('.right').css('transform', 'translate3d(0,' + $(this).scrollTop()*2 + 'px, 0)'); 
    }).scroll();
});  




