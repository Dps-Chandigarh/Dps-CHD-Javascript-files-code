//Code starts 
//creating a shortnames(const) for Matter.Engine,Matter.World and Matter.Bodies
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
//creating variables
var Response1;
var Response2;
//using function setup
function setup(){
//creating canvas
var canvas = createCanvas(0,0)
//creating engine and world
engine = Engine.create();
world = engine.world;
//Asking user to enter their responses
Response1 = prompt("Please write your name to continue")
Response2 = prompt("Hi,"+Response1+"Please wait while we are searching for people nearby")
}
//using function draw
function draw(){
//setting background color
background(0);
//updating engine
Engine.update(engine);
//console.log(Response1,Response2)
}
//code ends
//written by Karan Aggarwal