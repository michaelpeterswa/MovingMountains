let CANVAS = 720;
let SCALE = 40;
let img;

function preload() {
    img = loadImage('assets/overlay_720x720.jpg');
    white = loadImage('assets/white.png');
}
function setup() {

    createCanvas(CANVAS, CANVAS);
    stroke(255); // Set line drawing color to white
    frameRate(30);

}
function draw() {
    image(white, 0, 0); // Set the background to black
    tint(255, 30)
    image(img, 0, 0)
    tint(255, 0)
    let NOISE_X = 0.02
    let NOISE_Y = 0.3
    let NOISE_MILLS = 0.00015 
    
    noFill();

    for (let y = 0; y < CANVAS/SCALE ; y++) {
        squigglyLine = []
        for (let x = 0; x < CANVAS; x++) {
            noiseVal = 255 * noise(x * NOISE_X, y * NOISE_Y, millis() * NOISE_MILLS);
            squigglyLine.push([x, y, noiseVal])
        }
        drawSquiggly(squigglyLine, y * SCALE)
    }
    // background(255);

}

function drawSquiggly(tmp, y){
    strokeWeight(2);
    beginShape();
    for (let i = 0; i < CANVAS; i++){
        yVal = (y - 2 * CANVAS/SCALE) + tmp[i][2] / 2
        curveVertex(i, yVal);
    }
    endShape();
}