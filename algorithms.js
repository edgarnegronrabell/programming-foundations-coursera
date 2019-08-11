//Global image value
let image;
let canvas = document.getElementById('imageDisplay');

// Allows user to upload an image to the page.
let uploadImage = () => {
let inputValue = document.getElementById('finput');
image = new SimpleImage(inputValue);
image.drawTo(canvas);
}

// Foreground image and background image to be used with
// green screen algorithm.
let fgImage;
let fgCanvas = document.getElementById('fgimage');

let uploadFgImage = () => {
  let inputValue = document.getElementById('fginput');
  fgImage = new SimpleImage(inputValue);
  fgImage.drawTo(fgCanvas);
  }
// Background image and background image to be used with
// green screen algorithm.
let bgImage;
let bgCanvas = document.getElementById('bgimage'); 
  let uploadBgImage = () => {
    let inputValue = document.getElementById('bginput');
    bgImage = new SimpleImage(inputValue);
    bgImage.drawTo(bgCanvas);
    }

let grayscale = () => {
// Loops over an image, gets RGB values, gets the average of those values,
// sets new values and returns a Grayscale image. 
  for( let pixel of image.values() ) {
    let redValue = pixel.getRed();
    let greenValue = pixel.getGreen();
    let blueValue = pixel.getBlue();
    let avg = (redValue + greenValue + blueValue) / 3;
      pixel.setRed(avg);
      pixel.setGreen(avg);
      pixel.setBlue(avg);
  }  image.drawTo(canvas);
}

let greenscreen = () => {

  for (let pixel of fgImage.values() ) {
    
  }
}


