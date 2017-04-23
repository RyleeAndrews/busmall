'use strict';

var count = 0;
function Photo (name, filename){
  this.name = name;
  this.src = './img/' + filename;
  this.clickAmount = 0;
  this.displayCount = 0;
}

var photosOnSecondToLastScreen = [];
var photosOnPreviousScreen = [];
var photosOnScreen = [];
var photos = [
  new Photo ('r2d2 bag', 'bag.jpg'),
  new Photo ('banana slicer', 'banana.jpg'),
  new Photo ('ipad toilet paper stand', 'bathroom.jpg'),
  new Photo ('yellow boots', 'boots.jpg'),
  new Photo ('all in one breakfast', 'breakfast.jpg'),
  new Photo ('meatball bubblegum', 'bubblegum.jpg'),
  new Photo ('red chair', 'chair.jpg'),
  new Photo ('dark lord cthulhu', 'cthulhu.jpg'),
  new Photo ('dog duck', 'dog-duck.jpg'),
  new Photo ('dragon meat', 'dragon.jpg'),
  new Photo ('fork pen', 'pen.jpg'),
  new Photo ('pet sweepers', 'pet-sweep.jpg'),
  new Photo ('pizza scissors', 'scissors.jpg'),
  new Photo ('shark sleeping bag', 'shark.jpg'),
  new Photo ('baby sweepers', 'sweep.png'),
  new Photo ('star wars sleeping bag', 'tauntaun.jpg'),
  new Photo ('unicorn meat', 'unicorn.jpg'),
  new Photo ('usb tentacle', 'usb.gif'),
  new Photo ('water can','water-can.jpg'),
  new Photo ('cool wine glass','wine-glass.jpg'),

];
function getRandomIndex(list){
  return Math.floor (Math.random() * list.length);
}

function getThreeNewPhotos(){
  var el;
  photos = photos.concat(photosOnSecondToLastScreen);
  photosOnSecondToLastScreen = photosOnPreviousScreen;
  photosOnPreviousScreen = photosOnScreen;
  photosOnScreen = [];
  for (var i = 0; i < 3; i++){
      var nextPhoto = photosOnScreen.splice(getRandomIndex(photos), 1);
      photosOnScreen = photosOnScreen.concat(nextPhoto);
      el = document.getElementById('' + i);

      el.src = nextPhoto[0].src;
      nextPhoto[0].displayCount++;
  }
}
