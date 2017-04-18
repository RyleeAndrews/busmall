'use strict';

var Image = function(src){
  this.src = src;
  this.count = 0;
  this.seen = 0;
};

var ImageList = function(imgArray){
  this.items = imgArray;
};

ImageList.prototype.renderImageList = function(){
  var firstImageIndex = Math.floor(Math.random() * this.items.length) + 0;
  var secondImageIndex, thirdImageIndex;
  if(firstImageIndex <= this.items.length -2){
    firstImageIndex = 0;
  }
  secondImageIndex = firstImageIndex + 1;
  thirdImageIndex = firstImageIndex + 2;
console.log(firstImageIndex);
  var image1 = this.items[firstImageIndex];
  var image2 = this.items[secondImageIndex];
  var image3 = this.items[thirdImageIndex];

  image1.seen = image1.seen + 1;
  image2.seen = image2.seen + 1;
  image3.seen = image3.seen + 1;

  var selectImages = [image1,image2,image3];
  return selectImages;
};
 function renderRandomImages(ImageList){

 }
var imgArray = [];
var imgSrcArray = [
  'img/bag.jpg',
  'img/banana.jpg',
  'bathroom.jpg',
  'boots.jpg',
  'breakfast.jpg',
  'bubblegum.jpg',
  'chair.jpg',
  'cthulhu.jpg',
  'dog-duck.jpg',
  'dragon.jpg',
  'pen.jpg',
  'pet-sweep.jpg',
  'scissors.jpg',
  'shark.jpg',
  'sweep.png',
  'tauntaun.jpg',
  'unicorn.jpg',
  'usb.gif',
  'water-can.jpg',
  'wine-glass.jpg',

];
