export function randomInside(width: number, radius: number): number {
    return radius + Math.random() * (width - 2 * radius);
}

export function randomInt(from: number, to: number): number {
    return from + Math.round(Math.random() * (to - from));
}

export function randomAngle(): number {
    return Math.random() * 2 * Math.PI;
}

export function generateColor() {
    const hue = Math.floor(Math.random() * 360);
    const sat = 10 + Math.floor(Math.random() * 80);
    const bright = 10 + Math.floor(Math.random() * 80);
    const bright2 = bright > 40 ? 10 : 90;
    const bgColor = `hsl(${hue}deg ${sat}% ${bright}%)`;
    const color = `hsl(${hue}deg ${sat}% ${bright2}%)`;
    return { bgColor, color };
}
