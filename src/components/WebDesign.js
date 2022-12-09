import React, { useEffect, useState } from "react"
import { baseUrl } from "../constant/BaseUrl"


const WebDesign = () => {
	const [article, setArticle] = useState({
		id:' ',
		attributes: {
			title: " ",
			slug: " ",
			content: "  ",
			category: {
				data: {
					id: ' ',
					attributes: {
						title: " ",
						
					},
				},
			},
		},
	})

	useEffect(() => {
		fetch(`${baseUrl}articles/${178}?populate=*`, { method: 'GET'})
			.then((res) => res.json())
			.then((res) => {
				setArticle(res.data)
			})
	}, [])
	return <div style={{ marginTop: " 10rem" }}>
	{article && article.map(a => (
		<p className="text-center"> {a.id}</p>
	))}
		
	</div>
}

export default WebDesign
