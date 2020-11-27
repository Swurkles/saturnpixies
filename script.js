

const app = new PIXI.Application({ backgroundColor: 0xff5252 });
document.body.appendChild(app.view);

// create a new Sprite from an image path
const bunny = PIXI.Sprite.from('assets/Mr.Saturn.png');

// center the sprite's anchor point
bunny.anchor.set(0.5);

// move the sprite to the center of the screen
bunny.x = app.screen.width / 2;
bunny.y = app.screen.height / 2;

// enable the bunny to be interactive... this will allow it to respond to mouse and touch events
bunny.interactive = true;

// this button mode will mean the hand cursor appears when you roll over the bunny with your mouse
bunny.buttonMode = true;

// make it a bit bigger, so it's easier to grab
bunny.scale.set(3);

app.stage.addChild(bunny);

// Listen for animate update
app.ticker.add((delta) => {
    // just for fun, let's rotate mr rabbit a little
    // delta is 1 if running at 100% performance
    // creates frame-independent transformation
    bunny.rotation += 0.05 * delta;
});
