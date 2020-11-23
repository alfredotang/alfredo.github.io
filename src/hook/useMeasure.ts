import { useState, useEffect, useRef, MutableRefObject } from 'react';
import ResizeObserver from 'resize-observer-polyfill';
type IBounds = { left: number; top: number; width: number; height: number };
const useMeasure = (): [{ ref: MutableRefObject<any> }, IBounds] => {
    const ref = useRef();
    const [bounds, set] = useState<IBounds>({
        left: 0,
        top: 0,
        width: 0,
        height: 0,
    });
    const [ro] = useState(() => new ResizeObserver(([entry]) => set(entry.contentRect)));
    useEffect(() => {
        if (ref.current) {
            ro.observe(ref.current);
        }
        return () => ro.disconnect();
    }, []);
    return [{ ref }, bounds];
};

export default useMeasure;
