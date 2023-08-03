import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./routes/Layout";
import AdminLayout from "./routes/Admin/AdminLayout";
import AdminLogin from "./routes/Admin/AdminLogin";
import AdminDashboard from "./routes/Admin/AdminDashboard";
import Home from "./routes/Home";
import About from "./routes/About";
import Services from "./routes/Services";
import Resume from "./routes/Resume";
import Projects from "./routes/Projects";
import Testimonials from "./routes/Testimonials";
import Contact from "./routes/Contact";
import BotLog from "./routes/BotLog";
import WebAbacus from "./routes/WebAbacus";

const router = createBrowserRouter([
	{
		path: "/",
		element: <Layout />,
		children: [
			{
				path: "admin/",
				element: <AdminLayout />,
				children: [
					{
						path: "login",
						element: <AdminLogin />,
					},
					{
						path: "dashboard",
						element: <AdminDashboard />,
					},
				],
			},
			{
				path: "/",
				element: <Home />,
			},
			{
				path: "about",
				element: <About />,
			},
			{
				path: "services",
				element: <Services />,
			},
			{
				path: "resume",
				element: <Resume />,
			},
			{
				path: "projects",
				element: <Projects />,
			},
			{
				path: "testimonials",
				element: <Testimonials />,
			},
			{
				path: "contact",
				element: <Contact />,
			},
			{
				path: "botlog",
				element: <BotLog />,
			},
			{
				path: "webabacus",
				element: <WebAbacus />,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>
);
