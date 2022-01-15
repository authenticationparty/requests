import {
	Links,
	LiveReload,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration
} from "remix";

import styles from "./tailwind.css";
export function links() {
	return [
		// Tailwind
		{ rel: 'stylesheet', href: styles },
		// Rubik Font
		{ rel: "preconnect", href: "https://fonts.googleapis.com"},
		{ rel: "preconnect", href: "https://fonts.gstatic.com"},
		{ rel:"stylesheet", href: "https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;700&display=swap" },
	];
}

import type { MetaFunction } from "remix";

export const meta: MetaFunction = () => {
	return {
		title: "AuthParty",
		description: "Test APIs with zero to no coding",
		url: "https://auth.party",
	};
};

export default function App() {
	return (
		<html lang="en">
		<head>
			<meta charSet="utf-8" />
			<meta name="viewport" content="width=device-width,initial-scale=1" />
			<Meta />
			<Links />
		</head>
		<body style={{fontFamily: "'Rubik', 'Arial'"}} className="bg-dark-800 text-white">
			<Outlet />
			<ScrollRestoration />
			<Scripts />
			{process.env.NODE_ENV === "development" && <LiveReload />}
		</body>
		</html>
	);
}
