function preload()
{

}
function setup()
{
    canvas= createCanvas(640,480);
    canvas.position(110,250);
    video = createCapture(VIDEO);
    video.hide();
}
function draw()
{
    image(video, 0, 0, 640, 480);

    fill(0, 128, 0);
    stroke(0, 128, 0);
    circle(100, 60, 70);
    circle(600, 50, 70);
    rect(70, 40, 500, 20);
    rect(70, 400, 550, 20);
    circle(70, 400, 70);
    rect(70, 80, 20, 320);
    rect(600, 70, 20, 330);
    circle(600, 400, 70);
}

function take_snapshot()
{
    save('filter.png');
}