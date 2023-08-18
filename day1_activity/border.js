const FLASH_INTERVAL = 120; // milliseconds
const EMPHASIS_COLOR = "red"; // color for border lightup

class Border {
  constructor(el) {
    this.el = el;
  }
  get width() {
    return this.el.offsetWidth;
  }
  get height() {
    return this.el.offsetHeight;
  }
  lightUp(s) {
    if (s === "none") return;
    const sideTitled = s[0].toUpperCase() + s.substring(1);
    const side = `border${sideTitled}Color`;
    this.el.style[side] = EMPHASIS_COLOR;
    setTimeout(() => {
      this.el.style[side] = "";
    }, FLASH_INTERVAL);
  }
  detectOutOfBounds(location, radius) {
    const [x, y] = location;
    if (x - radius < 0) return "left";
    if (x + radius > this.width) return "right";
    if (y - radius < 0) return "top";
    if (y + radius > this.height) return "bottom";
    return "none";
  }
}
