function setup()
{
    video = createCapture(VIDEO);
    video.size(400, 300);

    canvas = createCanvas(500, 400);
    canvas.position(600, 260);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw()
{
    background('#BCB3BB');
}

function modelLoaded()
{
    console.log("PoseNet is Initialized!");
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
    }
}