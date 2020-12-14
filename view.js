const app = new PIXI.Application({ 
    backgroundColor: 0x000000,
    width: window.innerWidth,
    height: window.innerHeight,
    antialias: true,
});
document.body.appendChild(app.view);

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoDensity = true;

window.addEventListener("resize", function(event){ 
  app.renderer.resize(window.innerWidth, window.innerHeight);
  tilingSprite2.y = app.screen.height-70;
  
});


PIXI.Loader.shared.add("assets/onett-tileset.json").add("assets/saturn-tileset.json");
PIXI.Loader.shared.load(setup);

function setup() {
  //Loading tilesheets
  sheet = PIXI.Loader.shared.resources["assets/onett-tileset.json"].spritesheet;
  sheet2 = PIXI.Loader.shared.resources["assets/saturn-tileset.json"].spritesheet;
  
  //Loading animations fro MrSaturn's sprites
  saturn_neutral = sheet2.animations["MrSaturn_neutral"];
  saturn_side = sheet2.animations["MrSaturn_side"];
  saturn_back = sheet2.animations["MrSaturn_back"];

  //Creating Mr Saturn's sprite
  sprite = new PIXI.AnimatedSprite(saturn_neutral);
  sprite.x = app.screen.width /2;
  sprite.y = app.screen.height /2;
  sprite.scale.set(3);
  sprite.anchor.set(0.5, 0.5);
  sprite.animationSpeed = 0.03;
  sprite.onFrameChange = function () {
  if(sprite.textures == saturn_neutral || sprite.textures == saturn_back )
    sprite.scale.x *=-1;
  };
    sprite.x = app.screen.width /2;
    sprite.y = app.screen.height /2;;
    sprite.scale.set(3);
    sprite.anchor.set(0.5);

    phase_distorter = PIXI.Sprite.from("assets/ebsprites/PhaseDistorter.png");
    phase_distorter.scale.set(3);
    phase_distorter.anchor.set(0.5);
    phase_distorter.x = app.screen.width /2;
    phase_distorter.y = app.screen.height /2 - 40;

  tilingSprite = new PIXI.TilingSprite(
    sheet.textures["onett-tile-7.png"],
    app.screen.width,
    app.screen.height,
  );
  tilingSprite.scale.set(3);

  tilingSprite2 = new PIXI.TilingSprite(
    sheet.textures["onett-tile-94.png"],
    app.screen.width,
    70,
  );
  tilingSprite2.y = app.screen.height-70;
  tilingSprite2.scale.set(3);


  app.stage.addChild(tilingSprite);
  app.stage.addChild(tilingSprite2);
  app.stage.addChild(phase_distorter);
  app.stage.addChild(sprite);
  

  // Listen for animate update
  app.ticker.add(delta => gameLoop(delta));
}
