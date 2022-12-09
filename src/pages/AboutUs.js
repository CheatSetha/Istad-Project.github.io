


import { Col, Container, Row } from "react-bootstrap"

export default function AboutUs() {
 
  return (
   <Container>
     <div className="mt-5">
      <div className="about-us ">
        <Row>
          <Col md={6}>
            <div className="about-us-child text-start p-5">
              <h2> Hello , I am</h2>
              <h1 style={{color:'#253c95'}}> Setha</h1>
              <p>
                {" "}
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
            </div>
          </Col>
          <Col md={6}>
           <div className="about-us-child2"
          >
           <img
              src="https://clouddevs.com/3dbay/files/preview/960x960/11632331359f3bfhzp6nbmka348kvwdg9zkb4rwk2wj2cb1ahx8s6lomsvubj1nn8jhzfmgcqehl3jksmxkmnupnvffgjzotqpyct9jnkta9uha.png"
              className="rounded m-0"
              alt="..."
            />
           </div>
          </Col>
        </Row>
      </div>
    </div>
   </Container>
  )
}
