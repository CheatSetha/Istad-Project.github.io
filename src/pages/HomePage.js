import {
	MDBBtn,
	MDBCard,
	MDBCardBody,
	MDBCardImage,
	MDBCardText,
	MDBCardTitle,
	MDBCol,
	MDBRipple,
	MDBRow,
} from "mdb-react-ui-kit"
import React, { useEffect } from "react"
import { Card, Col, Container, Row } from "react-bootstrap"
import { get4Articles } from "../services/actions/articleActions"
import HomePoster from "../components/HomePoster"
import { connect } from "react-redux"

function HomePage(props) {
	useEffect(() => {
		props.get4Articles()
		
	
	},[])
	return (
		<div className="mt-2">
			<div className='HomeHeader'>
				<HomePoster />

				<Container className='g-3'>
					<Row>
						{props.articles.map(a=> (
							<Col
							md={3}
							className=' mt-3 mb-3 '
						>
							<MDBCard className='text-start card4'>
								<MDBRipple
									rippleColor='light'
									rippleTag='div'
									className='bg-image hover-overlay'
								>
									<MDBCardImage
										src='https://ichef.bbci.co.uk/news/976/cpsprodpb/11A44/production/_127406227_bridge.jpg.webp'
										fluid
										alt='...'
									/>
									<a>
										<div
											className='mask'
											style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
										></div>
									</a>
								</MDBRipple>
								<MDBCardBody>
									<MDBCardTitle>{a.attributes.title}</MDBCardTitle>
									<Card.Text>
										<p>{a.attributes.content}</p>
									</Card.Text>
					
								
								</MDBCardBody>
							</MDBCard>
						</Col>
						))}
						
						{/* <Col
							md={3}
							className=' mt-3'
						>
							<MDBCard className='text-start '>
								<MDBRipple
									rippleColor='light'
									rippleTag='div'
									className='bg-image hover-overlay'
								>
									<MDBCardImage
										src='https://ichef.bbci.co.uk/news/976/cpsprodpb/17669/production/_127394859_e9b9228d99ccaf5cf470c1d882f732dad153dbf3.jpg.webp'
										fluid
										alt='...'
									/>
									<a>
										<div
											className='mask'
											style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
										></div>
									</a>
								</MDBRipple>
								<MDBCardBody>
									<MDBCardTitle>Russia to ban sharing LGBT 'propaganda' with adults as well as children</MDBCardTitle>
									
								
								</MDBCardBody>
							</MDBCard>
						</Col>
						<Col
							md={3}
							className=' mt-3'
						>
							<MDBCard className='text-start'>
								<MDBRipple
									rippleColor='light'
									rippleTag='div'
									className='bg-image hover-overlay'
								>
									<MDBCardImage
										src='https://ichef.bbci.co.uk/news/976/cpsprodpb/5E9F/production/_127332242_gettyimages-854979156.jpg.webp'
										fluid
										alt='...'
									/>
									<a>
										<div
											className='mask'
											style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
										></div>
									</a>
								</MDBRipple>
								<MDBCardBody>
									<MDBCardTitle>Beyond the US midterms: The Swiss answer to congressional gridlock</MDBCardTitle>
									
									
								</MDBCardBody>
							</MDBCard>
						</Col>
						<Col
							md={3}
							className=' mt-3'
						>
							<MDBCard className='text-start'>
								<MDBRipple
									rippleColor='light'
									rippleTag='div'
									className='bg-image hover-overlay'
								>
									<MDBCardImage
										src='https://ichef.bbci.co.uk/news/976/cpsprodpb/0F46/production/_127401930_c4ed86ad-ffe2-4b37-8c7d-4e524fbd013b.jpg.webp'
										fluid
										alt='...'
									/>
									<a>
										<div
											className='mask'
											style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
										></div>
									</a>
								</MDBRipple>
								<MDBCardBody>
									<MDBCardTitle>World faces most dangerous decade since WW2 - Putin</MDBCardTitle>
								
								
								</MDBCardBody>
							</MDBCard>
						</Col> */}
					</Row>
				</Container>
			</div>
			<Container>
				<div>
					<MDBCard className='mt-3'>
						<MDBRow className='g-0'>
							<MDBCol md='6'>
								<MDBCardImage
									src='https://ichef.bbci.co.uk/news/976/cpsprodpb/1647C/production/_127406219_rescue.jpg.webp'
									alt='...'
									fluid
								/>
							</MDBCol>
							<MDBCol md='6'>
								<MDBCardBody>
									<MDBCardTitle>A British man has been rescued by a Dutch fishing boat in the Channel after his kayak capsized and he was left holding on to a buoy for days.</MDBCardTitle>
									<MDBCardText>
									The captain, Teunis de Boer, said he had by chance seen the kayaker waving frantically as his boat Madeleine sailed past.

"He was clearly in distress," the captain told Dutch media.

After the man was given water and a chocolate bar, he was airlifted to hospital by French authorities.

The drama unfolded late on Thursday morning several miles west off the French coast, in a shipping lane of the Dover Strait, also known as the Pas de Calais.
									</MDBCardText>
									<MDBCardText>
										<small className='text-muted'>
											Last updated 3 mins ago
										</small>
									</MDBCardText>
								</MDBCardBody>
							</MDBCol>
						</MDBRow>
					</MDBCard>
					{/* end of card 1 */}
					<MDBCard className='mt-3'>
						<MDBRow className='g-0'>
							<MDBCol md='6'>
								<MDBCardBody>
									<MDBCardTitle>
										'Massive' drone attack on Black Sea Fleet - Russia
									</MDBCardTitle>
									<MDBCardText>
										Nine drones were used, a top official said. Ukraine has not
										commented. Without providing evidence, Russia accused
										British troops of being involved in that attack - and in
										blowing up gas pipelines last month. The UK Ministry of
										Defence (MoD) said Russia was "peddling false claims of an
										epic scale." Saturday's attack comes as Ukrainian troops
										successfully retake territory occupied by occupying
										Russians. Russia has replied by launching large-scale
										attacks on Ukrainian infrastructure, particularly on the
										country's energy grid. Mikhail Razvozhaev, the
										Russian-installed governor of the Sevastopol, said Russia's
										navy had repelled the latest attack - the "most massive" on
										the city since Russia launched the invasion 
									</MDBCardText>
									<MDBCardText>
										<small className='text-muted'>
											Last updated 3 mins ago
										</small>
									</MDBCardText>
								</MDBCardBody>
							</MDBCol>
							<MDBCol md='6'>
								<MDBCardImage
									src='https://ichef.bbci.co.uk/news/976/cpsprodpb/169AF/production/_127419529_sevastopol.png.webp'
									alt='...'
									fluid
								/>
							</MDBCol>
						</MDBRow>
					</MDBCard>
				</div>
				<Row>
					{props.articles.map((article) => (
						<Col
							md={3}
							className=' mt-3 mb-3 '
						>
							<MDBCard className='text-start card4'>
								<MDBRipple
									rippleColor='light'
									rippleTag='div'
									className='bg-image hover-overlay'
								>
									<MDBCardImage
										src='https://images.pexels.com/photos/247431/pexels-photo-247431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
										fluid
										alt='...'
									/>
									<a>
										<div
											className='mask'
											style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
										></div>
									</a>
								</MDBRipple>
								<MDBCardBody>
									<MDBCardTitle>{article.attributes.title}</MDBCardTitle>
									<MDBCardText>{article.attributes.content}</MDBCardText>
								</MDBCardBody>
							</MDBCard>
						</Col>
					))}
				</Row>
			</Container>
		</div>
	)
}
const mTp = (store) => {
	return {
		articles: store.articleR.articles,
	}
}
export default connect(mTp, { get4Articles })(HomePage)
