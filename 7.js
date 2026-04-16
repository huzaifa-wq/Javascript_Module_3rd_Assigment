'use strict';


const trigger = document.getElementById('trigger');
const target = document.getElementById('target');

trigger.addEventListener('mouseover', function() {
  target.src = 'img/picB.jpg'; // switch to picB
});


trigger.addEventListener('mouseout', function() {
  target.src = 'img/picA.jpg'; // back to picA
});
