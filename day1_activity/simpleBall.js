class SimpleBall {
    #direction;
    #step;
    #location;
    constructor() {
        this.#direction = randomAngle();
        this.#step = STEP;
        this.#location = new Location(0, 0);
    }
    set location({ x, y }) {
        this.#location.x = x;
        this.#location.y = y;
    }
    get x() {
        return this.#location.x;
    }
    get y() {
        return this.#location.y;
    }
    nextLocation() {
        return this.#location.shiftedBy(this.#step, this.#direction);
    }
    advance() {
        this.#location = this.nextLocation();
    }
    flipDirectionX() {
        this.#direction = Math.PI - this.#direction;
    }
    flipDirectionY() {
        this.#direction = -this.#direction;
    }
    randomizeSpeed() {
        this.#step = Math.random() * MAX_STEP;
    }
    faster() {
        this.#step = Math.min(1.1 * this.#step, MAX_STEP);
    }
    slower() {
        this.#step = 0.9 * this.#step;
    }
}