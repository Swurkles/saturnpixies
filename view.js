const app = new PIXI.Application({ 
    backgroundColor: 0x000000,
    width: 512,
    height: 448,
    antialias: false,
});
let display = document.getElementById("gamewindow");
display.appendChild(app.view);

app.renderer.view.style.position = "absolute";
app.renderer.view.style.display = "block";
app.renderer.autoDensity = true;

PIXI.Loader.shared.add("assets/onett-tileset.json").add("assets/saturn-tileset.json");
PIXI.Loader.shared.load(setup);

function setup() {

  //Loading tilesheets
  sheet1 = PIXI.Loader.shared.resources["assets/onett-tileset.json"].spritesheet;
  sheet2 = PIXI.Loader.shared.resources["assets/saturn-tileset.json"].spritesheet;

  //Loading animations fro MrSaturn's sprites
  saturn_neutral = sheet2.animations["MrSaturn_neutral"];
  saturn_side = sheet2.animations["MrSaturn_side"];
  saturn_back = sheet2.animations["MrSaturn_back"];

  //Creating Mr Saturn's sprite
  sprite = new PIXI.AnimatedSprite(saturn_neutral);
  sprite.x = app.screen.width /2;
  sprite.y = app.screen.height /2;
  sprite.anchor.set(0.5, 0.5);
  sprite.animationSpeed = 0.03;
  sprite.onFrameChange = function () {
  if(sprite.textures == saturn_neutral || sprite.textures == saturn_back )
    sprite.scale.x *=-1;
  };
  resetVelocity(sprite);
  tilingSprite = new PIXI.TilingSprite(
    sheet1.textures["onett-tile-7.png"],
    app.screen.width,
    app.screen.height,
  );
  app.stage.addChild(tilingSprite);
  app.stage.addChild(sprite);

  // Listen for animate update
  app.ticker.add(delta => gameLoop(delta));
}
