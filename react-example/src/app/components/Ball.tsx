import type { BallData } from "../core/BallData";

type BallProps = {
    data: BallData
    onBallClick: (p: number) => void
}
export default function Ball({ data, onBallClick }: BallProps) {
    const { x, y, color, points } = data;
    const { bgColor, color: textColor } = color;
    return <div className="ball" style={{
        left: x,
        top: y,
        backgroundColor: bgColor,
        color: textColor
    }} onClick={() => onBallClick(points)}>{points}</div>;
}