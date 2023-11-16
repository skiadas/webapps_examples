import Ball from './Ball';
import { BallData } from './BallData';

export function Boundary({ balls } : { balls: ReadonlyArray<BallData> }) {
    const ballEls = balls.map((ball, i) => <Ball key={i} data={ball} />);
    return <section className="boundary">
        {ballEls}
    </section>
}