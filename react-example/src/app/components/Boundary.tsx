import Ball from './Ball';
import { BallData } from '../core/BallData';

type BoundaryProps = { 
    readonly balls: ReadonlyArray<BallData>;
    readonly onBallClick: (p: number) => void;
};

export function Boundary({ balls, onBallClick }: BoundaryProps) {
    const ballEls = balls.map((ball, i) => <Ball key={i} data={ball} onBallClick={onBallClick} />);
    return <section className="boundary">
        {ballEls}
    </section>
}