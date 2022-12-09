import { MDBIcon } from "mdb-react-ui-kit"
import { Container } from "react-bootstrap"
const MainFooter = () => {
	return (
		<Container
			fluid
			className='bg-dark'
		>
			<h4  className='text-center py-3 text-light'> Article</h4>

			<footer className='d-flex flex-wrap justify-content-between align-items-center py-3  border-top '>
				<div className='col-md-4 d-flex align-items-center'>
					<a
						href='/'
						className='me-2 mb-md-0 text-muted text-decoration-none lh-1'
					></a>
					<span className='mb-3 mb-md-0 text-muted'>© 2022 Company, Inc</span>
				</div>

				<ul className='nav col-md-4 justify-content-end list-unstyled d-flex'>
					<li className='ms-3'>
						<MDBIcon
							color='light'
							className='fs-2'
							fab
							icon='facebook-square'
						/>
					</li>
					<li className='ms-3'>
						<MDBIcon
							color='light'
							className='fs-2'
							fab
							icon='instagram'
						/>
					</li>
					<li className='ms-3'>
						<MDBIcon
							color='light'
							className='fs-2'
							fab
							icon='telegram'
						/>
					</li>
				</ul>
			</footer>
		</Container>
	)
}
export default MainFooter
