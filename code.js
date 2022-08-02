var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["848314f8-d7dc-4755-a4a1-3782173096b1","26b80e63-bc0f-408d-b288-be2282aebd4e","dfc53be7-786c-4305-b8eb-81fa595e9903","47fade86-5bd1-4789-87af-896fb1433a7b","043deebf-64b8-4795-be8d-db5055414f2f","c26b6449-0b6c-4483-8486-107c0091c26e","3221caad-ae37-4eec-92a8-56bae4769e66","c4e310e0-8174-4127-a46e-0cbcc94b488b","e48a8058-087d-489d-9bcd-636bb7ddbe40","2ba29dab-5b6e-46cd-b532-4bca963fbf84","a4eb1f71-2d82-467f-b49b-3dcd39f6fbf0","9c9be89c-8943-4a8e-af06-60e4641550d4"],"propsByKey":{"848314f8-d7dc-4755-a4a1-3782173096b1":{"name":"hero","sourceUrl":null,"frameSize":{"x":30,"y":30},"frameCount":1,"looping":true,"frameDelay":12,"version":"JC_ZHgI1SUIaV1mdKgB0dNPR1Bnw949.","categories":["sports"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":30},"rootRelativePath":"assets/848314f8-d7dc-4755-a4a1-3782173096b1.png"},"26b80e63-bc0f-408d-b288-be2282aebd4e":{"name":"enemy1","sourceUrl":null,"frameSize":{"x":35,"y":50},"frameCount":1,"looping":true,"frameDelay":12,"version":"3dpFDA4_GO4m2E_NxZmYDUkcOlEEkrKv","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":35,"y":50},"rootRelativePath":"assets/26b80e63-bc0f-408d-b288-be2282aebd4e.png"},"dfc53be7-786c-4305-b8eb-81fa595e9903":{"name":"enemy","sourceUrl":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png","frameSize":{"x":320,"y":254},"frameCount":1,"looping":true,"frameDelay":2,"version":"xasculQGiYxBV79ltD_0E79ZRIexdPdZ","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":320,"y":254},"rootRelativePath":"assets/api/v1/animation-library/gamelab/xasculQGiYxBV79ltD_0E79ZRIexdPdZ/category_food/american_hamburger.png"},"47fade86-5bd1-4789-87af-896fb1433a7b":{"name":"enemy2","sourceUrl":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png","frameSize":{"x":355,"y":241},"frameCount":1,"looping":true,"frameDelay":2,"version":"dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":355,"y":241},"rootRelativePath":"assets/api/v1/animation-library/gamelab/dVaFR7XFVlGQX4d.e71iiKWvnLhMbaxG/category_food/american_pastrami.png"},"043deebf-64b8-4795-be8d-db5055414f2f":{"name":"enemy3","sourceUrl":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png","frameSize":{"x":388,"y":388},"frameCount":1,"looping":true,"frameDelay":2,"version":"YSis4_lex43su6FLaL__bhoag4eHAl8D","categories":["food"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":388,"y":388},"rootRelativePath":"assets/api/v1/animation-library/gamelab/YSis4_lex43su6FLaL__bhoag4eHAl8D/category_food/american_bbqribs.png"},"c26b6449-0b6c-4483-8486-107c0091c26e":{"name":"hero1","sourceUrl":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png","frameSize":{"x":264,"y":368},"frameCount":1,"looping":true,"frameDelay":2,"version":"loycQXdICpzI4PfXITdIndG9GcVBmRdK","categories":["faces"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":264,"y":368},"rootRelativePath":"assets/api/v1/animation-library/gamelab/loycQXdICpzI4PfXITdIndG9GcVBmRdK/category_faces/kidportrait_01.png"},"3221caad-ae37-4eec-92a8-56bae4769e66":{"name":"b","sourceUrl":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/IJemJVUh3J1gcGlCdIJ8obCWhXAqxbUT/category_backgrounds/kitchen.png"},"c4e310e0-8174-4127-a46e-0cbcc94b488b":{"name":"dream","sourceUrl":null,"frameSize":{"x":386,"y":268},"frameCount":1,"looping":true,"frameDelay":12,"version":"BXnpkNFZhQTEUkAJAFhlmcmysUrQt5TQ","categories":["icons"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":386,"y":268},"rootRelativePath":"assets/c4e310e0-8174-4127-a46e-0cbcc94b488b.png"},"e48a8058-087d-489d-9bcd-636bb7ddbe40":{"name":"fly_bot_1","sourceUrl":"assets/api/v1/animation-library/gamelab/CVtigtRo1bAJVBogp8xBgu85MC15nutH/category_robots/fly_bot.png","frameSize":{"x":124,"y":141},"frameCount":2,"looping":true,"frameDelay":2,"version":"CVtigtRo1bAJVBogp8xBgu85MC15nutH","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":248,"y":141},"rootRelativePath":"assets/api/v1/animation-library/gamelab/CVtigtRo1bAJVBogp8xBgu85MC15nutH/category_robots/fly_bot.png"},"2ba29dab-5b6e-46cd-b532-4bca963fbf84":{"name":"robot_28_1","sourceUrl":"assets/api/v1/animation-library/gamelab/a15YjNwkX2_rjTts8wywvNMFA.QMFb39/category_robots/robot_28.png","frameSize":{"x":328,"y":398},"frameCount":1,"looping":true,"frameDelay":2,"version":"a15YjNwkX2_rjTts8wywvNMFA.QMFb39","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":328,"y":398},"rootRelativePath":"assets/api/v1/animation-library/gamelab/a15YjNwkX2_rjTts8wywvNMFA.QMFb39/category_robots/robot_28.png"},"a4eb1f71-2d82-467f-b49b-3dcd39f6fbf0":{"name":"robot_08_1","sourceUrl":"assets/api/v1/animation-library/gamelab/n8Do8DE9kHjwgkcc3CjTaoOJ7WQqjgE5/category_robots/robot_08.png","frameSize":{"x":380,"y":394},"frameCount":1,"looping":true,"frameDelay":2,"version":"n8Do8DE9kHjwgkcc3CjTaoOJ7WQqjgE5","categories":["robots"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":380,"y":394},"rootRelativePath":"assets/api/v1/animation-library/gamelab/n8Do8DE9kHjwgkcc3CjTaoOJ7WQqjgE5/category_robots/robot_08.png"},"9c9be89c-8943-4a8e-af06-60e4641550d4":{"name":"santa_1","sourceUrl":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png","frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":2,"version":"9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l","categories":["backgrounds"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/api/v1/animation-library/gamelab/9ZleRnJkMxYhfpPY2zZrrikGdZ6H6F6l/category_backgrounds/background_santa.png"}}};
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

var plano = createSprite(200,200);
 plano.setAnimation("santa_1");
 
var enemy1 = createSprite(200,250,10,10);
enemy1.shapeColor="red";

var enemy2 = createSprite(200,150,10,10);
enemy2.shapeColor="red";

var enemy3 = createSprite(200,50,10,10);
enemy3.shapeColor="red";

var player = createSprite(200,345,200,330);
player.shapeColor="red";

var goal = createSprite(200,5,200,20);
goal.shapeColor="black";


player.setAnimation("fly_bot_1");
player.scale=0.3;
enemy1.setAnimation("enemy1");
enemy1.scale=1;
enemy2.setAnimation("robot_28_1");
enemy2.scale=0.1;
enemy3.setAnimation("robot_08_1");
enemy3.scale=0.1;


enemy1.setVelocity(-10,0);
enemy2.setVelocity(10,0);
enemy3.setVelocity(-10,0);


function draw() {
//plano de fundo(b);
createEdgeSprites();



player.bounceOff(edges);
enemy1.bounceOff(edges);
enemy2.bounceOff(edges);
enemy3.bounceOff(edges);

if(keyDown(DOWN_ARROW)){
  player.y=player.y+3;
}

if(keyDown(UP_ARROW)){
  player.y=player.y-3;
}

if(keyDown(RIGHT_ARROW)){
  player.x=player.x+3;
}

if(keyDown(LEFT_ARROW)){
  player.x=player.x-3;
}

if(player.isTouching(enemy1)|| player.isTouching(enemy2)|| player.isTouching(enemy3)){
  playSound("assets/category_explosion/radioactive_zombie_explode_2.mp3");
  player.x=200;
  player.y=350;
}
if(player.isTouching(goal)){
  playSound("assets/category_achievements/vibrant_game_game_gold_tresure_chest_open.mp3");
  player.x=200;
  player.y=345;
}

  
drawSprites();
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
