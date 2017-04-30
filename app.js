'use strict';
var main = document.getElementById('main');
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

function getRandomPhoto(list){
  var randomIndex = getRandomIndex(list);
  var noNoPhotos = photosOnPreviousScreen.concat(photosOnSecondToLastScreen).concat(photosOnScreen);
  var photo = list[randomIndex];
  if(noNoPhotos.indexOf(photo) > -1) {
    return getRandomPhoto(list);
  } else {
    return photo;
  }
}

function getThreeNewPhotos(){
  var el;
  photosOnSecondToLastScreen = photosOnPreviousScreen;
  photosOnPreviousScreen = photosOnScreen;
  photosOnScreen = [];
  for (var i = 0; i < 3; i++){
    var nextPhoto = getRandomPhoto(photos);
    photosOnScreen = photosOnScreen.concat(nextPhoto);

    el = document.getElementById('' + i);

    el.src = nextPhoto.src;
    nextPhoto.displayCount++;
  }
}
main.addEventListener('click',handleClick);
function handleClick(event){
  if(event.target.tagName == 'IMG') {
    photosOnScreen[event.target.id].clickAmount++;
    count++;
    if(count===25){
      main.textContent = '';
      renderChart();

    }else {
      getThreeNewPhotos();

    }
  }
}
getThreeNewPhotos();
function renderChart(){
  photos = photos.concat(photosOnScreen);
  photos = photos.concat(photosOnPreviousScreen);
  photos = photos.concat(photosOnSecondToLastScreen);

  main.textContent = '';

  var canvas = document.createElement('canvas');
  canvas.width = main.clientWidth;
  canvas.height = main.clientWidth;
  main.appendChild(canvas);

  var ctx = canvas.getContext('2d');
  ctx.fillRect(0, 0, 50, 50);

  var data = {
    labels: [],
    datasets: [
      {
        label: 'Click Amount',
        backgroundColor:'#D80033',
        borderColor: '#002F32',
        borderWidth: 1.5,
        data: [],
      },
      {
        label: 'Display Count',
        backgroundColor: '#61A607',
        borderColor: '#002F32',
        borderWidth: 1.5,
        data: [],
      },
    ],
  };

  var chartPhoto;
  for(var i=0; i< photos.length; i++){
    chartPhoto = photos[i];
    data.labels.push(chartPhoto.name);
    data.datasets[0].data.push(chartPhoto.clickAmount);
    data.datasets[1].data.push(chartPhoto.displayCount);
    localStorage.setItem('photos',JSON.stringify(photos));
  }

  new Chart(ctx, {
    type: 'bar',
    data: data,
  });
}
