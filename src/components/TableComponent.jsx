import React, { useState, useEffect } from 'react';

export default function TableComponent() {
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

	return (
        <div className='w-full h-screen bg-black'>
            <div className='w-full h-full flex flex-col items-ceter  bg-green-700'>
                <div className='w-full h-auto bg-red-600 flex justify-center'>
                    {operation !== '' && (
                        number < 0 ? (
                            <h1 className='text-white'>{`${operation}${result}`}</h1>
                        ) : (
                            <h1 className='text-white'>{`${operation}?`}</h1>
                        )
                    )}
                </div>
                <div>
                    {number <= 0 ? (
                        <h1 className='text-white'>0</h1>
                    ) : (
                        <h1 className='text-white'>{number}</h1>
                    )}
                </div>
                <div>
                    {!starthandle && (
                        <button onClick={handleStartButton} className='w-[40%] p-10 bg-red-600 text-white rounded-md font-bold text-5xl'>START</button>
                    )}
                </div>
            </div>
        </div>
    )
}
