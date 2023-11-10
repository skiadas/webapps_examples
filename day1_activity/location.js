class Location {
    #x; 
    #y;
    constructor(x,y) {
        this.#x = x;
        this.#y = y;
    }
    get x() {
        return this.#x;
    }
    get y() {
        return this.#y;
    }
    shiftedBy(step, direction) {
        const newX = this.#x + step * Math.cos(direction);
        const newY = this.#y + step * Math.sin(direction);
        return new Location(newX, newY);
    }
}