
import { useState, useEffect } from 'react';
import type { RefObject } from 'react';

const useAnimatedCounter = (ref: RefObject<Element>, end: number, duration: number = 2000, start: number = 0) => {
    const [count, setCount] = useState(start);

    useEffect(() => {
        let startTime: number | null = null;
        let animationFrameId: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = timestamp - startTime;
            const percentage = Math.min(progress / duration, 1);
            
            // Ease-out function
            const easedPercentage = 1 - Math.pow(1 - percentage, 3);

            const currentCount = Math.floor(easedPercentage * (end - start) + start);
            setCount(currentCount);

            if (progress < duration) {
                animationFrameId = requestAnimationFrame(animate);
            } else {
                setCount(end); // Ensure it ends on the exact number
            }
        };

        const observer = new IntersectionObserver(
            (entries) => {
                if (entries[0].isIntersecting) {
                    animationFrameId = requestAnimationFrame(animate);
                    observer.disconnect();
                }
            },
            { threshold: 0.1 }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            cancelAnimationFrame(animationFrameId);
            if (ref.current) {
                // eslint-disable-next-line react-hooks/exhaustive-deps
                observer.unobserve(ref.current);
            }
        };
    }, [ref, start, end, duration]);

    return count;
};

export default useAnimatedCounter;
   