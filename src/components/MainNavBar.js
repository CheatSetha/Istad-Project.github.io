import {
	MDBBtn,
	MDBCollapse,
	MDBContainer,
	MDBIcon,
	MDBInputGroup,
	MDBNavbar,
	MDBNavbarBrand,
	MDBNavbarItem,
	MDBNavbarLink,
	MDBNavbarNav,
	MDBNavbarToggler,
} from "mdb-react-ui-kit"
import { useEffect, useState } from "react"

import { connect } from "react-redux"
import { Link } from "react-router-dom"
import {
	fetchArticles,
	
} from "../services/actions/articleActions"
import logo from "../img/newspaper.png"
export const MainNavBar = (props) => {
	useEffect(() => {
		props.fetchArticles()
	}, [])
	const [showNavNoToggler, setShowNavNoToggler] = useState(false)
	
	return (
		<div
			className='navContainer'
			style={{ backgroundColor: "white" }}
		>
			<MDBNavbar
				// fixed='top'
				light
				bgColor='primary'
				className='topNavBar'
			>
				<MDBContainer>
					<MDBNavbarBrand>
						<img
							src={logo}
							alt='Logo'
							width={45}
						/>
					</MDBNavbarBrand>

					<div>
						<Link to={"/signup"}>
							<MDBBtn 
							
							className='mx-2 btn btn-light'>Sign up</MDBBtn>
						</Link>
						<Link to={"/logIn"}>
							<MDBBtn 
							className="btn btn-light" data-mdb-ripple-color="dark"
							>Log in</MDBBtn>
						</Link>
					</div>
				</MDBContainer>
			</MDBNavbar>
			<MDBNavbar
				sticky
				expand='lg'
				light
				bgColor='light'
				className='secondaryNav '
			>
				<MDBContainer>
					<MDBNavbarToggler
						type='button'
						data-target='#navbarTogglerDemo01'
						aria-controls='navbarTogglerDemo01'
						aria-expanded='false'
						aria-label='Toggle navigation'
						onClick={() => setShowNavNoToggler(!showNavNoToggler)}
					>
						<MDBIcon
							icon='bars'
							fas
						/>
					</MDBNavbarToggler>
					<MDBCollapse
						navbar
						show={showNavNoToggler}
					>
						<MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
							{/* navbar items start from here */}
							<Link to={"/"}>
								<MDBNavbarItem>
									<MDBNavbarLink
										active
										aria-current='page'
										href='#'
									>
										Home
									</MDBNavbarLink>
								</MDBNavbarItem>
							</Link>
							<Link to={"/articleNews"}>
								<MDBNavbarItem>
									<MDBNavbarLink
										active
										aria-current='page'
										href='#'
									>
										Category
									</MDBNavbarLink>
								</MDBNavbarItem>
							</Link>
							<Link to={"/aboutus"}>
								<MDBNavbarItem>
									<MDBNavbarLink
										active
										aria-current='page'
										href='#'
									>
									About Us
									</MDBNavbarLink>
								</MDBNavbarItem>
							</Link>
							{/* end of nav bar items */}
						</MDBNavbarNav>
						<MDBInputGroup
							tag='form'
							className='d-flex w-50'
						>
							<input
								className='form-control mx-3'
								placeholder='search article'
								aria-label='Search'
								type='Search'
								
							/>
							<MDBBtn bgprimary >Search</MDBBtn>
						</MDBInputGroup>
					</MDBCollapse>
				</MDBContainer>
			</MDBNavbar>
		</div>
	)
}

const mTp = (store) => {
	return {
		articles: store.articleR.articles,
	}
}
export default connect(mTp, { fetchArticles,})(MainNavBar)
