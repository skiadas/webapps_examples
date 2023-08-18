const BALL_RADIUS = 20; // pixels
const STEP = 5; // pixels per move
const MAX_STEP = 40;

class Ball {
  constructor(el) {
    this.el = el;
    this.points = 1 + Math.round(Math.random() * 19);
    this.el.innerHTML = this.points;
    this.parent = new Border(el.closest(".boundary"));
    this.direction = Math.random() * 2 * Math.PI;
    this.step = STEP;
    this.location = [
      BALL_RADIUS + Math.random() * (this.parent.width - 2 * BALL_RADIUS),
      BALL_RADIUS + Math.random() * (this.parent.height - 2 * BALL_RADIUS),
    ];
    el.style.width = BALL_RADIUS * 2;
    el.style.height = BALL_RADIUS * 2;
    el.style.borderRadius = BALL_RADIUS + "px";
    el.dataset.points = this.points;
  }
  place() {
    const [xoffset, yoffset] = this.location;
    this.el.style.left = xoffset - BALL_RADIUS + "px";
    this.el.style.top = yoffset - BALL_RADIUS + "px";
  }
  update() {
    const [xoffset, yoffset] = this.location;
    const newCenter = [
      xoffset + this.step * Math.cos(-this.direction),
      yoffset + this.step * Math.sin(-this.direction),
    ];
    const borderContact = this.parent.detectOutOfBounds(newCenter, BALL_RADIUS);
    this.parent.lightUp(borderContact);

    if (borderContact === "left" || borderContact === "right") {
      this.direction = Math.PI - this.direction;
    } else if (borderContact === "top" || borderContact === "bottom") {
      this.direction = -this.direction;
    } else {
      this.location = newCenter;
      this.place();
    }
  }
  randomizeColor() {
    const hue = Math.floor(Math.random() * 360);
    const sat = 10 + Math.floor(Math.random() * 80);
    const bright = 10 + Math.floor(Math.random() * 80);
    const bright2 = bright > 40 ? 10 : 90;
    this.el.style.backgroundColor = `hsl(${hue}deg ${sat}% ${bright}%)`;
    this.el.style.color = `hsl(${hue}deg ${sat}% ${bright2}%)`;
  }
  randomizeSpeed() {
    this.step = Math.random() * MAX_STEP;
  }
  faster() {
    this.step = Math.min(1.1 * this.step, MAX_STEP);
  }
  slower() {
    this.step = 0.9 * this.step;
  }
}
