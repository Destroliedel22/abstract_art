//variabels
//mijn booleans
let pressed = false;
//mijn arrays met strings en numbers
const shape = ['rect', 'circle', 'triangle'];
//mijn numbers
let pressedEnter = 0;
let pressedBackspace = 0;

//de setup functie
function setup() 
{
  //canvas maken en background kleur
  createCanvas(1400, 700);
  background(random(256), random(256), random(256));
}

//de draw functie
function draw() 
{
  fill(220);
  strokeWeight(0);
  rect(0, 620, 230, 80);

  fill(0);
  textSize(20);
  text("ENTER = generate", 10, 650);
  text("BACKSPACE = reset", 10, 680);

  //de texten die er staan
  strokeWeight(random(5));
  textSize(30);
  text('random colored shapes generator', 10,30);

  //deze texten laat een variable in de text zien die kan veranderen
  textSize(20);
  text(`times pressed 'ENTER': ${pressedEnter}`, 10, 55);

  text(`times pressed 'BACKSPACE : ${pressedBackspace}`, 1100, 25);

  //als BACKSPACE is geklikt is pressed 'false' en komt deze text tevoorschijn
  if(pressed == false)
  {
    textSize(50);
    text("press 'ENTER' to generate", 420, 350);
  }

  //als ENTER is geklikt is pressed 'true' en komt deze text tevoorschijn
  else if(pressed == true)
  {
    textSize(50);
    text("press 'BACKSPACE' to reset", 420, 600);
  }

  //laat je schrikken als je 10 keer enter klikt of 5 keer backspace
  if(pressedEnter == 10 || pressedBackspace == 5)
  {
    background(0);
    textSize(500);
    fill('white');
    stroke(0);
    text('BOO', 150, 500);
    textSize(50);
    text("didn't expect that did ya", 450, 600)
  }
}

//deze functie laat iets uitvoeren als je op de gekozen key klikt
function keyPressed()
{
  //als ENTER is geklikt wordt alles hierin uitgevoerd
  if(keyCode === ENTER)
  {
    pressed = true;
    background(random(256), random(256), random(256));
    //deze for loop doet random tussen 5 en 30 keer alles wat erin staat
    for(let i = 0; i < random(5, 30); i++)
    {
      if(pressed == true)
      {
        //de dikte en kleur van alle shapes
        stroke(random(256), random(256), random(256));
        strokeWeight(random(0,25));
        fill(random(256), random(256), random(256));

        //een for loop voor het tekenen van de shapes in een random volgorde
        for(let i = 0; i < 3; i++)
        {
          //als het random getal 0 is tekent hij een rectangle
          if(shape[int(random(3))] == 'rect')
          {
            rect(random(0, 1400),random(0, 700), random(0, 400), random(0, 400));
          }

          //als het random getal 1 is tekent hij een circle
          else if(shape[int(random(3))] == 'circle')
          {
            circle(random(0, 1400), random(0, 700), random(0, 400));
          }

          //als het random getal 2 is tekent hij een triangle
          else if(shape[int(random(3))] == 'triangle')
          {
            triangle(random(0, 1400), random(0,700), random(0, 1400), random(0,700), random(0, 1400), random(0,700));
          }
        }

        //dit is de text van de generator rechtsboven op de canvas
        strokeWeight(3);
        stroke(random(256), random(256), random(256));
        textSize(30);
        text('random colored shapes generator', 10,30);
      }
    }

    for(let i = 0; i < 1; i++)
    {
      if(pressed == true)
      {
        pressedEnter++;
      }
    }
  }

  //als je op backspace klikt gebeurt alles wat hierin staat
  else if(keyCode === BACKSPACE){
    pressed = false;
    background(random(256), random(256), random(256));
    //deze 2 dingen zijn voor het verander van hoeveel je hebt geklikt
    pressedEnter = 0;
    pressedBackspace++;
  }
}