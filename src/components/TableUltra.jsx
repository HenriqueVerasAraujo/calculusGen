import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


export default function TableUltra() {
    const [operation, setOperation] = useState('');
    const [number, setNumber] = useState(10);
    const [result, setResult] = useState(0);
    const [starthandle, setStartHandle] = useState(false);
    const navigate = useNavigate();

    const randomTableHard = () => {
		const firstNumber = Math.floor(Math.random() * (10 - 4) + 4);
		const secondNumber = Math.floor(Math.random() * (10 - 4) + 4);
        const result = firstNumber * secondNumber;
        setResult(result);
		const newTab = `${firstNumber} x ${secondNumber} = `
        setOperation(newTab);
	};

    const startTimer = () => {
        setInterval(() => {
            setNumber((prev) => prev - 1);
        }, 200);
    };

    useEffect(() => {
        if (number < -2) {
            setNumber(10);
            randomTableHard();
        }
    }, [number]);

    const handleStartButton = () => {
        setStartHandle(true);
        randomTableHard();
        startTimer();
    };

	return (
        <div className='w-full h-screen bg-black'>
            <div className='w-full h-auto flex flex-col items-center bg-black'>
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
                <div className='w-full h-auto flex justify-center -mt-10'>
                    {!starthandle && (
                        <button onClick={handleStartButton} className='p-10 bg-green-600 text-white rounded-md font-bold text-5xl'>START</button>
                    )}
                </div>
                <div className='w-full h-auto flex justify-center pt-[19%] pb-3'>
                    <button className='text-white bg-blue-700 font-bold text-3xl p-3 rounded-md ' onClick={() => navigate('/tables')}>Normal Mode</button>
                </div>
                <div className='w-full h-auto flex justify-center'>
                    <button className='text-white bg-blue-400 font-bold text-3xl p-3 rounded-md ' onClick={() => navigate('/')}>Return</button>
                </div>
            </div>
        </div>
    )
}
