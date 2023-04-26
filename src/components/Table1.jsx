import React, { useState, useEffect } from 'react';

export default function Table1() {
    const [operation, setOperation] = useState('');
    const [number, setNumber] = useState(10);
    const [result, setResult] = useState(0);
    const [starthandle, setStartHandle] = useState(false);

	const randomTable = () => {
		const firstNumber = Math.floor(Math.random() * 10);
		const secondNumber = Math.floor(Math.random() * 10);
        const result = firstNumber * secondNumber;
        setResult(result);
		const newTab = `${firstNumber} x ${secondNumber} = `
        setOperation(newTab);
	};

    const startTimer = () => {
        setInterval(() => {
            setNumber((prev) => prev - 1);
        }, 1000);
    };

    useEffect(() => {
        if (number < -2) {
            setNumber(10);
            randomTable();
        }
    }, [number]);

    const handleStartButton = () => {
        setStartHandle(true);
        randomTable();
        startTimer();
    };

	// const [numberOfOperations, setNumberOfOperations] = useState(1);
	return (
        <div>
            {operation !== '' && (
                number < 0 ? (
                    <h1>{`${operation}${result}`}</h1>
                ) : (
                    <h1>{`${operation}?`}</h1>
                )
            )}
            {number <= 0 ? (
                <h1>0</h1>
            ) : (
                <h1>{number}</h1>
            )}
            {!starthandle && (
                <button onClick={handleStartButton} className='p-10 bg-black text-white'>START</button>
            )}
        </div>
    )
}
