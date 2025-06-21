import './App.css'
import { Formik, Form, Field, ErrorMessage } from "formik";
import { useState } from 'react';
import { object as YObj, string as YStr, ref as YRef } from "yup";

const YupValidationSchema = YObj().shape({
	firstName: YStr()
		.min(3, "Must have at least 3 characters")
		.max(10, 'Must have at most 10 characters')
		.matches(/^(?!\s*$).+$/, 'Cannot be spaces only')
		.matches(/^(?! )[A-Za-z ]*(?<! )$/, 'Spaces at start or end not allowed')
		.required('Required'),
	lastName: YStr()
		.min(3, "Must have at least 3 characters")
		.max(10, 'Must have at most 10 characters')
		.matches(/^(?!\s*$).+$/, 'Cannot be spaces only')
		.matches(/^(?! )[A-Za-z ]*(?<! )$/, 'Spaces at start or end not allowed')
		.required('Required'),
	email: YStr()
		.matches(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/, 'Invalid email')
		.required('Requied'),
	password1: YStr()
		.min(6, 'Password must be at least 6 characters')
		.matches(/^(?!\s*$).+$/, 'password cannot be spaces only')
		.required('Required'),
	password2: YStr()
		.oneOf([YRef('password1'), null], 'Passwords must match')
		.required('Required')
})

function App() {
	const [data, setData] = useState({});

	return (
		<>
			<div>
				<h1 className='text-yellow-400'>Sign Form using Formik & Yup</h1>
				<Formik initialValues={{
					firstName: '', lastName: '', email: '', password1: '', password2: ''
				}} onSubmit={(values, {resetForm}) => {
					setData(values);
					resetForm();
				}} validationSchema={YupValidationSchema}>
					<Form className='mt-6'>
						<div className='my-4 grid grid-cols-3 gap-3'>
							<label htmlFor="firstName" className='text-left text-blue-300'>Enter First Name : </label>
							<Field name="firstName" className="border rounded-sm p-1" />
							<ErrorMessage name='firstName' component="p" className='text-red-500' />
						</div>
						<div className='my-4 grid grid-cols-3 gap-3'>
							<label htmlFor="lastName" className='text-left text-blue-300'>Enter Last Name : </label>
							<Field name="lastName" className="border rounded-sm p-1" />
							<ErrorMessage name='lastName' component="p" className='text-red-500' />
						</div>
						<div className='my-4 grid grid-cols-3 gap-3'>
							<label htmlFor="email" className='text-left text-blue-300'>Enter Email : </label>
							<Field name="email" type="email" className="border rounded-sm p-1" />
							<ErrorMessage name='email' component="p" className='text-red-500' />
						</div>
						<div className='my-4 grid grid-cols-3 gap-3'>
							<label htmlFor="password1" className='text-left text-blue-300'>Create a Password : </label>
							<Field name="password1" type="password" className="border rounded-sm p-1" />
							<ErrorMessage name='password1' component="p" className='text-red-500' />
						</div>
						<div className='my-4 grid grid-cols-3 gap-3'>
							<label htmlFor="password2" className='text-left text-blue-300'>Confirm Password : </label>
							<Field name="password2" type="password" className="border rounded-sm p-1" />
							<ErrorMessage name='password2' component="p" className='text-red-500' />
						</div>
						<div>
							<button type="submit">Sign Up</button>
						</div>
					</Form>
				</Formik>
				{Object.keys(data).length > 0
					? <div>
						<hr className='my-6' />
						<table className='w-full mx-auto'>
							<caption className='mb-3'>
								Table: Database View (Users Registration Table)
							</caption>
							<tr>
								<th className='py-2 border'>First Name</th>
								<td className='py-2 border'>{data.firstName}</td>
							</tr>
							<tr>
								<th className='py-2 border'>Last Name</th>
								<td className='py-2 border'>{data.lastName}</td>
							</tr>
							<tr>
								<th className='py-2 border'>Email</th>
								<td className='py-2 border'>{data.email}</td>
							</tr>
							<tr>
								<th className='py-2 border'>Password</th>
								<td className='py-2 border'>{data.password1}</td>
							</tr>
						</table>
					</div>
					: ""
				}
			</div>
		</>
	)
}

export default App
