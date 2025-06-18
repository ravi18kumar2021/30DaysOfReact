import { useReducer, useState } from 'react'
import './App.css'

// const initialState = 0;
// const reducer = (a, value) => {
//   if (value === '+') {
//     return a + 1;
//   } else if (value === '-') {
//     return a - 1;
//   } else if (value === 'x') {
//     return a = 0;
//   }
// }

const initialState = { count: 0 };
const reducer = (state, action) => {
	switch (action.type) {
		case '+':
			return { count: state.count + 1 };
		case '-':
			return { count: state.count - 1 };
		case 'x':
			return initialState;
		case '#':
			return { count: state.count + action.payload };
		default:
			return state;
	}
}

function App() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [customValue, setCustomValue] = useState(1);

	const handleCustomValue = (e) => {
		const value = e.target.value;
		if (value === '') {
			setCustomValue('');
			return
		}
		if (isNaN(Number(value))) {
			alert('Invalid input');
			return
		}
		setCustomValue(value);
	}
	const handleCustomIncrement = () => {
		dispatch({type: '#', payload: Number(customValue)});
	}
	return (
		<>
			<div>
				<h1>Counter App (useReducer Hook)</h1>
				<div className='w-lg mx-auto'>
					<div className='flex justify-evenly my-5'>
						<h2 className='text-3xl'>Count : {state.count}</h2>
						<div className='flex gap-3 items-center'>
							<h2 className='text-3xl'>Steps : </h2>
							<input type="text" className='w-16 h-10 border p-3 text-2xl text-center'
							value={customValue} onChange={handleCustomValue} />
						</div>
					</div>
					<div className='grid grid-cols-2 gap-3 my-5'>
						<button onClick={() => dispatch({type: '+'})}>Increment ( +1 )</button>
						<button onClick={handleCustomIncrement}>Custom</button>
						<button onClick={() => dispatch({type: '-'})}>Decrement ( -1 )</button>
						<button onClick={() => {
							dispatch({type: 'x'});
							setCustomValue(1);
						}}>Reset</button>
					</div>
				</div>
			</div>
		</>
	)
}

export default App
