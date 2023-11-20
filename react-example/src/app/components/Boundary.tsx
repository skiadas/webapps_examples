import Ball from './Ball';
import { BallData } from '../core/BallData';

type BoundaryProps = {
    readonly children: any;
};

export function Boundary({ children }: BoundaryProps) {
    return <section className="boundary">
        {children}
    </section>
}