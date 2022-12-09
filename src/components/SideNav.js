import React, { useState } from "react"
import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"
import articleService from "../services/articleService"

const SideNav = () => {
	const [article, setArticle] = useState({
		id: "1",
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
		//end of article for modal
	})
	const [show, setShow] = useState(false)

	const handleClose = () => setShow(false)
	const handleShow = () => {
		articleService
			.getArticleCategory(article)
			.then((res) => res.json())
			.then((res) => {
				setArticle(res.data)
				
				setShow(true)
			})
	}
	return (
		<div>
			<h3 className='mb-2 mt-5 p-2'> category</h3>
			<ul class='list-group list-group-numbered'>
				<li
					onClick={handleShow}
					class='list-group-item list-group-item border-0 shadow p-3 mb-1 bg-body rounded'
				>
					Web Design
				</li>
				<li
					onClick={handleShow}
					class='list-group-item list-group-item border-0 shadow p-3 mb-1 bg-body rounded'
				>
					Web3Sanim
				</li>
				<li
					onClick={handleShow}
					class='list-group-item list-group-item border-0 shadow p-3 mb-1 bg-body rounded'
				>
					Back-end
				</li>
				<li
					onClick={handleShow}
					class='list-group-item list-group-item border-0 shadow p-3 mb-1 bg-body rounded'
				>
					Mobile Development
				</li>
				<li
					onClick={handleShow}
					class='list-group-item list-group-item border-0 shadow p-3 mb-1 bg-body rounded'
				>
					IOS Development
				</li>
				<li
					onClick={handleShow}
					class='list-group-item list-group-item border-0 shadow p-3 mb-1 bg-body rounded'
				>
					Ui/UX
				</li>
			</ul>
			<div>
			
			</div>

			<Modal
				show={show}
				onHide={handleClose}
			>
				<Modal.Header closeButton>
					<Modal.Title>{article.id}</Modal.Title>
				</Modal.Header>
				<Modal.Body></Modal.Body>
				<Modal.Footer>
					<Button
						variant='secondary'
						onClick={handleClose}
					>
						Close
					</Button>
					<Button
						variant='primary'
						onClick={handleClose}
					>
						Save Changes
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	)
}
export default SideNav
