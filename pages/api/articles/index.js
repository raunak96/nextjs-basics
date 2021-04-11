import axios from "axios";

const handler = async (req, res) => {
	const { data: articles } = await axios.get(
		"https://jsonplaceholder.typicode.com/posts?_limit=8"
	);
	res.status(200).json(articles);
};

export default handler;
