quick_draw_data_set=["apple","ball","cat","dog","fish","human","aeroplane"];
random_no = Math.floor((Math.round()*quick_draw_data_set.length)+1);
element = quick_draw_data_set[random_no];
document.getElementById("skitch_to_draw").innerHTML = element;
timer_counter = 0;
time_checker = "";
drawn_sketch = "";
answer_holder = "";
score = 0;

function preload()
{
 doodle = ml5.imageClassifier("DoodleNet");
}

function setup()
{
 canvas = createCanvas(280,280);
 canvas.center();
 background("white");
 canvas.mouseReleased(classifyCanvas);
}

function draw()
{
 check_sketch()
 if(drawn_sketch == element)
 {
  answer_holder = "set";
  score = score+1;
  document.getElementById("scire").innerHTML = "Score: "+score;
 }

 strokeWeight(25);
 stroke("Black");
 if(mouseIsPressed)
 {
    line(pmouseX,pmouseY,mouseX,mouseY);

 }
}

function check_sketch()
{
 timer_counter = timer_counter+1;
 document.getElementById("tomer").innerHTML = "Timer: "+timer_counter;
 console.log("timer_counter");
 if(timer_counter>500)
 {
  timer_counter = 0;
  time_checker = "Completed";
 }

 if(time_checker == "Completed" || answer_holder == "set")
 {
  time_checker = "";
  answer_holder = "";
  updateCanvas();
 }
}

function updateCanvas()
{
 background("white");

 random_no = Math.floor((Math.round()*quick_draw_data_set.length)+1);
 element = quick_draw_data_set[random_no];
 document.getElementById("skitch_to_draw").innerHTML = element;
}

function classifyCanvas()
{
    doodle.classify(canvas, gotResult);
}

function gotResult(error,results)
{
    if(error)
    {
        console.error(error);
    }
    console.log(results);
    drawn_sketch = results[0].label;
    document.getElementById("your_skitch").innerHTML = drawn_sketch;
    document.getElementById("concodence").innerHTML = Math.floor(results[0].confidence*100)+"%";
    
    
}
