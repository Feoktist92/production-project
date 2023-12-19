import React from 'react';
import styles from './Counter.module.scss';
export const Counter = () => {
    const [count, setCount] = React.useState(0);
    return (
        <div>
            <h1>Counter</h1>
            <h2 className={styles.green}>{count}</h2>
            <button
                className={styles.button}
                onClick={() => setCount(count + 1)}
            >
                +
            </button>
            <button
                className={styles.button}
                onClick={() => setCount(count - 1)}
            >
                -
            </button>
        </div>
    );
};
