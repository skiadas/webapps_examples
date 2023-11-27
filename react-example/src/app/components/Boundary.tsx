import { Ref, forwardRef } from 'react';

type BoundaryProps = {
    readonly children: any;
};

export const Boundary = forwardRef<HTMLElement, BoundaryProps>(({ children }, ref) => {
    return <section className="boundary" ref={ref}>
        {children}
    </section>
});

// export function Boundary({ children }: BoundaryProps) {
//     return <section className="boundary">
//         {children}
//     </section>
// }