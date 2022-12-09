import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import { fetchArticles } from "../services/actions/articleActions"

const TestCategory = (props) => {
	useEffect(() => {
		props.fetchArticles()
	}, [])

	return <div>
        {props.articles.map(a => (
            <p> {a.attributes.category}</p>
        ))}
    </div>
}

const mTp = (store) => {
	return {
		articles: store.articleR.articles,
	}
}
export default connect(mTp, {
	fetchArticles,
})(TestCategory)
