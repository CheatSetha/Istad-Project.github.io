import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import ArticleForm from "./components/ArticleForm"

import Login from "./components/login-signup/Login"
import SignUp from "./components/login-signup/SignUp"
import MainFooter from "./components/MainFooter"

import MainNavBar from "./components/MainNavBar"
import ProtectedRoute from "./components/ProtectedRoute"
import TestCategory from "./components/TestCategory"
import Update from "./components/Update"
import WebDesign from "./components/WebDesign"


import AboutUs from "./pages/AboutUs"
import ArticleNews from "./pages/articleNews"
import HomePage from "./pages/HomePage"

function App() {
	return (
		<div className='App'>
			<MainNavBar />

			<Routes>
				<Route
					path='/'
					element={
						<ProtectedRoute>
							<HomePage />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/articleNews'
					element={
						<ProtectedRoute>
							<ArticleNews />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/articleForm'
					element={<ArticleForm />}
				/>
				<Route
					path='/aboutus'
					element={
						<ProtectedRoute>
							<AboutUs />
						</ProtectedRoute>
					}
				/>
				<Route
					path='/logIn'
					element={<Login />}
				/>
				<Route
					path='/signup'
					element={<SignUp />}
				/>
				<Route
					path='/webDesign'
					element={<WebDesign />}
				/>
				<Route
					path='/category'
					element={<TestCategory />}
				/>
				<Route
					path='/update/:id'
					element={<Update />}
				/>
			</Routes>
			<MainFooter />
		</div>
	)
}

export default App
