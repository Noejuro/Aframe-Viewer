document.querySelector('#tank').addEventListener('click', function () {
  var sceneEl = document.querySelector('a-scene'); 
  var tanquePanel = sceneEl.querySelector('#tankP');
  if(this.getAttribute('visible')){
    tanquePanel.setAttribute('visible',!tanquePanel.getAttribute('visible'));
  }
});

document.querySelector('#tankP').addEventListener('click', function () {
  this.setAttribute('visible',!this.getAttribute('visible'))
});

document.querySelector('#cisternaE').addEventListener('click', function () {
  var sceneEl = document.querySelector('a-scene'); 
  var motorPanel = sceneEl.querySelector('#cisternaP');
  if(this.getAttribute('visible')){
    motorPanel.setAttribute('visible',!motorPanel.getAttribute('visible'));
  }
});

document.querySelector('#cisternaP').addEventListener('click', function () {
  this.setAttribute('visible',!this.getAttribute('visible'))
});

document.querySelector('#bombaE').addEventListener('click', function () {
  var sceneEl = document.querySelector('a-scene'); 
  var hydranPanel = sceneEl.querySelector('#bombaP');
  if(this.getAttribute('visible')){
    hydranPanel.setAttribute('visible',!hydranPanel.getAttribute('visible'));
  }
});

document.querySelector('#bombaP').addEventListener('click', function () {
  this.setAttribute('visible',!this.getAttribute('visible'))
});

document.querySelector('#tuberiasE').addEventListener('click', function () {
  var sceneEl = document.querySelector('a-scene'); 
  var hydranPanel = sceneEl.querySelector('#tuberiasP');
  if(this.getAttribute('visible')){
    hydranPanel.setAttribute('visible',!hydranPanel.getAttribute('visible'));
  }
});

document.querySelector('#tuberiasP').addEventListener('click', function () {
  this.setAttribute('visible',!this.getAttribute('visible'))
});

document.querySelector('#valvula_esferaE').addEventListener('click', function () {
  var sceneEl = document.querySelector('a-scene'); 
  var hydranPanel = sceneEl.querySelector('#valvula_esferaP');
  if(this.getAttribute('visible')){
    hydranPanel.setAttribute('visible',!hydranPanel.getAttribute('visible'));
  }
});

document.querySelector('#valvula_esferaP').addEventListener('click', function () {
  this.setAttribute('visible',!this.getAttribute('visible'))
});

document.querySelector('#multiconectorE').addEventListener('click', function () {
  var sceneEl = document.querySelector('a-scene'); 
  var hydranPanel = sceneEl.querySelector('#multiconectorP');
  if(this.getAttribute('visible')){
    hydranPanel.setAttribute('visible',!hydranPanel.getAttribute('visible'));
  }
});

document.querySelector('#multiconectorP').addEventListener('click', function () {
  this.setAttribute('visible',!this.getAttribute('visible'))
});

document.querySelector('#jarro_de_aireE').addEventListener('click', function () {
  var sceneEl = document.querySelector('a-scene'); 
  var hydranPanel = sceneEl.querySelector('#jarro_de_aireP');
  if(this.getAttribute('visible')){
    hydranPanel.setAttribute('visible',!hydranPanel.getAttribute('visible'));
  }
});

document.querySelector('#jarro_de_aireP').addEventListener('click', function () {
  this.setAttribute('visible',!this.getAttribute('visible'))
});

document.querySelector('#hydran').addEventListener('model-loaded', function() {
  //document.getElementById("loader").style.display = "none";
  document.getElementById("blocker").className = "animate-top";
  setTimeout(function(){ document.getElementById("blocker").style.display = "none"; }, 1000);
});

function clickTank() {
    // Solution for Handling Events.
    var sceneEl = document.querySelector('a-scene'); 
    var tanqueV = sceneEl.querySelector('#tank');
    
    
    tanqueV.setAttribute('visible', !tanqueV.getAttribute('visible'));
  }

function clickBomba() {
    // Solution for Handling Events.
    var sceneEl = document.querySelector('a-scene'); 
    var pumpV = sceneEl.querySelector('#bombaE');
    
    
    pumpV.setAttribute('visible', !pumpV.getAttribute('visible'));
}

function clickCisterna() {
  // Solution for Handling Events.
  var sceneEl = document.querySelector('a-scene'); 
  var hydranV = sceneEl.querySelector('#cisternaE');
  
  
  hydranV.setAttribute('visible', !hydranV.getAttribute('visible'));
}

function clickTuberias() {
  // Solution for Handling Events.
  var sceneEl = document.querySelector('a-scene'); 
  var hydranV = sceneEl.querySelector('#tuberiasE');
  
  
  hydranV.setAttribute('visible', !hydranV.getAttribute('visible'));
}

function clickValvulaE() {
  // Solution for Handling Events.
  var sceneEl = document.querySelector('a-scene'); 
  var hydranV = sceneEl.querySelector('#valvula_esferaE');
  
  
  hydranV.setAttribute('visible', !hydranV.getAttribute('visible'));
}

function clickJarro() {
  // Solution for Handling Events.
  var sceneEl = document.querySelector('a-scene'); 
  var hydranV = sceneEl.querySelector('#jarro_de_aireE');
  
  
  hydranV.setAttribute('visible', !hydranV.getAttribute('visible'));
}


function clickMulticonector() {
  // Solution for Handling Events.
  var sceneEl = document.querySelector('a-scene'); 
  var hydranV = sceneEl.querySelector('#multiconectorE');
  
  
  hydranV.setAttribute('visible', !hydranV.getAttribute('visible'));
}




