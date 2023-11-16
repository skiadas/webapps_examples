import type { BallData } from "./BallData";

type BallProps = {
    data: BallData
}
export default function Ball({ data }: BallProps) {
    const { x, y, color, points } = data;
    const { bgColor, color: textColor } = color;
    return <div className="ball" style={{
        left: x,
        top: y, 
        backgroundColor: bgColor,
        color: textColor 
        }}>{points}</div>;
}