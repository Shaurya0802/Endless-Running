var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["165406bc-01a4-4d3d-b46b-e8cb6de11273","432a337a-f3cb-4662-892a-932c729bdeeb","0a2ba9d2-277d-4239-ad91-f73a580d5294","7388129d-5ec4-4034-8dff-49bfbd8bbf6c","a6ea6cd6-7ceb-448d-9753-4795b4b6a191"],"propsByKey":{"165406bc-01a4-4d3d-b46b-e8cb6de11273":{"name":"enemy1","sourceUrl":"assets/api/v1/animation-library/gamelab/SAFuCJHV.dgXCcH9OpiEssbcokha1O9H/category_vehicles/enemyBlack1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"SAFuCJHV.dgXCcH9OpiEssbcokha1O9H","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/SAFuCJHV.dgXCcH9OpiEssbcokha1O9H/category_vehicles/enemyBlack1.png"},"432a337a-f3cb-4662-892a-932c729bdeeb":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/CT_QX4GP98MjyfkLuoGVWhnjRSBOZpE_/category_vehicles/enemyBlue1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"CT_QX4GP98MjyfkLuoGVWhnjRSBOZpE_","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CT_QX4GP98MjyfkLuoGVWhnjRSBOZpE_/category_vehicles/enemyBlue1.png"},"0a2ba9d2-277d-4239-ad91-f73a580d5294":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dTpG9O4OnSOMVUIo_K2oybDFXSS6o0WA/category_vehicles/enemyRed1.png","frameSize":{"x":93,"y":84},"frameCount":1,"looping":true,"frameDelay":2,"version":"dTpG9O4OnSOMVUIo_K2oybDFXSS6o0WA","loadedFromSource":true,"saved":true,"sourceSize":{"x":93,"y":84},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dTpG9O4OnSOMVUIo_K2oybDFXSS6o0WA/category_vehicles/enemyRed1.png"},"7388129d-5ec4-4034-8dff-49bfbd8bbf6c":{"name":"playerShip2_red_1","sourceUrl":"assets/api/v1/animation-library/gamelab/7eOaJzJi2IJDNiuNWLPRwYIsKsqQjpHA/category_vehicles/playerShip2_red.png","frameSize":{"x":112,"y":75},"frameCount":1,"looping":true,"frameDelay":2,"version":"7eOaJzJi2IJDNiuNWLPRwYIsKsqQjpHA","loadedFromSource":true,"saved":true,"sourceSize":{"x":112,"y":75},"rootRelativePath":"assets/api/v1/animation-library/gamelab/7eOaJzJi2IJDNiuNWLPRwYIsKsqQjpHA/category_vehicles/playerShip2_red.png"},"a6ea6cd6-7ceb-448d-9753-4795b4b6a191":{"name":"space.jpg_1","sourceUrl":"assets/v3/animations/saKxiSko4aZYdEwdGxia4VBXV8IAUnqBdWmwO9fFSgY/a6ea6cd6-7ceb-448d-9753-4795b4b6a191.png","frameSize":{"x":216,"y":233},"frameCount":1,"looping":true,"frameDelay":4,"version":"hfd56GLzq9o9C7LrCE2hXsyiDIcs7d6o","loadedFromSource":true,"saved":true,"sourceSize":{"x":216,"y":233},"rootRelativePath":"assets/v3/animations/saKxiSko4aZYdEwdGxia4VBXV8IAUnqBdWmwO9fFSgY/a6ea6cd6-7ceb-448d-9753-4795b4b6a191.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var score = 0;

var space = createSprite(200,230,400,400);
space.setAnimation("space.jpg_1");
space.scale = 3.5;
space.y=space.height/2;

textSize(30);
textFont("Arial Black");
stroke("red");                                                                                                                                                                                                  ("red");
fill("white");

var player = createSprite(190, 360, 20, 20);
player.setAnimation("playerShip2_red_1");
player.scale = 0.8;

var bulletGroup = createGroup();
var enemy1Group = createGroup();
var enemy2Group = createGroup();
var enemy3Group = createGroup();

function draw() {
  background("black");                                
  var rand = randomNumber(1,3);
  if (rand === 1) {
    createEnemy1();
  } else if(rand === 2) {
    createEnemy2();
  } else if(rand === 3){
    createEnemy3();
  }
 
  player.x = World.mouseX;
  
  space.velocityY = (2 + 4*score/30);
  
  if(space.y>400){
    space.y=space.height/2;
  }
  
  if(score % 10 === 0 && score > 0){
    playSound("assets/category_achievements/vibrate_success_1_up.mp3");                                                                                   
  }
 
  if(keyDown("space")){
    var bullet = createSprite(player.x,329,3,10);
    bullet.velocityY = -10;
    bullet.shapeColor = "yellow";
    playSound("assets/category_explosion/vibrant_smack_game_object_2.mp3");
    bullet.lifetime = 50;
    bulletGroup.add(bullet);
  }
     
  for(var i = 0;i < enemy1Group.maxDepth();i=i+1){
    if(enemy1Group.get(i)!=null && bulletGroup.isTouching(enemy1Group.get(i))){
      enemy1Group.get(i).destroy();
      score = score+1;
      playSound("assets/category_achievements/sharp_win_3.mp3");
    }
  }
  
  for(var m = 0;i < enemy2Group.maxDepth();i=i+1){
    if(enemy2Group.get(m)!=null && bulletGroup.isTouching(enemy2Group.get(m))){
      enemy2Group.get(m).destroy();
      score=score+1;
      playSound("assets/category_achievements/sharp_win_3.mp3");
    }
  }
  
  for(var n = 0;i<enemy3Group.maxDepth();i=i+1){
    if(enemy3Group.get(n)!=null && bulletGroup.isTouching(enemy3Group.get(n))){
      enemy3Group.get(n).destroy();
      score=score+1;
      playSound("assets/category_achievements/sharp_win_3.mp3");
       }
  }
  
  drawSprites();
  
  text("Score:" + score,50,50);
}

function createEnemy1(){
  if(World.frameCount % 120 === 0){
    var enemy1 = createSprite(randomNumber(20,280),0,20,20);
    enemy1.setAnimation("enemy1");
    enemy1.velocityY = (0.5 + 4*score/30);
      
    enemy1.scale = 0.5;
    enemy1.lifetime = 800;
    
    enemy1Group.add(enemy1);
  }
}
  
function createEnemy2(){
  if(World.frameCount % 120 === 0){
    var enemy2 = createSprite(randomNumber(20,380),0,20,20);
    enemy2.setAnimation("enemy2");
    enemy2.velocityY = (0.5 + 4*score/30);
      
    enemy2.scale = 0.5;
    enemy2.lifetime = 800;
    
    enemy2Group.add(enemy2);
  }
} 

function createEnemy3(){
  if(World.frameCount % 120 === 0){  
    var enemy3 = createSprite(randomNumber(20,380),0,20,20);
    enemy3.setAnimation("enemy3");
    enemy3.velocityY = (0.5 + 4*score/30);
      
    enemy3.scale = 0.5;
    enemy3.lifetime = 800;
    
    enemy3Group.add(enemy3);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
