const URI =
	process.env.NODE_ENV !== "production"
		? "http://localhost:3000"
		: "https://mywebsite.com";

export default URI;
