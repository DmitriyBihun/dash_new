import { useMemo } from 'react';
import { motion } from 'motion/react';
import './PageTransition.css';

const ROWS = 10;
const COLUMNS = 11;

function getBlockDelay(rowIndex) {
    const blockDelay = Math.random() * 0.3;
    const rowDelay = (ROWS - rowIndex - 1) * 0.03;

    return blockDelay + rowDelay;
}

function Blocks({ direction }) {
    const isEntering = direction === 'in';
    const delays = useMemo(
        () => Array.from(
            { length: ROWS },
            (_, rowIndex) => Array.from(
                { length: COLUMNS },
                () => getBlockDelay(rowIndex),
            ),
        ),
        [],
    );

    return (
        <div className={`page-transition__blocks page-transition__blocks--${direction}`}>
            {Array.from({ length: ROWS }).map((_, rowIndex) => (
                <div className="page-transition__row" key={rowIndex}>
                    {Array.from({ length: COLUMNS }).map((_, blockIndex) => (
                        <motion.div
                            className="page-transition__block"
                            key={blockIndex}
                            initial={{ scaleY: isEntering ? 1 : 0 }}
                            animate={{ scaleY: 0 }}
                            exit={{ scaleY: isEntering ? 0 : 1 }}
                            transition={{
                                duration: 0.6,
                                ease: [0.22, 1, 0.36, 1],
                                delay: delays[rowIndex][blockIndex],
                            }}
                        />
                    ))}
                </div>
            ))}
        </div>
    );
}

export default function PageTransition({ children }) {
    return (
        <>
            {children}
            <Blocks direction="in" />
            <Blocks direction="out" />
        </>
    );
}
