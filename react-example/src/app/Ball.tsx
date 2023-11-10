import { useState } from "react";

type BallProps = {
    readonly color?: string;
}
export default function Ball({ color: _color }: BallProps) {
    const [color, setColor] = useState<string>(_color || "purple");
    return <div className="ball" style={{ backgroundColor: color }}></div>;
}