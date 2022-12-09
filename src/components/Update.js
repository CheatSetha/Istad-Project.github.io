import { useEffect, useState } from "react"
import { Button, Col, Container, Form, Row } from "react-bootstrap"

import { useLocation, useNavigate,} from "react-router-dom"
import { baseUrl } from "../constant/BaseUrl"
import CategoryService from "../services/CategoryService"

const Update = () => {
	const navigate = useNavigate()

	const [tagIds, setTagIds] = useState([])
	const [article, setArticle] = useState({
		title: " ",
		slug: " ",
		content: " ",
		category: 0,
		tags: [],
		thumbnail: 3,
		users_permissions_user: 1,
	})
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
	// end of category section

	const articleValueChangeHandler = (e) => {
		const [name, value] = [e.target.name, e.target.value]
		setArticle((prevState) => {
			return {
				...prevState,
				[name]: value,
			}
		})
	}
	const tageChangeHandler = (e) => {
		if (e.target.checked) {
			setTagIds((prevState) => {
				return [...prevState, e.target.value]
			})
		} else {
			let index = tagIds.indexOf(e.target.value)
			tagIds.splice(index, 1)
		}
	}
	// update funtion
	
	const location = useLocation()
	const id = location.pathname.split("/")[2]
	const handleUpdate = (e) => {
		article.tags = tagIds
		const body = {
			data: article,
		}
		e.preventDefault()
		fetch(`https://cms.istad.co/api/articles/${id}`, {
			method: "PUT",
			body: JSON.stringify(body),
			headers: {
				"Content-Type": "application/json",
				accept: " application/json",
			},
		}).then((res) =>
			res.json().then((res) => {
				console.log(res)
				navigate("/articleNews")
			})
		)
	}
	const [articles, setArticles] = useState({
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
	useEffect(() => {
		fetch(`${baseUrl}articles/${id}?populate=*`, { method: "GET" })
			.then((res) => res.json())
			.then((res) => setArticles(res.data))
	},[])
	// end of update funtion
console.log(articles)
	return (
		<div className='pt-5'>
			<Container className='article-container '>
				<h1 className='text-start fw-bold'>Update article</h1>
				<hr />
				<Form>
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
									// defaultValue={articles.attributes.slug}
									onChange={articleValueChangeHandler}
									type='text'
									placeholder='How to learn web design'
									name='title'
								/>
							</Form.Group>

							<Form.Group
								className='mb-3'
								controlId='formBasicSlug'
							>
								<Form.Label>Slug</Form.Label>
								<Form.Control
									// defaultValue={articles.attributes.slug}
									onChange={articleValueChangeHandler}
									type='text'
									placeholder='how-to-learn-web-design'
									name='slug'
								/>
							</Form.Group>

							<Form.Group
								className='mb-3'
								controlId='formBasicContent'
							>
								<Form.Label>Content</Form.Label>
								<Form.Control
									// defaultValue={articles.attributes.content}
									onChange={articleValueChangeHandler}
									as='textarea'
									rows={4}
									name='content'
								/>
							</Form.Group>

							<Button
								onClick={handleUpdate}
								variant='primary'
								type='button'
							>
								Update
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
								{tags &&
									tags.map((tag) => (
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
		</div>
	)
}

export default Update
