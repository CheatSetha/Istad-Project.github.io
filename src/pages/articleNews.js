import { Col, Container, Row } from "react-bootstrap"
import { connect } from "react-redux"
import ArticleCard from "../components/ArticleCard"
import SideNav from "../components/SideNav"
import { fetchArticles } from "../services/actions/articleActions"

export const ArticleNews = () => {
	return (
		<Container >
			<Row>
                <Col md={3}>
                    <SideNav />
                </Col>
                <Col md={9} >
                    <ArticleCard/>
                </Col>
            </Row>

		</Container>
	)
}

const mTp = (store) => {
	return {
		articles: store.articleR.articles,
	}
}
export default connect(mTp, { fetchArticles })(ArticleNews)
