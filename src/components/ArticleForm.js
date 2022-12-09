import { useEffect, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"
import { connect } from "react-redux"
import { fetchArticles } from "../services/actions/articleActions"
import articleService from "../services/articleService"
import CategoryService from "../services/CategoryService"

import { fetchTags } from "../services/actions/tagsAction"
import { useNavigate } from "react-router-dom"

export const ArticleForm = (props) => {

	
	const [tagIds, setTagIds] = useState([])
	const [tags, setTages] = useState([
		{
			id: 0,
			attributes: {
				title: " ",
			},
		},
	])
	const [categories, setCategories] = useState([
		{
			id: 0,
			attributes: {
				title: " ",
			},
		},
	])
	const [article, setArticle] = useState({
		title: " ",
		slug: " ",
		category: 0,
		content: " ",
		tags: [],
		thumbnail: 3,
		users_permissions_user: 1,
	})
	const tageChangeHandler = (e) => {
		if (e.target.checked) {
			setTagIds((prevState) => {
				return [...prevState, e.target.value]
			})
		} else {
			let index = tagIds.indexOf(e.target.value)
			tagIds.splice(index, 1)
			// console.log(e.target.value)
			// console.log(index)
		}
	}
	const articleValueChangeHandler = (e) => {
		const [name, value] = [e.target.name, e.target.value]
		setArticle((prevState) => {
			return {
				...prevState,
				[name]: value,
			}
		})
	}

	const navigate= useNavigate()
	const articleSubmitHandler = (e) => {
		article.tags = tagIds
		const body = {
			data: article,
		}
		alert('submit success');
		console.log(article)
		e.preventDefault()
		articleService.postArticles(body).then((res) =>
			res.json().then((res) => {
				console.log(res)
				navigate('/articleNews')
			})
		)
	}
	useEffect(() => {
		props.fetchTags()
		
		CategoryService.fetchCategory()
			.then((res) => res.json())
			.then((res) => {
				setCategories(res.data)
			})
		
	}, [])
	console.log(props.fetchTag)
	return (
		<Container className=' articleHeader'>
			<h1 className='text-center fw-bold'>Add a new article</h1>
			<hr />
			<Form onSubmit={articleSubmitHandler}>
				<Row>
					<Col
						md={6}
						className='text-start'
					>
						<Form.Group
							className='mb-3'
							controlId='formBasicTitle'
						>
							<Form.Label>Title</Form.Label>
							<Form.Control
								onChange={articleValueChangeHandler}
								type='text'
								name='title'
								placeholder='How to learn web design'
							/>
						</Form.Group>

						<Form.Group
							className='mb-3'
							controlId='formBasicSlug'
						>
							<Form.Label>Slug</Form.Label>
							<Form.Control
								onChange={articleValueChangeHandler}
								type='text'
								name='slug'
								placeholder='how-to-learn-web-design'
							/>
						</Form.Group>

						<Form.Group
							className='mb-3'
							controlId='formBasicContent'
						>
							<Form.Label>Content</Form.Label>
							<Form.Control
								onChange={articleValueChangeHandler}
								as='textarea'
								rows={4}
								name='content'
							/>
						</Form.Group>

						<Button
							variant='primary'
							type='submit'
						>
							Save
						</Button>
					</Col>
					<Col
						md={6}
						className='text-start'
					>
						<Form.Group
							className='mb-3'
							controlId='formBasicCategory'
						>
							<Form.Label>Category</Form.Label>
							<Form.Select
								onChange={articleValueChangeHandler}
								defaultValue={0}
								aria-label='Article Category'
								name='category'
							>
								<option
									disabled
									value={0}
								>
									Choose category
								</option>
								{/* loop api to category */}
								{categories &&
									categories.map((category) => (
										<option value={category.id}>
											{category.attributes.title}
										</option>
									))}
							
							</Form.Select>
						</Form.Group>
						<Form.Group className='mb-3'>
							<Form.Label>Tag</Form.Label>
							{props.tags &&
								props.tags.map((tag) => (
									<Form.Check
										key={tag.id}
										onChange={tageChangeHandler}
										value={tag.id}
										label={tag.attributes.title}
										name='tag'
									/>
								))}
							
						</Form.Group>
					</Col>
				</Row>
			</Form>
		</Container>
	)
}

const mTp = (store) => {
	return {
		articles: store.articleR.articles,
		tags: store.tagR.tags
	}
}
export default connect(mTp, { fetchArticles,fetchTags })(ArticleForm)
