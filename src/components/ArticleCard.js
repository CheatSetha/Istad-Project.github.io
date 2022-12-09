import { MDBInputGroup } from "mdb-react-ui-kit"
import { useEffect, useState } from "react"
import { Button, Card, Col, Container, Modal, Row } from "react-bootstrap"
import { connect } from "react-redux"
import { Link, } from "react-router-dom"
import { fetchTags } from "../services/actions/tagsAction"
import {
	fetchArticles,
	deleteArticle,
} from "../services/actions/articleActions"

import CategoryService from "../services/CategoryService"

import NewsService from "../services/NewsService"

export const ArticleCard = (props) => {
	useEffect(() => {
		props.fetchArticles()
	}, [])

	const [article, setArticle] = useState({
		id: "",
		attributes: {
			title: " ",
			slug: " ",
			content: " ",
			publishedAt: "2022-10-25T11:17:12.345Z",
			category: {
				data: {
					id: " ",
					attributes: {
						title: "",
					},
				},
			},
			tags: {
				data: [
					{
						id: " ",
						attributes: {
							title: " ",
						},
					},
				],
			},
		},
	})
	//end of article for modal
	const [show, setShow] = useState(false)
	const [query, setQuery] = useState("")
	const handleClose = () => setShow(false)
	const btnHandleShow = (id) => {
		NewsService.fetchArticlesById(id)
			.then((res) => res.json())
			.then((res) => {
				setArticle(res.data)
				setShow(true)
				console.log(id)
			})
	}

	// for modal edit
	// const tageChangeHandler = (e) => {
	// 	if (e.target.checked) {
	// 		setTagIds((prevState) => {
	// 			return [...prevState, e.target.value]
	// 		})
	// 	} else {
	// 		let index = tagIds.indexOf(e.target.value)
	// 		tagIds.splice(index, 1)
	// 		// console.log(e.target.value)
	// 		// console.log(index)
	// 	}
	// }
	// const articleValueChangeHandler = (e) => {
	// 	const [name, value] = [e.target.name, e.target.value]
	// 	setArticle((prevState) => {
	// 		return {
	// 			...prevState,
	// 			[name]: value,
	// 		}
	// 	})
	// }
	const [tagIds, setTagIds] = useState([])

	const [categories, setCategories] = useState([
		{
			id: 0,
			attributes: {
				title: " ",
			},
		},
	])

	const [tags, setTages] = useState([
		{
			id: 0,
			attributes: {
				title: " ",
			},
		},
	])
	useEffect(() => {
		CategoryService.fetchCategory()
			.then((res) => res.json())
			.then((res) => {
				setCategories(res.data)
			})
		fetch(`https://cms.istad.co/api/tags`, { method: "GET" })
			.then((res) => res.json())
			.then((res) => {
				console.log(res.data)
				setTages(res.data)
			})
	}, [])
	
	return (
		<Container className='mt-5'>
			<div className="d-flex justify-content-between">
			<Link to={"/articleForm"}>
				<Button className='mb-3'>Add new</Button>{" "}
			</Link>
			<MDBInputGroup
				tag='form'
				className='d-flex w-50'
			>
				<input
					className='form-control mx-3'
					placeholder='search article'
					aria-label='Search'
					type='Search'
					onChange={(event) => setQuery(event.target.value)}
				/>
				<Button className='mb-3'>Search</Button>{" "}
			</MDBInputGroup>
			
			</div>

			<Row>
				{props.articles
					.filter((article) => {
						if (query === " ") {
							return article
						} else if (
							article.attributes.title
								.toLowerCase()
								.includes(query.toLowerCase())
						) {
							return article
						}
					})
					.map((article) => (
						<Col
							xl={4}
							key={article.id}
							className='p-2 cardArticle'
						>
							<Card
								className='text-start shadow-lg p-3 mb-5 bg-body rounded hover-zoom'
								variant='success'
							>
								<Card.Img
									variant='top'
									src='https://www.cnet.com/a/img/resize/e547a2e4388fcc5ab560f821ac170a59b9fb0143/hub/2021/12/13/d319cda7-1ddd-4855-ac55-9dcd9ce0f6eb/unnamed.png?auto=webp&fit=crop&height=1200&width=1200'
								/>
								<Card.Body>
									<Card.Title>
										<h4>{article.attributes.title}</h4>
									</Card.Title>
									<Card.Text>
										<p>{article.attributes.content}</p>
									</Card.Text>
									<Button
										variant='primary'
										onClick={() => btnHandleShow(article.id)}
										// onClick={() => btnDetailHandler(article.id)}
									>
										Article{article.id}
									</Button>
									<Button
										className='mx-1'
										variant='outline-danger'
										onClick={() => props.deleteArticle(article.id)}
									>
										delete
									</Button>
									
								
								
								</Card.Body>
							</Card>
						</Col>
					))}

				{/* modal section */}
				<Modal
					show={show}
					onHide={handleClose}
					backdrop='static'
					keyboard={false}
				>
					<Modal.Header closeButton>
						<Modal.Title>{article.attributes.title}</Modal.Title>
					</Modal.Header>
					<Modal.Body>
						<p>{article.attributes.title}</p>

						<p> {article.attributes.content}</p>
						<p>{article.attributes.slug}</p>
						<p>{article.attributes.category.data.attributes.title}</p>
						{article.attributes.tags.data.map((tag) => (
							<span className='d-block'>{tag.attributes.title}</span>
						))}
					</Modal.Body>
					<Modal.Footer>
						<Button
							variant='secondary'
							onClick={handleClose}
						>
							Close
						</Button>
						<Link to={`/update/${article.id}`}>
							<Button
								variant='primary'
								type='submit'
							>
								Edit
							</Button>
						</Link>
					</Modal.Footer>
				</Modal>

			</Row>
		</Container>
	)
}

const mTp = (store) => {
	return {
		articles: store.articleR.articles,
		tags: store.tagR.tags,
		
	}
}
export default connect(mTp, {
	fetchArticles,
	deleteArticle,
	fetchTags,
})(ArticleCard)
