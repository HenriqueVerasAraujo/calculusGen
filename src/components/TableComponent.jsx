import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function TableComponent() {
    const [operation, setOperation] = useState('');
    const [number, setNumber] = useState(10);
    const [result, setResult] = useState(0);
    const [starthandle, setStartHandle] = useState(false);
    const navigate = useNavigate();

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
            <div className='w-full h-full flex flex-col items-center'>
                <div className='w-full h-auto flex justify-center text-white text-5xl font-bold py-10'>
                    <h1 className='text-center'>Multiplication Table Quiz</h1>
                </div>
                <div className='w-full h-auto flex justify-center text-white text-9xl font-bold py-10'>
                    {number <= 0 ? (
                        <h1 className='text-white'>0</h1>
                    ) : (
                        <h1 className='text-white'>{number}</h1>
                    )}
                </div>
                <div className='w-full h-auto flex justify-center text-white text-7xl font-bold py-10'>
                    {operation !== '' && (
                        number < 0 ? (
                            <h1>{`${operation}${result}`}</h1>
                        ) : (
                            <h1>{`${operation}?`}</h1>
                        )
                    )}
                </div>
                <div className='w-full h-auto flex justify-center'>
                    {!starthandle && (
                        <button onClick={handleStartButton} className='p-10 bg-red-600 text-white rounded-md font-bold text-5xl'>START</button>
                    )}
                </div>
                <div className='w-full h-auto flex justify-center pt-[30%]'>
                    <button className='text-white bg-blue-600 font-bold text-3xl p-3 rounded-md ' onClick={() => navigate('/')}>Return</button>
                </div>
            </div>
        </div>
    )
}
