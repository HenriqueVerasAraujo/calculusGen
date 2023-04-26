import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Calculus() {
    const [type, setType] = useState('multiplication');
	const [operation, setOperation] = useState([]);
    const navigate = useNavigate();

	const division = () => {
		const firstNumber = Math.floor(Math.random()*(999-100+1)+100);
		const secondNumber = Math.floor(Math.random()*(99-10+1)+10);
		const result = firstNumber * secondNumber;
		return `${result} ÷ ${secondNumber} = ?`
	};

	const multiplication = () => {
		const firstNumber = Math.floor(Math.random()*(999-100+1)+100);
		const secondNumber = Math.floor(Math.random()*(99-10+1)+10);
		return `${firstNumber} x ${secondNumber} = ?`
	};

	const generateCalculus = (number, typeOfOperation) => {
		const allCalculus = [];
		for (let i = 0; i<= number; i += 1) {
			const newOperation = typeOfOperation();
			allCalculus.push(newOperation);
		};
		setOperation(allCalculus);
		console.log(allCalculus);
	};

	const generateHandle = () => {
		if (type === 'multiplication') {
			generateCalculus(4, multiplication);
		} else {
			generateCalculus(4, division);
		}
	};

	return (
			<div className='w-full h-screen bg-black'>
				<div className='w-full h-full flex flex-col items-center py-7'>
					<h1 className='text-white text-3xl font-bold '>Choose the type of operation:</h1>
					<div className='w-full h-auto flex justify-around py-7'>
						<button onClick={() => setType('multiplication')} className='text-white text-8xl font-bold bg-red-400 p-3 px-8 rounded-md focus:bg-red-700'>X</button>
						<button onClick={() => setType('division')} className='text-white text-9xl font-bold bg-blue-400 p-3 px-8 rounded-md focus:bg-blue-700'>÷</button>
					</div>
					<div className='w-full h-auto flex justify-around py-7 pb-10'>
					<button onClick={generateHandle} className='text-white text-4xl font-bold bg-green-600 p-3 px-8 rounded-md'>Generate operations</button>
					</div>
					<div>
						{operation !== [] && operation.map((singleOperation) => (
							<h1 className='text-white text-3xl font-bold '>{singleOperation}</h1>
						))}
					</div>
                    <div className='w-full h-auto flex justify-center pt-[40%]'>
                        <button className='text-white bg-blue-600 font-bold text-3xl p-3 rounded-md ' onClick={() => navigate('/tables')}>Tables</button>
                    </div>
				</div>
			</div>
	);
}
