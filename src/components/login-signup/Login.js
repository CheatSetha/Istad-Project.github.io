import { MDBBtn, MDBInput } from "mdb-react-ui-kit"
import { useEffect, useState } from "react"
import { Col, Container, Row } from "react-bootstrap"
import { useNavigate } from "react-router-dom"

const Login = () => {
	const navigate = useNavigate()
	const [userName, setUserName] = useState("")
	const [password, setPassword] = useState("")
	const login = () => {
		if (userName !== "" && password !== "") {
			if (userName === "admin" && password === "1") {
				localStorage.setItem("token", "hello token")

				navigate("/")
			}
		}
	}
	const loginBtn = (e) => {
		e.preventDefault()
		login()
	}
	useEffect(() => {
		const token = localStorage.getItem("token")
		if (token) {
			navigate("/")
		}
	})
	return (
		<div>
			<center>
				<Container>
					<div className='loginPanelContainer mt-5'>
						<Row className='shadow  mb-5 bg-body rounded m-2'>
							<Col
								md={6}
								className='p-0 '
							>
								<img
									src='https://images.pexels.com/photos/2882566/pexels-photo-2882566.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
									width={"100%"}
								/>
							</Col>
							<Col
								md={6}
								className='loginCard'
							>
								<form>
									<h1 className='text-center mb-5'> Log in</h1>
									<MDBInput
										className='mb-4 shadow-4 '
										id='emailInput'
										label='Username'
										onChange={(e) => setUserName(e.target.value)}
									/>
									<MDBInput
										onChange={(e) => setPassword(e.target.value)}
										className='mb-4 shadow-sm border-0'
										type='password'
										id='pwInput'
										label='Password'
										style={{ boxShadow: " 0px 4px 4px rgba(0, 0, 0, 0.25)" }}
									/>

									<MDBBtn
										onClick={loginBtn}
										type='submit'
										block
									>
										Log in
									</MDBBtn>
								</form>
							</Col>
						</Row>
					</div>
				</Container>
			</center>
		</div>
	)
}
export default Login
