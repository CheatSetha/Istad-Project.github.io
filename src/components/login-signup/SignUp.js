import { useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

const SignUp = () => {
	const [validated, setValidated] = useState(false)

	const [firstName, setFirstName] = useState("")
	const [lastName, setLastName] = useState("")
	const [email, setEmail] = useState("")
	const [passWord, setPassWord] = useState("")
	const [confirmPassword, setConfirmPassword] = useState("")

	const btnSubmitHandler = (event) => {
		event.preventDefault()
		const user = {
			firstName: firstName,
			lastName: lastName,

			email: email,
			password: passWord,
			confirmPassword: confirmPassword,
		}
		localStorage.setItem('email',JSON.stringify(email))
		localStorage.setItem('password',JSON.stringify(passWord))
		console.log(user)
	}

	const firstNameOnchangeHandler = (event) => {
		setFirstName(event.target.value)
	}
	const lastNameOnchangeHandler = (event) => {
		setLastName(event.target.value)
	}
	const emailOnchangeHandler = (event) => {
		setEmail(event.target.value)
	}
	const passwordOnchangeHandler = (event) => {
		setPassWord(event.target.value)
	}
	const confirmPasswordOnchangeHandler = (event) => {
		setConfirmPassword(event.target.value)
	}

	return (
		<div className='signUp'>
			<Container className='w-75 text-start signUp'>
				<Row>
					<Col
						md={6}
						className='p-0'
					>
						<img
							className='imgSignUp'
							src='https://img.freepik.com/premium-vector/illustration-vector-graphic-cartoon-character-login_516790-1261.jpg?w=2000'
							alt='...'
						/>
					</Col>
					<Col
						md={6}
						className=''
					>
						<div className='singupContainer shadow  mb-5 bg-body rounded m-2 p-5 rounded'>
							<h1> Create Your Account</h1>
							<hr />
							<Form
								noValidate
								validated={validated}
								onSubmit={btnSubmitHandler}
								className='justify-content-start'
							>
								<Row className='mb-3'>
									<Form.Group
										as={Col}
										md='6'
										controlId='validationCustom01'
									>
										<Form.Label> First Name</Form.Label>
										<Form.Control
											onChange={firstNameOnchangeHandler}
											required
											type='text'
											placeholder='Enter Your first name'
											defaultValue=' '
										/>
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									</Form.Group>
									<Form.Group
										as={Col}
										md='6'
										controlId='validationCustom01'
										className='mb-3'
									>
										<Form.Label> last name</Form.Label>
										<Form.Control
											onChange={lastNameOnchangeHandler}
											required
											type='text'
											placeholder="Enter your LastName"
											defaultValue=' '
										/>
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									</Form.Group>
									<Form.Group
										as={Col}
										md='12'
										controlId='validationCustom02'
									>
										<Form.Label>Email</Form.Label>
										<Form.Control
											onChange={emailOnchangeHandler}
											required
											type='Email'
											placeholder='Enter your email'
											defaultValue=' '
										/>
										<Form.Control.Feedback>Looks good!</Form.Control.Feedback>
									</Form.Group>
								</Row>
								<Row className='mb-3'>
									<Form.Group
										as={Col}
										md='12'
										controlId='validationCustom03'
										className='mb-3'
									>
										<Form.Label>Password</Form.Label>
										<Form.Control
											onChange={passwordOnchangeHandler}
											type='Password'
											placeholder='Enter Password'
											required
										/>
										<Form.Control.Feedback type='invalid'>
											Please provide a valid Password.
										</Form.Control.Feedback>
									</Form.Group>

									<Form.Group
										as={Col}
										md='12'
										controlId='validationCustom03'
										className='mb-3'
									>
										<Form.Label>Confirm Password</Form.Label>
										<Form.Control
											onChange={confirmPasswordOnchangeHandler}
											type='Password'
											placeholder='ConfirmPassword'
											required
										/>
										<Form.Control.Feedback type='invalid'>
											Please provide a valid Password.
										</Form.Control.Feedback>
									</Form.Group>
								</Row>
								<Form.Group className='mb-3'>
									<Form.Check
										required
										label='Agree to terms and conditions'
										feedback='You must agree before submitting.'
										feedbackType='invalid'
									/>
								</Form.Group>
								<Button
									type='submit'
									className='mb-5'
								>
									Submit form
								</Button>
							</Form>
						</div>
					</Col>
				</Row>
{/* 
				<h2> {firstName}</h2>
				<h2> {lastName}</h2>
				<h2> {email}</h2>
				<h2> {passWord}</h2>
				<h2> {confirmPassword}</h2> */}
			</Container>
		</div>
	)
}
export default SignUp
