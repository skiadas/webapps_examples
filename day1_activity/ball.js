const BALL_RADIUS = 20; // pixels
const STEP = 5; // pixels per move
const MAX_STEP = 40;

class Ball extends SimpleBall {
  #el;
  #points;
  #parent;
  constructor(el) {
    super();
    this.#el = el;
    this.#points = randomInt(1, 20);
    this.#parent = new Border(this.#el.closest(".boundary"));
    this.location = {
      x: randomInside(this.#parent.width, BALL_RADIUS),
      y: randomInside(this.#parent.height, BALL_RADIUS),
    };
    this.#initializeElement();
    this.#place();
  }
  #initializeElement() {
    this.#el.style.width = BALL_RADIUS * 2;
    this.#el.style.height = BALL_RADIUS * 2;
    this.#el.style.borderRadius = BALL_RADIUS + "px";
    this.#el.dataset.points = this.#points;
    this.#el.innerHTML = this.#points;
  }

  #place() {
    this.#el.style.left = this.x - BALL_RADIUS + "px";
    this.#el.style.top = this.y - BALL_RADIUS + "px";
  }
  update() {
    const newCenter = this.nextLocation();
    const borderContact = this.#parent.detectOutOfBounds(newCenter, BALL_RADIUS);
    this.#parent.lightUp(borderContact);

    if (borderContact === "left" || borderContact === "right") {
      this.flipDirectionX();
    } else if (borderContact === "top" || borderContact === "bottom") {
      this.flipDirectionY();
    } else {
      this.advance();
      this.#place();
    }
  }
  randomizeColor() {
    const { bgColor, color } = generateColor();
    this.#el.style.backgroundColor = bgColor;
    this.#el.style.color = color;
  }
}
function randomInside(width, radius) {
  return radius + Math.random() * (width - 2 * radius);
}

function randomInt(from, to) {
  return from + Math.round(Math.random() * (to-from));
}

function randomAngle() {
  return Math.random() * 2 * Math.PI;
}

function generateColor() {
  const hue = Math.floor(Math.random() * 360);
  const sat = 10 + Math.floor(Math.random() * 80);
  const bright = 10 + Math.floor(Math.random() * 80);
  const bright2 = bright > 40 ? 10 : 90;
  const bgColor = `hsl(${hue}deg ${sat}% ${bright}%)`;
  const color = `hsl(${hue}deg ${sat}% ${bright2}%)`;
  return { bgColor, color };
}

